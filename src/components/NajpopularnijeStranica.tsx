import CardData from "./CardData";
import books from './Books';
import LeftSideBar from "./LeftSideBar";
import Navig from "./Navig";
const NajpopularnijeStranica = () => {
    const topTwoBooks = books.sort((a, b) => b.likes - a.likes).slice(0, 2);

    return (
        <div>
        <LeftSideBar/>
        <Navig/>
        <div className="main-content">
          <div className="card-grid">
            {topTwoBooks.map((book, index) => (
              <CardData key={index} {...book} />
            ))}
          </div>
        </div>
        </div>
      );
};

export default NajpopularnijeStranica;