import './CardData.css'; 
import Book from '../models/Book'; 

const CardData: React.FC<Book> = ({ imageSrc, title, description }) => {
  return (
    <div className="card">
      <img className="card-image" src={imageSrc} alt="Book Cover" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardData;
