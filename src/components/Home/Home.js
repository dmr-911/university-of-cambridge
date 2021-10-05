import React from 'react';
import About from '../About/About';
import CarouselContainer from '../Carousel/CarouselContainer';
import HomeCourses from '../HomeCourses/HomeCourses';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    return (
      <div>
        <CarouselContainer></CarouselContainer>
        <HomeServices></HomeServices>
        <HomeCourses></HomeCourses>
        <About></About>
      </div>
    );
};

export default Home;