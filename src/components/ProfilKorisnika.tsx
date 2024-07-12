import './ProfilKorisnika.css';
// import saveIcon from '../assets/save-icon.svg';
// import cancelIcon from '../assets/cancel-icon.svg'; 

const ProfilKorisnika: React.FC = () => {
  return (
    <div className="background">
      <div className="form-container">
        <h1>PROFIL KORISNIKA</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Ime i prezime:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Lozinka:</label>
            <input type="password" id="password" name="password"placeholder="***********" />
          </div>
          <div className="form-buttons">
            <div className="left-buttons">
              <button type="button" className="leftButtons">
                Moje rezervacije
              </button>
              <button type="submit" className="leftButtons">
                Istorija pozajmica
              </button>
            </div>
          </div>
          <div className="right-button">
              <button type="button" className="izlogujse">Izloguj se</button>
            </div>  
        </form>
      </div>
    </div>
  );
};

export default ProfilKorisnika;
