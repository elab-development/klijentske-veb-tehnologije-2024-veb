import dina from '../assets/dina.jpg';
import ratSvetova from '../assets/rat_svetova.jpg';
import decaSecanja from '../assets/deca_sećanja.jpg';
import padNemani from '../assets/pad_nemani.jpg';
import sahalin from '../assets/sahalin.jpg';
import usponPersepolisa from '../assets/uspon_persepolisa.jpg';
import vorskaIgra from '../assets/vorska_igra.jpg';
import kalibanovRat from '../assets/kalibanov_rat.jpg';
import Book from '../models/Book';

const books: Book[] = [
    { imageSrc: dina, title: 'Dina', author: 'Frank Herbert', year: 1965, likes: 1500 },
    { imageSrc: ratSvetova, title: 'Rat svetova', author: 'Herbert Dž. Vels', year: 1898, likes: 1300 },
    { imageSrc: decaSecanja, title: 'Deca sećanja', author: 'Mijanj Liuđisi', year: 2010, likes: 1200 },
    { imageSrc: padNemani, title: 'Pad nemani', author: 'Džejms S. A. Kori', year: 2011, likes: 1100 },
    { imageSrc: sahalin, title: 'Sahalin', author: 'Edvard Verkin', year: 2013, likes: 900 },
    { imageSrc: usponPersepolisa, title: 'Uspon Persepolisa', author: 'Džejms S. A. Kori', year: 2012, likes: 1150 },
    { imageSrc: vorskaIgra, title: 'Vorska igra', author: 'Anara Beketa', year: 2018, likes: 750 },
    { imageSrc: kalibanovRat, title: 'Kalibanov rat', author: 'Džejms S. A. Kori', year: 2012, likes: 980 },
  ];

export default books;