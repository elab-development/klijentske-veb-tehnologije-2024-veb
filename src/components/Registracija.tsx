// src/components/Registracija.tsx

import React from 'react';
import './Registracija.css';
import nameIcon from '../assets/email.svg'; // Replace with your actual SVG file path
import emailIcon from '../assets/user.svg'; // Replace with your actual SVG file path
import passwordIcon from '../assets/password.svg'; // Replace with your actual SVG file path

const Registracija: React.FC = () => {
  return (
    <div className="background">
      <div className="form-container">
        <h1>KREIRAJ NALOG</h1>
        <hr />
        <form>
          <div className="form-group">
            <label htmlFor="name">email</label>
            <input type="text" id="name" name="name" />
            <img src={nameIcon} alt="email" />
          </div>
          <div className="form-group">
            <label htmlFor="email">korisnicko ime</label>
            <input type="email" id="email" name="email" />
            <img src={emailIcon} alt="user" />
          </div>
          <div className="form-group">
            <label htmlFor="password">lozinka</label>
            <input type="password" id="password" name="password" />
            <img src={passwordIcon} alt="password" />
          </div>
          <button type="submit">Registruj se</button>
        </form>
      </div>
    </div>
  );
};

export default Registracija;