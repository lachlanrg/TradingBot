
pip install MetaTrader5

import MetaTrader5 as mt
from datetime import datetime

mt.initialize()

login =
password = ''
server = ''

mt.login(login, password, server)

rates = mt.copy_rates_from('TSLA.NAS',mt.TIMEFRAME_D1,datetime.now(),100)

ticker = 'TSLA.NAS'
interval = mt.TIMEFRAME_D1
from_date = datetime.now()
no_of_rows = 100

rates = mt.copy_rates_from(ticker,interval,from_date,no_of_rows)
rates

account_info = mt.account_info()
account_info

account_info.balance

account_info.login

num_symbols = mt.symbols_total()
num_symbols

symbol_info = mt.symbols_get()
symbol_info

mt.symbol_info('TSLA.NAS')._asdict()

import pandas as pd

ohlc = pd.DataFrame(mt.copy_rates_range('TSLA.NAS',mt.TIMEFRAME_M1, datetime(2023,7,21), datetime.now()))
ohlc

ohlc['time'] = pd.to_datetime(ohlc['time'],unit='s')
ohlc

import plotly.express as px

fig = px.line(ohlc, x = ohlc['time'], y = ohlc['close'])
fig.show()

import MetaTrader5 as mt

symbol = 'BTCUSD'

request={
    "action": mt.TRADE_ACTION_DEAL,
    "symbol": symbol,
    "volume": 0.01,
    "type": mt.ORDER_TYPE_BUY,
    'price': mt.symbol_info_tick(symbol).ask,
    'sl': 29000.0,
    'tp': 33000.0,
    'comment': 'Python Script Buy',
    'type_time': mt.ORDER_TIME_GTC,
    'type_filling': mt.ORDER_FILLING_IOC
}

# send a trading request
result=mt.order_send(request)

result

request = {
    "action": mt.TRADE_ACTION_DEAL,
    "symbol": "BTCUSD",
    "volume": 0.01, # FLOAT
    "type": mt.ORDER_TYPE_SELL ,
    "price": mt.symbol_info_tick("BTCUSD").bid,
    "sl": 33000.0, # FLOAT
    "tp": 29000.0, # FLOAT
    "comment": "Python Script Open",
    "type_time": mt.ORDER_TIME_GTC,
    "type_filling": mt.ORDER_FILLING_IOC,
}

order = mt.order_send(request)
order

request = {
    "action": mt.TRADE_ACTION_DEAL,
    "symbol": "BTCUSD",
    "volume": 0.01, # FLOAT
    "type": mt.ORDER_TYPE_BUY,
    "position": 444395568, # select the position you want to close
    "price": mt.symbol_info_tick("BTCUSD").ask,
    "comment": "Close Position",
    "type_time": mt.ORDER_TIME_GTC,
    "type_filling": mt.ORDER_FILLING_IOC,
}

order = mt.order_send(request)
print(order)



# Trading Bot

ticker = 'BTCUSD'
qty = 0.01
buy_order_type = mt.ORDER_TYPE_BUY
sell_order_type = mt.ORDER_TYPE_SELL
buy_price = mt.symbol_info_tick("BTCUSD").ask
sell_price = mt.symbol_info_tick("BTCUSD").bid
sl_pct = 0.05
tp_pct = 0.1
buy_sl = buy_price * (1-sl_pct)
buy_tp = buy_price * (1+tp_pct)
sell_sl = sell_price * (1+sl_pct)
sell_tp = sell_price * (1-tp_pct)

def create_order(ticker, qty, order_type, price, sl, tp):
    request = {
        "action": mt.TRADE_ACTION_DEAL,
        "symbol": ticker,
        "volume": qty, # FLOAT
        "type": order_type ,
        "price": price,
        "sl": sl, # FLOAT
        "tp": tp, # FLOAT
        "comment": "Python Open Position",
        "type_time": mt.ORDER_TIME_GTC,
        "type_filling": mt.ORDER_FILLING_IOC,
    }
    order = mt.order_send(request)
    return order

def close_order(ticker, qty, order_type, price):
    request = {
        "action": mt.TRADE_ACTION_DEAL,
        "symbol": ticker,
        "volume": qty, # FLOAT
        "type": order_type,
        "position": mt.positions_get()[0]._asdict()['ticket'], # select the position you want to close
        "price": price,
        "comment": "Close Position",
        "type_time": mt.ORDER_TIME_GTC,
        "type_filling": mt.ORDER_FILLING_IOC,
    }

    order = mt.order_send(request)

import time

# Pine Script

# longCondition = close > high[1]
# shortCondition = close < low[1]
# closelongcondition = close < close[1]
# closeshortcondition = close > close[1]

for i in range(100):
    ohlc = pd.DataFrame(mt.copy_rates_range('BTCUSD',mt.TIMEFRAME_M1, datetime(2023,7,21), datetime.now()))
    ohlc['time'] = pd.to_datetime(ohlc['time'],unit='s')
    print(ohlc)

    current_close = list(ohlc[-1:]['close'])[0]
    last_close = list(ohlc[-2:]['close'])[0]
    last_high = list(ohlc[-2:]['high'])[0]
    last_low = list(ohlc[-2:]['low'])[0]
    long_condition = current_close > last_high
    short_condition = current_close < last_low
    closelong_condition = current_close < last_close
    closeshort_condition = current_close > last_close

    already_buy = False
    already_sell = False

    try:
        already_sell = mt.positions_get()[0]._asdict()['type'] == 1
        already_buy = mt.positions_get()[0]._asdict()['type'] == 0
    except:
        pass

    no_positions = len(mt.positions_get()) == 0

    if long_condition:
        if no_positions:
            create_order(ticker, qty, buy_order_type, buy_price, buy_sl, buy_tp)
            print('Buy Order Placed')
        if already_sell:
            close_order(ticker,qty,buy_order_type,buy_price)
            print('Sell Position Closed')
            time.sleep(1)
            create_order(ticker, qty, buy_order_type, buy_price, buy_sl, buy_tp)
            print('Buy Order Placed')
    if short_condition:
        if no_positions:
            create_order(ticker, qty, sell_order_type, sell_price, sell_sl, sell_tp)
            print('Sell Order Placed')
        if already_buy:
            close_order(ticker,qty,sell_order_type,sell_price)
            print('Buy Position Closed')
            time.sleep(1)
            create_order(ticker, qty, sell_order_type, sell_price, sell_sl, sell_tp)
            print('Sell Order Placed')

    try:
        already_sell = mt.positions_get()[0]._asdict()['type'] == 1
        already_buy = mt.positions_get()[0]._asdict()['type'] == 0
    except:
        pass

    if closelong_condition and already_buy:
        close_order(ticker,qty,sell_order_type,sell_price)
        print('Only Buy Position Closed')
    if closeshort_condition and already_sell:
        close_order(ticker,qty,buy_order_type,buy_price)
        print('Only Sell Position Closed')

    already_buy = False
    already_sell = False
    time.sleep(60)

















