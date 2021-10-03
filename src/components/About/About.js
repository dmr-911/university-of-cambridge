import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AboutItem from '../AboutItem/AboutItem';
import './About.css';

const About = () => {
    const [about, setAbout] = useState([]);
    useEffect(() => {
        fetch('./about.JSON')
            .then(res => res.json())
            .then(data => setAbout(data));
    }, [])
    
    return (
        <Container>
            <h2 className="my-3 fw-bold"><span className="color-dark">About</span> <span className="color-orrange">University</span></h2>
            <Row xs={1} md={2} lg={3} className="g-0 mb-5">
                {
                    about.map(item => <AboutItem key={item.id} item={item}></AboutItem>)
                }
            </Row>
        </Container>
    );
};

export default About;