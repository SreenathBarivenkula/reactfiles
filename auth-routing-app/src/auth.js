// auth.js
import axios from 'axios';

const users = [
    { username: 'Sreenathnick', password: 'nicki223ap' },
    { username: 'user2', password: 'password2' },
    // Add more users as needed
  ];
  

const authenticate = async (username, password) => {
  // Implement your authentication logic here (e.g., make an API request)
  try {
    const response = await axios.post('/api/authenticate', { username, password });
    return response.data.token; // Assuming the server returns a token upon successful authentication
  } catch (error) {
    throw error;
  }
};

const isAuthenticated = () => {
  // Check if the user is authenticated (e.g., by checking the token in local storage)
  const token = localStorage.getItem('token');
  return !!token; // Return true if the token exists; otherwise, return false
};

export { authenticate, isAuthenticated };
