import './Knjige.css'; 
import CardData from './CardData';
import Book from '../models/Book';

import dina from '../assets/dina.jpg';
import ratSvetova from '../assets/rat_svetova.jpg';
import decaSecanja from '../assets/deca_sećanja.jpg';
import padNemani from '../assets/pad_nemani.jpg';
import sahalin from '../assets/sahalin.jpg';
import usponPersepolisa from '../assets/uspon_persepolisa.jpg';
import vorskaIgra from '../assets/vorska_igra.jpg';
import kalibanovRat from '../assets/kalibanov_rat.jpg';

const books: Book[] = [
  { imageSrc: dina, title: 'Dina', author: 'Frank Herbert' },
  { imageSrc: ratSvetova, title: 'Rat svetova', author: 'Herbert Dž. Vels' },
  { imageSrc: decaSecanja, title: 'Deca sećanja', author: 'Mijanj Liuđisi' },
  { imageSrc: padNemani, title: 'Pad nemani', author: 'Džejms S. A. Kori' },
  { imageSrc: sahalin, title: 'Sahalin', author: 'Edvard Verkin' },
  { imageSrc: usponPersepolisa, title: 'Uspon Persepolisa', author: 'Džejms S. A. Kori' },
  { imageSrc: vorskaIgra, title: 'Vorska igra', author: 'Anara Beketa' },
  { imageSrc: kalibanovRat, title: 'Kalibanov rat', author: 'Džejms S. A. Kori' },
];


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