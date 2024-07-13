import React from 'react';
import { useAuth } from '../models/AuthContext';
import CardData from './CardData';

const MojeRezervacije: React.FC = () => {
  const { books } = useAuth();

  return (
    <div className="backgroundMojeRezervacije">
      <div className="form-containerMojeRezervacije">
        <h1>MOJE REZERVACIJE</h1>
        <div className="book-listMojeRezervacije">
          {books.length > 0 ? (
            books.map((book, index) => (
              <CardData
                key={index}
                imageSrc={book.imageSrc}
                title={book.title}
                author={book.author}
                likes={book.likes}
                year={book.year}
              />
            ))
          ) : (
            <p>Nemate rezervisanih knjiga.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MojeRezervacije;