import React, { useState } from 'react';
import { Navbar, Form, FormControl, Button, Container } from 'react-bootstrap';

const NavBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <i className="fa-solid fa-book-open fa-lg" style={{ color: "#000000" }} /> Book Store
        </Navbar.Brand>
        <Form className="d-flex ml-auto" onSubmit={(e) => e.preventDefault()}>
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-4"
            aria-label="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="dark" onClick={handleSearch}>
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default NavBar;
