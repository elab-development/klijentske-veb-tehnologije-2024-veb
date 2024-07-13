import Book from "./Book";

class User {
    username: string;
    password: string;
    books: Book[];
  
    constructor(username: string, password: string, books: Book[] = []) {
      this.username = username;
      this.password = password;
      this.books = books;
    }
  
    addBook(book: Book): void {
      this.books.push(book);
    }
  
    removeBook(title: string): void {
      this.books = this.books.filter(book => book.title !== title);
    }
  }
  
  export { User };