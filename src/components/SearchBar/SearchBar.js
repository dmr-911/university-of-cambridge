import React from 'react';
import { useContext } from 'react';
import { Col, Container, Form, FormControl } from 'react-bootstrap';
import { SearchContext } from '../../App';
import './SearchBar.css';

const SearchBar = () => {
  // Calling context api
  const { handleOnSearch } = useContext(SearchContext);
  
  const handleOnChange = event => {
    handleOnSearch(event.target.value);
  }
    return (
        <Container fluid className="search-container py-3">
            <Col md={6} className="mx-auto">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={handleOnChange}
          />
        </Form>
        </Col>
      </Container>
    );
};

export default SearchBar;