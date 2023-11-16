import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import axios from 'axios';
import '../Style/LoginForm.css';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      // Add your sign-up logic here, make a POST request to the server
      const response = await axios.post('http://localhost:8080/api/plants/auth/signup', {
        username,
        email,
        password,
      });
      console.log('Sign-up successful:', response.data);
      // Redirect to the sign-in page after successful sign-up
      navigate('/');
    } catch (error) {
      console.error('Sign-up failed:', error.response?.data || error.message || 'Unknown error');
      // Handle sign-up failure
    }
  };

  return (
    <div className="login-form">
      <h2>Sign Up</h2>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
        <p>
          You already have an account? <Link to="/">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
