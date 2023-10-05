// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../DataContext';

const Dashboard = () => {
  const { sharedData } = useData();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard. You are authenticated.</p>
      <p>Shared Data: {sharedData}</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Dashboard;
