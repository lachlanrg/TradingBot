import React from 'react';
import { EuiBasicTable } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css'; // Import the light theme


const Trading = () => {
  const columns = [
    {
        field: 'symbol',
        name: 'Symbol',
    },
    {
        field: 'price',
        name: 'Price',
    },
    {
        field: 'volume',
        name: 'Volume',
    },
    {
        field: 'date',
        name: 'Date',
    },
  ];

  const items = [
    { id: 1, symbol: 'AAPL', price: '$150.25', volume: '1,000,000' },
    { id: 2, symbol: 'GOOGL', price: '$2,800.50', volume: '500,000' },
    { id: 3, symbol: 'AMZN', price: '$3,400.75', volume: '750,000' },
  ];

  return (
    <div>
      <h1>Trading Page</h1>
      <EuiBasicTable
        items={items}
        columns={columns}
        tableLayout="auto"
        responsive
        className="light-table" // Add a custom class for light table
      />
    </div>
  );
};

export default Trading;