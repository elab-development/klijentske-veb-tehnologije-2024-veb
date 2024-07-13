import React, { useState } from 'react';
import './Knjige.css';
import books from './Books';
import Book from '../models/Book';
import LeftSideBar from './LeftSideBar';
import CardData from './CardData';

const Knjige: React.FC = () => {
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); 


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <LeftSideBar
        onSearch={(searchTerm: string) => {
          const filtered = books.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setFilteredBooks(filtered);
          setCurrentPage(1); 
        }}
      />
      <div className="main-content">
        <div className="card-grid">
          {currentBooks.map((book, index) => (
            <CardData key={index} {...book} />
          ))}
        </div>
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage > 1 ? currentPage - 1 : currentPage)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() => paginate(currentPage < Math.ceil(filteredBooks.length / itemsPerPage) ? currentPage + 1 : currentPage)}
            disabled={currentPage === Math.ceil(filteredBooks.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Knjige;