import React, { useState, useEffect } from 'react';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from './redux/bookSlice';
import NavBar from './components/Navbar';

const App = () => {
  const books = useSelector((state) => state.books.books);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  const handleSearch = (searchTerm) => {
    const result = books.filter((book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(result);
  };

  const handleUpdateBook = (updatedBook) => {
    const updatedBookList = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setFilteredBooks(updatedBookList);
  };

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <Container>
        <h1 className="my-4">Wordsmith's Den</h1>
        <AddBook />
        <BookList
          books={filteredBooks}
          onUpdateBook={handleUpdateBook}
          onDeleteBook={handleDeleteBook}
        />
      </Container>
    </>
  );
};

export default App;
