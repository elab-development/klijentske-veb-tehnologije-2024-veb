import './KnjigeStranica.css';
import Knjige from "./Knjige";
import LeftSideBar from "./LeftSideBar";
import Navig from "./Navig";

const KnjigeStranica = () => {
  return (
    <div>
      <Knjige/>
      <LeftSideBar/>
      <Navig/>
    </div>
  );
};

export default KnjigeStranica;