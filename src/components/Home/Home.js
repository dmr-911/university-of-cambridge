import React from 'react';
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
      </div>
    );
};

export default Home;