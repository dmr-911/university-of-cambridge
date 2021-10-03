import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <Container>
            <h1 className="mb-3 mt-5 fw-bold"><span className="color-dark">Our</span> <span className="color-orrange">Services</span></h1>
        <Row xs={1} md={3} lg={4} className="g-4 mb-5">
          {
              services.map(service => <Service key={service.id} service={service}></Service>)
          }
        </Row>
      </Container>
    );
};

export default Services;