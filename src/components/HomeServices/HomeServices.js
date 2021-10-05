import './HomeServices.css';
import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from "../Service/Service";
import useServices from '../../hooks/useServices';

const HomeServices = () => {
    const [services] = useServices();
      return (
        <Container>
          <h1 className="mb-1 mt-5 fw-bold">
            <span className="color-dark">Our</span>{" "}
            <span className="color-orrange">Services</span>
          </h1>
          <div className="break-line mx-auto mb-3"></div>
          <Row xs={1} md={3} lg={4} className="g-4 mb-5">
            {services.length ? (
              services
                .slice(0, 4)
                .map((service) => (
                  <Service key={service.id} service={service}></Service>
                ))
            ) : (
              <Spinner
                className="my-5"
                animation="border"
                variant="secondary"
              />
            )}
          </Row>
        </Container>
      );
};

export default HomeServices;