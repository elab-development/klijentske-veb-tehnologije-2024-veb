import React, { useState } from 'react';
import './CardData.css'; 
import Book from '../models/Book'; 
import { useAuth } from '../models/AuthContext';

const CardData: React.FC<Book> = ({ imageSrc, title, author, likes }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const { addBook } = useAuth();

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  const handlePozajmiClick = () => {
    const newBook: Book = {
      imageSrc, title, author, likes: likeCount,
      year: 2024
    };
    addBook(newBook);
  };

  return (
    <div className="card">
      <img className="card-image" src={imageSrc} alt="Book Cover" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{likeCount}</p>
        <button onClick={handleLikeClick}>Like</button>
        <button className='pozajmi' onClick={handlePozajmiClick}>Pozajmi</button>
      </div>
    </div>
  );
};

export default CardData;