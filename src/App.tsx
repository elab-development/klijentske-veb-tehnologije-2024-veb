import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Kontakt from './components/Kontakt';
import Onama from './components/Onama';
import Navig from './components/Navig';
import Registracija from './components/Registracija';
import Prijava from './components/Prijava';
import ProfilKorisnika from './components/ProfilKorisnika';
import OnamaSaNavigacijom from './components/OnamaSaNavigacijom';

function App() {
//  da se doda klasa za Usera i da se iskombinuje tu nesto sa ovim kad je ulogovan i kad nije
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navig />} />
          <Route path="/kontakt" element={<Kontakt />}/>
          <Route path="/registracija" element={<Registracija />}/>
          <Route path="/prijava" element={<Prijava  />}/>
          <Route path= "/onama" element ={<OnamaSaNavigacijom/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;