import CardData from "./CardData";
import books from './Books';
import LeftSideBar from "./LeftSideBar";
import Navig from "./Navig";
const NovoStranica = () => {
    const latestBook = books.reduce((latest, book) => (book.year > latest.year ? book : latest), books[0]);

    return (
        <div>
            <LeftSideBar onSearch={function (searchTerm: string): void {
                throw new Error("Function not implemented.");
            } }/>
            <Navig/>
            <div className="main-content">
                <div className="card-grid">
                    <CardData {...latestBook} />
                </div>
            </div>
        </div>

    );
};

export default NovoStranica;