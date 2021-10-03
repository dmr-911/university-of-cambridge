import React from 'react';
import About from '../About/About';
import CarouselContainer from '../Carousel/CarouselContainer';
import Courses from '../Courses/Courses';
import SearchBar from '../SearchBar/SearchBar';
import Services from '../Services/Services';

const Home = () => {
    return (
      <div>
        <SearchBar></SearchBar>
        <CarouselContainer></CarouselContainer>
        <Services></Services>
        <Courses></Courses>
        <About></About>
      </div>
    );
};

export default Home;