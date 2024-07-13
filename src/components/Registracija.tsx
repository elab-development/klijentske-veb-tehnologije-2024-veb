import React, { useState, useEffect } from 'react';
import './Registracija.css';
import emailIcon from '../assets/email.svg';
import nameIcon from '../assets/user.svg';
import passwordIcon from '../assets/password.svg';
import { User } from '../models/User';

const Registracija: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = new User(username, password, []);
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    localStorage.setItem('users', JSON.stringify(updatedUsers));

    console.log('Registered Users:', updatedUsers);

    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="background">
      <div className="form-container">
        <h1>KREIRAJ NALOG</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <img src={emailIcon} alt="email" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Korisničko ime</label>
            <input
              type="text"
              id="name"
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <img src={nameIcon} alt="user" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Lozinka</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img src={passwordIcon} alt="password" />
          </div>
          <button type="submit">Registruj se</button>
        </form>
      </div>
    </div>
  );
};

export default Registracija;