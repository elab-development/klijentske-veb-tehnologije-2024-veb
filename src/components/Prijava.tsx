import React from 'react';
import './Prijava.css';
import nameIcon from '../assets/user.svg'; 
import passwordIcon from '../assets/password.svg'; 

const Prijava: React.FC = () => {
  return (
    <div className="background">
      <div className="form-container">
        <h1>PRIJAVI SE</h1>
        <hr />
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
            <img src={nameIcon} alt="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <img src={passwordIcon} alt="password" />
          </div>
          <div className="form-actions">
            <a href="#">Zaboravljena lozinka?</a>
            <a href="#">Kreiraj nalog</a>
          </div>
            <button type="submit" className='prijavise'>PRIJAVI SE</button>
        </form>
      </div>
    </div>
  );
};

export default Prijava;