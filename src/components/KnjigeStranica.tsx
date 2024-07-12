import Knjige from "./Knjige";
import LeftSideBar from "./LeftSideBar";
import Navig from "./Navig";

const KnjigeStranica = () => {
  return (
    <div>
      <LeftSideBar/>
      <Navig/>
      <Knjige/>
    </div>
  );
};

export default KnjigeStranica;