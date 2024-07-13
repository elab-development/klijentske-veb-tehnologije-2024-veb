import { Component } from 'react';
import Book from './Book';
import CardData from '../components/CardData';

interface FilteredBooksProps {
  filteredBooks: Book[];
}

class FilteredBooks extends Component<FilteredBooksProps> {
  render() {
    const { filteredBooks } = this.props;

    return (
      <div className="card-grid">
        {filteredBooks.map((book, index) => (
          <CardData key={index} {...book} />
        ))}
      </div>
    );
  }
}

export default FilteredBooks;
