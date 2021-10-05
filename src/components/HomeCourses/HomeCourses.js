import './HomeCourses.css';
import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Course from '../Course/Course';
import useCourses from '../../hooks/useCourses';

const HomeCourses = () => {
    const [courses] = useCourses();

  return (
    <Container>
      <h2 className="mt-4 mb-2 fw-bold">
        <span className="color-dark">Academy</span>{" "}
        <span className="color-orrange">Courses</span>
      </h2>
      <div className="break-line mx-auto mb-3"></div>
      <Row xs={1} md={2} lg={2} className="g-4 mb-5">
        {courses.length ? (
          courses
            .slice(0, 4)
            .map((course) => <Course key={course.id} course={course}></Course>)
        ) : (
          <Spinner className="my-5" animation="border" variant="secondary" />
        )}
      </Row>
    </Container>
  );
};

export default HomeCourses;