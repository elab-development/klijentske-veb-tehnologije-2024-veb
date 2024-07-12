import Navig from './components/Navig';
// import Onama from './components/Onama';
import CardData from './components/CardData';
import LeftSideBar from './components/LeftSideBar';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Navig />
      <LeftSideBar></LeftSideBar>
      <CardData
        imageSrc="assets/slika.png"
        title="John Doe"
        description="Lorem ipsum dolor sit amet"
      />
      {/* <Onama /> */}
    </div>
  );
}

export default App;
