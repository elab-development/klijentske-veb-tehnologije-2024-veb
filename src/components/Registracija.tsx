import React from 'react';
import './Registracija.css';
import emailIcon from '../assets/email.svg';
import nameIcon from '../assets/user.svg'; 
import passwordIcon from '../assets/password.svg'; 

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
            <img src={emailIcon} alt="email" />
          </div>
          <div className="form-group">
            <label htmlFor="email">korisnicko ime</label>
            <input type="email" id="email" name="email" />
            <img src={nameIcon} alt="user" />
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