import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

const CarouselContainer = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
      return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className="fw-bold">
                <span className="color-dark">Welcome To</span>{" "}
                <span>University</span>
              </h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1 className="fw-bold">
                <span className="">Admission Open </span> <span>2022</span>
              </h1>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1 className="fw-bold">
                <span className="color-dark">Education </span>{" "}
                <span className="color-orrange">Master</span>
              </h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
};

export default CarouselContainer;