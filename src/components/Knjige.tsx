import './Knjige.css'; 
import CardData from './CardData';
import books from './Books';

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
  return (
    <div className="main-content">
      <div className="card-grid">
        {books.map((book, index) => (
          <CardData key={index} {...book} />
        ))}
      </div>
    </div>
  );
};

export default Knjige;