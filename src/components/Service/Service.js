import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { picture, name } = props.service;
    return (
      <Col>
        <Card>
          <div className="service-card rounded">
            <Card.Img
              className="service-img"
              height="200px"
              variant="top"
              src={picture}
            />
            <h5 className="service-title fw-bold text-white">{name}</h5>
          </div>
        </Card>
      </Col>
    );
};

export default Service;