import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import './NotFound.css';
import notFound from '../../images/notfound.jpg';

const NotFound = () => {
    const handleBack = () => {
        window.history.go(-1);
    }
    return (
      <Container className="my-5">
        <Image src={notFound}></Image>
        <br />
        <Button onClick={handleBack} variant="primary" className="my-2">Go Back</Button>{" "}
      </Container>
    );
};

export default NotFound;