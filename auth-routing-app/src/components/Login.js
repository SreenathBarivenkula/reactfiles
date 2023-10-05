// Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authenticate } from '../auth';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await authenticate(formData.username, formData.password);

      // Assuming the authentication was successful and the server returned a token
      localStorage.setItem('token', token);
      history.push('/dashboard');
    } catch (error) {
      console.error('Authentication error:', error);
      // Handle authentication error, show error message, etc.
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
