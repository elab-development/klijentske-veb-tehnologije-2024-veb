import React from 'react';
import './Kontakt.css';
import gmailIcon from '../assets/gmail.svg'; 
import contactIcon from '../assets/contacts.svg'; 

const Kontakt: React.FC = () => {
  return (
    <div className="background">
      <div className="form-container">
        <form>
        <h1>KONTAKT</h1>
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder='Ime i prezime'/>
          </div>
          <div className="form-group">
            <textarea id="message" name="message" cols={60} rows={5}  placeholder='Vasa poruka/pitanje'></textarea>
          </div>
        </form>
        <div className="info">
          <div className="info-item">
            <img src={contactIcon} alt="Location Icon" />
            <p>061 234 567</p>
          </div>
          <div className="info-item">
            <img src={gmailIcon} alt="Email Icon" />
            <p>biblioteka@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;