import './Courses.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
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
        <h2 className="my-4">This is Courses</h2>
        <Row xs={1} md={2} lg={2} className="g-4 mb-5">
          {
              courses.map(course => <Course key={course.id} course={course}></Course>)
          }
        </Row>
      </Container>
    );
};

export default Courses;