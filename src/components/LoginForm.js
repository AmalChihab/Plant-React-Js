import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import axios from 'axios'; 
import '../Style/LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/plants/auth/signin', {
        username,
        password,
      });
      const { accessToken } = response.data;
      console.log('Token:', accessToken);
      localStorage.setItem('token', accessToken);
      navigate('/plants');
    } catch (error) {
      console.error('Authentication failed:', error.response?.data || error.message || 'Unknown error');      // Handle authentication failure (e.g., show an error message to the user)
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Connect
        </button>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
