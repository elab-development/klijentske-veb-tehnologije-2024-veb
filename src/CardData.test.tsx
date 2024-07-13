import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import CardData from './components/CardData'; 
import { AuthProvider } from './models/AuthContext';

describe('CardData component', () => {
  it('Ikrementuje lajkove na klik (mock)', () => {
    const mockBook = {
      imageSrc: 'test.jpg',
      title: 'Test Book',
      author: 'Test Author',
      likes: 0,
      year: 1389
    };

    const { getByText } = render(
        <AuthProvider>
            <CardData {...mockBook} />
        </AuthProvider>
    );

    const likeButton = getByText('Like');

    fireEvent.click(likeButton);

    expect(getByText('1')).toBeInTheDocument(); 
  });
});