import './Courses.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./subjects.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
      <Container>
        <h2 className="mt-4 mb-2 fw-bold">
          <span className="color-dark">Academy</span>{" "}
          <span className="color-orrange">Courses</span>
        </h2>
        <div className="break-line mx-auto mb-3"></div>
        {courses.length ? (
          <Row xs={1} md={2} lg={2} className="g-4 mb-5">
            {courses.map((course) => (
              <Course key={course.id} course={course}></Course>
            ))}
          </Row>
        ) : (
          <Spinner className="my-5" animation="border" variant="secondary" />
        )}
      </Container>
    );
};

export default Courses;