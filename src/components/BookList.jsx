import React, { useState } from 'react';
import { Button, Card, Row, Col, Modal } from 'react-bootstrap';
import EditBook from './EditBook';

const BookList = ({ books, onUpdateBook, onDeleteBook }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (book) => {
    setSelectedBook(book);
    setShow(true);
  };

  return (
    <>
      <Row>
        {books.map((book) => (
          <Col key={book.id} md={3} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={book.image}
                style={{ height: '250px', width: '100%', objectFit: 'contain' }}
              />
              <Card.Body>
                <Card.Title>{book.name}</Card.Title>
                <Card.Text>{book.author}</Card.Text>
                <Button variant="dark" onClick={() => handleShow(book)} className="mt-2 me-2">
                  View
                </Button>
                <EditBook book={book} onUpdateBook={onUpdateBook} />
                <Button
                  variant="dark"
                  className="mt-2"
                  onClick={() => onDeleteBook(book.id)} 
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedBook && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedBook.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedBook.image}
              alt={selectedBook.name}
              style={{ height: '250px', width: '100%', objectFit: 'contain' }}
            />
            <h4>{selectedBook.author}</h4>
            <p>{selectedBook.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default BookList;
