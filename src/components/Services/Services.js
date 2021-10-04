import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { SearchContext } from '../../App';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const { searched } = useContext(SearchContext);
  const [services, setServices] = useState([]);
  const [searchedServices, setSearchedServices] = useState([]);
  useEffect(() => {
    fetch('./services.JSON')
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setSearchedServices(data);
      });
  }, []);

  useEffect(() => {
    const newServices = services.filter(service => service.name.toLowerCase().includes(searched.toLowerCase()));
    setSearchedServices(newServices);
  },[searched])

    return (
      <Container>
        <h1 className="mb-1 mt-5 fw-bold">
          <span className="color-dark">Our</span>{" "}
          <span className="color-orrange">Services</span>
        </h1>
        <div className="break-line mx-auto mb-3"></div>
        {services.length ? (
          searchedServices.length ?
            <Row xs={1} md={3} lg={4} className="g-4 mb-5">
            {searchedServices.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
            </Row>
            :
            <h2 className="my-5">No Results Found</h2>
        ) : (
          <Spinner className="my-5" animation="border" variant="secondary" />
        )}
      </Container>
    );
};

export default Services;