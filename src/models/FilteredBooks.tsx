import { Component } from 'react';
import Book from './Book'; // Adjust path as per your project structure
import CardData from '../components/CardData'; // Adjust path as per your project structure

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
