import React from 'react';
import { Card, Col, Button, Row } from 'react-bootstrap';
import './Course.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";

const Course = (props) => {
    const { balance, picture, name, email, phone } = props.course;
    const chart = <FontAwesomeIcon icon={faChartBar} />;
    return (
      <Col>
        <Card style={{ overflow: "hidden" }}>
          <Row className="course-card">
            <Col md={5}>
              <Card.Img
                height="150"
                className="course-img"
                variant="top"
                src={picture}
              />
            </Col>
            <Col md={7}>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Course Fee : {balance}</Card.Text>
                <Card.Text>
                  <p>Contact Faculty</p>
                  Email : {email}
                </Card.Text>
                <Card.Text>
                  Phone : {phone}
                </Card.Text>
                <Button variant="info" className="fw-bold text-white">
                  {chart} Enroll Now
                </Button>{" "}
                <Button
                  variant="light"
                  className="fw-bold border border-2 border-warning text-dark"
                  disabled
                >
                  40 Seats
                </Button>{" "}
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    );
};

export default Course;