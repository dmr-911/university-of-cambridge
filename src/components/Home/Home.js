import React from 'react';
import About from '../About/About';
import CarouselContainer from '../Carousel/CarouselContainer';
import Courses from '../Courses/Courses';
import Services from '../Services/Services';

const Home = () => {
    return (
      <div>
        <CarouselContainer></CarouselContainer>
        <Services></Services>
        <Courses></Courses>
        <About></About>
      </div>
    );
};

export default Home;