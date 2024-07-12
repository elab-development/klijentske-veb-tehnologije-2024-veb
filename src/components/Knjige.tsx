import './Knjige.css'; 
import books from './Books';
import { useState } from 'react';
import Book from '../models/Book';
import LeftSideBar from './LeftSideBar';
import FilteredBooks from '../models/FilteredBooks';

// const books: Book[] = [
//   { imageSrc: dina, title: 'Dina', author: 'Frank Herbert', year: 1965 },
//   { imageSrc: ratSvetova, title: 'Rat svetova', author: 'Herbert Dž. Vels', year: 1898 },
//   { imageSrc: decaSecanja, title: 'Deca sećanja', author: 'Mijanj Liuđisi', year: 2010 },
//   { imageSrc: padNemani , title: 'Pad nemani', author: 'Džejms S. A. Kori', year: 2011 },
//   { imageSrc: sahalin, title: 'Sahalin', author: 'Edvard Verkin', year: 2013 },
//   { imageSrc: usponPersepolisa, title: 'Uspon Persepolisa', author: 'Džejms S. A. Kori', year: 2012 },
//   { imageSrc: vorskaIgra, title: 'Vorska igra', author: 'Anara Beketa', year: 2018 },
//   { imageSrc: kalibanovRat, title: 'Kalibanov rat', author: 'Džejms S. A. Kori', year: 2012 },
// ];

const Knjige: React.FC = () => {
  // const [searchTerm, setSearchTerm] = useState<string>('');

  // const filteredBooks = books.filter(book =>
  //   book.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);

  const handleSearch = (searchTerm: string) => {
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  };
  return (
    <div>
      <LeftSideBar onSearch={handleSearch} />
      <div className="main-content">
    <FilteredBooks filteredBooks={filteredBooks} />
  </div>
    </div>

    // <div className="main-content">
    //   <div className="card-grid">
    //     {filteredBooks.map((book, index) => (
    //       <CardData key={index} {...book} />
    //     ))}
    //   </div>

    // </div>
  );
};

export default Knjige;

