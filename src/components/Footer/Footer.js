import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
      <Container fluid style={{ backgroundColor: "#002147", height: "60px" }} className="d-flex justify-content-center align-items-center">
        <small className="text-white">©Copyrights - All Rights Reserved by @DMR</small>
      </Container>
    );
};

export default Footer;