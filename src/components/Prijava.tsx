import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Prijava.css';
import nameIcon from '../assets/user.svg';
import passwordIcon from '../assets/password.svg';
import { useAuth } from '../models/AuthContext';

const Prijava: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      const user = users.find((user: any) => user.username === username && user.password === password);
      if (user) {
        login(username);
        navigate('/account');
      } else {
        setError('Invalid username or password');
      }
    } else {
      setError('No registered users found');
    }
  };

  return (
    <div className="backgroundPrijava">
      <div className="form-container">
        <h1>PRIJAVI SE</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <img src={nameIcon} alt="user" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img src={passwordIcon} alt="password" />
          </div>
          <div className="form-actions">
            <a href="#">Zaboravljena lozinka?</a>
            <a href="#">Kreiraj nalog</a>
          </div>
          <button type="submit" className="prijavise">PRIJAVI SE</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Prijava;