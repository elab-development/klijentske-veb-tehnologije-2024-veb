import './CardData.css'; 
import Book from '../models/Book'; 
import React, { useState } from 'react';

const CardData: React.FC<Book> = ({ imageSrc, title, author,likes }) => {
    const [likeCount, setLikeCount] = useState(likes);

    const handleLikeClick = () => {
      setLikeCount(likeCount + 1);
    };
  return (
    <div className="card">
      <img className="card-image" src={imageSrc} alt="Book Cover" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{likeCount}</p>
        <button onClick={handleLikeClick}>Like</button>
      </div>
    </div>
  );
};

export default CardData;
