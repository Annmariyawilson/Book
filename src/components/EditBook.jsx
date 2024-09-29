import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBook } from '../redux/bookSlice';
import { Button, Modal, Form } from 'react-bootstrap';

const EditBook = ({ book, onUpdateBook }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [updatedBook, setUpdatedBook] = useState({ ...book });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setUpdatedBook({ ...updatedBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook({ id: book.id, updatedBook }));
    onUpdateBook(updatedBook); 
    handleClose();
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="mt-2 me-2">
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Book Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={updatedBook.image}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={updatedBook.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={updatedBook.author}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="dark" type="submit" className="mt-2">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditBook;
