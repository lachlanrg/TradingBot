import React, { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here, such as validating the username and password
    // For simplicity, always consider login successful for this example
    onLogin();
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
