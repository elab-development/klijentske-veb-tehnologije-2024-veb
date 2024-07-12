import './App.css'; 
// import Kontakt from './components/Kontakt';
import Prijava from './components/Prijava';
import Navig from './components/Navig';
// import Onama from './components/Onama';
// import CardData from './components/CardData';
// import LeftSideBar from './components/LeftSideBar';
// import ProfilKorisnika from './components/ProfilKorisnika';
// import Registracija from './components/Registracija';

function App() {
  return (
    <div className="App">
      {/* <Kontakt/> */}
      {/* Pa kako sve bas na absolute sunce mu krvavo jebem? */}
      <Navig/> 
      <Prijava/>

      {/* <ProfilKorisnika/> */}
      {/* <Navig /> */}

      {/* <Registracija/> */}
      {/* <LeftSideBar></LeftSideBar>
      <CardData
        imageSrc="assets/slika.png"
        title="John Doe"
        description="Lorem ipsum dolor sit amet"
      /> */}
      {/* <Onama /> */}
    </div>
  );
}

export default App;
