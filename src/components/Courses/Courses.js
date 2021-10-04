import './Courses.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Course from '../Course/Course';
import { useContext } from 'react';
import { SearchContext } from '../../App';

const Courses = () => {
  const { searched } = useContext(SearchContext);
  const [courses, setCourses] = useState([]);
  const [searchedCourse, setSearchedCourse] = useState([]);
  useEffect(() => {
    fetch('./subjects.JSON')
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setSearchedCourse(data);
      });
  }, []);
  useEffect(() => {
    const newCourses = courses.filter(course => course.name.toLowerCase().includes(searched));
    setSearchedCourse(newCourses);
  }, [searched]);

    return (
      <Container>
        <h2 className="mt-4 mb-2 fw-bold">
          <span className="color-dark">Academy</span>{" "}
          <span className="color-orrange">Courses</span>
        </h2>
        <div className="break-line mx-auto mb-3"></div>
        {courses.length ? (
          searchedCourse.length ?
            <Row xs={1} md={2} lg={2} className="g-4 mb-5">
            {searchedCourse.map((course) => (
              <Course key={course.id} course={course}></Course>
            ))}
            </Row>
            :
            <h2 className="my-5">No Course Found</h2>
        ) : (
          <Spinner className="my-5" animation="border" variant="secondary" />
        )}
      </Container>
    );
};

export default Courses;