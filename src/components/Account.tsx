import React from 'react';
import { useAuth } from '../models/AuthContext';
import { useNavigate } from 'react-router-dom';

const Account: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const logoutF = () => {
    logout
    navigate('/');
  };
  return (
    <div>
      <h1>Welcome, {user}</h1>
      <button onClick={logoutF}>Logout</button>
    </div>
  );
};

export default Account;