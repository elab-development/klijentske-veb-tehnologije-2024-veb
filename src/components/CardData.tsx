import './CardData.css'; 
import Book from '../models/Book'; 

const CardData: React.FC<Book> = ({ imageSrc, title, author }) => {
  return (
    <div className="card">
      <img className="card-image" src={imageSrc} alt="Book Cover" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default CardData;
