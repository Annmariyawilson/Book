import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice';
import { v4 as uuidv4 } from 'uuid';
import { Form, Button } from 'react-bootstrap';

const AddBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    id: '',
    image: '',
    name: '',
    author: '',
    description: '',
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...book, id: uuidv4() }));
    setBook({ id: '', image: '', name: '', author: '', description: '' });
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group>
        <Form.Label>Book Image URL</Form.Label>
        <Form.Control
          type="text"
          name="image"
          value={book.image}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Book Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={book.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={book.description}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="dark" type="submit" className="mt-2">
        Add Book
      </Button>
    </Form>
  );
};

export default AddBook;
