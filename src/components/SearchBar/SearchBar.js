import React from 'react';
import { Col, Container, Form, FormControl } from 'react-bootstrap';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <Container fluid className="search-container py-3">
            <Col md={6} className="mx-auto">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
        </Col>
      </Container>
    );
};

export default SearchBar;