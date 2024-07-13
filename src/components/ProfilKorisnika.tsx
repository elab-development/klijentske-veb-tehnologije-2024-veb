import { useAuth } from '../models/AuthContext';
import { useNavigate } from 'react-router-dom';
import './ProfilKorisnika.css';
// import saveIcon from '../assets/save-icon.svg';
// import cancelIcon from '../assets/cancel-icon.svg'; 

const ProfilKorisnika: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const logoutF = () => {
    logout
    navigate('/');
  };
  const MojeRezervacije = () => {
    navigate('/mojeRezervacije');
  };
  return (
    <div className="backgroundProfil">
      <div className="form-containerProfil">
        <h1>PROFIL KORISNIKA</h1>
        <form>
          <div className="form-groupProfil">
            <label htmlFor="name">Ime i prezime:</label>
            <p>{user}</p>
          </div>
          <div className="form-groupProfil">
            <label htmlFor="password">Lozinka:</label>
            <input type="password" id="password" name="password"placeholder="***********" />
          </div>
          <div className="form-buttonsProfil">
            <div className="left-buttonProfil">
              <button className="leftButtonsProfil" onClick={MojeRezervacije}>
                Moje rezervacije
              </button>
              <button className="leftButtonsProfil" onClick={logoutF}>Logout</button>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
};

export default ProfilKorisnika;