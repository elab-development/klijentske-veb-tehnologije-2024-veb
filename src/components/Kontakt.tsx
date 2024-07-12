import React, { useState } from 'react';
import './Kontakt.css';
import gmailIcon from '../assets/gmail.svg'; 
import contactIcon from '../assets/contacts.svg'; 

const Kontakt: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };
  return (
    <div className="background">
      <div className="form-container">
        <h1>KONTAKT</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder='Ime i prezime'/>
          </div>
          <div className="form-group">
            <textarea id="message" name="message" cols={40} rows={5}  placeholder='Vasa poruka/pitanje'></textarea>
          </div>
          <input type="submit" value="Sumbit" />
        </form>
        {submitted && <p className="submit-message">Form submitted successfully!</p>}
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