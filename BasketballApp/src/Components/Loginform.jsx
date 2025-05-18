import React, { useState } from 'react';
import axios from 'axios';
import '../Cssfiles/modal.css';

function Login({isOpen, onClose, onLoginSuccess}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null); // store auth token

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      const receivedToken = response.data.token;
      setToken(receivedToken);

      // Optional: store token in localStorage
      localStorage.setItem('authToken', receivedToken);

      console.log('Login successful!');
      onLoginSuccess();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  if(!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handleLogin}>
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Login;