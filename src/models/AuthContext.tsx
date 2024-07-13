// AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import Book from '../models/Book';

interface AuthContextType {
  user: string | null;
  books: Book[];
  login: (username: string) => void;
  logout: () => void;
  addBook: (book: Book) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem('user'));
  const [books, setBooks] = useState<Book[]>(() => {
    const storedUserBooks = localStorage.getItem('userBooks');
    return storedUserBooks ? JSON.parse(storedUserBooks) : [];
  });

  const login = (username: string) => {
    localStorage.setItem('user', username);
    setUser(username);
    const storedUserBooks = localStorage.getItem(`${username}_books`);
    setBooks(storedUserBooks ? JSON.parse(storedUserBooks) : []);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setBooks([]);
  };

  const addBook = (book: Book) => {
    const updatedBooks = [...books, book];
    setBooks(updatedBooks);
    if (user) {
      localStorage.setItem(`${user}_books`, JSON.stringify(updatedBooks));
    }
  };

  return (
    <AuthContext.Provider value={{ user, books, login, logout, addBook }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
