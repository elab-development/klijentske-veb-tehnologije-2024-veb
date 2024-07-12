import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Kontakt from './components/Kontakt';
import Registracija from './components/Registracija';
import Prijava from './components/Prijava';
import OnamaSaNavigacijom from './components/OnamaSaNavigacijom';
import KnjigeStranica from './components/KnjigeStranica';
import NovoStranica from './components/NovoStranica';
import NajpopularnijeStranica from './components/NajpopularnijeStranica';

function App() {
//  da se doda klasa za Usera i da se iskombinuje tu nesto sa ovim kad je ulogovan i kad nije
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<OnamaSaNavigacijom />} />
          <Route path="/kontakt" element={<Kontakt />}/>
          <Route path="/registracija" element={<Registracija />}/>
          <Route path="/prijava" element={<Prijava  />}/>
          <Route path= "/knjige" element ={<KnjigeStranica/>}/>
          <Route path="/novo" element={<NovoStranica />} />
          <Route path="/najpopularnije" element={<NajpopularnijeStranica />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;