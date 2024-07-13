import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Kontakt from './components/Kontakt';
import Registracija from './components/Registracija';
import Prijava from './components/Prijava';
import OnamaSaNavigacijom from './components/OnamaSaNavigacijom';
import KnjigeStranica from './components/KnjigeStranica';
import NovoStranica from './components/NovoStranica';
import NajpopularnijeStranica from './components/NajpopularnijeStranica';
import { AuthProvider, useAuth } from './models/AuthContext';
import ProfilKorisnika from './components/ProfilKorisnika';
import MojeRezervacije from './components/MojeRezervacije';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Prijava />;
};

function App() {
  return (
    <AuthProvider>
    <Router>
      <div>
        <Routes>
          <Route path="/kontakt" element={<Kontakt />}/>
          <Route path="/registracija" element={<Registracija />}/>
          <Route path="/" element={<OnamaSaNavigacijom />} />
          <Route path="/prijava" element={<Prijava  />}/>
          <Route path= "/knjige" element ={<KnjigeStranica/>}/>
          <Route path="/novo" element={<NovoStranica />} />
          <Route path="/account" element={<ProfilKorisnika />} />
          <Route path="/najpopularnije" element={<NajpopularnijeStranica />} />
          <Route path="/mojerezervacije" element={<MojeRezervacije />} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;