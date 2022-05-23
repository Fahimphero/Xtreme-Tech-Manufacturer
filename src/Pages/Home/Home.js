import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../Images/banner 1.png'
import Banner2 from '../../Images/banner 2.jpg'
import Banner3 from '../../Images/banner 3.png'
import Part from '../Part/Part';

import './Home.css'

const Home = () => {
    return (
        <div className='bg-dark'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={Banner3}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={Banner1}
                        alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={Banner2}
                        alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>


            <Part></Part>

        </div>


    );
};

export default Home;