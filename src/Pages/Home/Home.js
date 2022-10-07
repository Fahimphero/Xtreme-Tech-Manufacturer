import React from 'react';
import { Carousel, Nav } from 'react-bootstrap';
import Banner1 from '../../Images/banner 1.webp'
import Banner2 from '../../Images/banner 2.webp'
import Banner3 from '../../Images/banner 3.webp'
import Reviews from '../Bonus/Reviews/Reviews';
import Summary from '../Bonus/Summary/Summary';
import Form from '../Bonus/Form/Form';
import Part from '../Part/Part';

import './Home.css'
import BestTeam from '../Bonus/BestTeam/BestTeam';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className='bg-dark'>
            <Carousel fade>
                <Carousel.Item className='background-1'>
                    {/* <img
                        className="d-block w-100 banner-img"
                        src={Banner3}
                        alt="First slide"
                    /> */}
                    <Carousel.Caption style={{ position: 'absolute', top: '50%', transform: 'translateY(-60%)' }}>

                        <h1 className='text-left fw-bold' style={{ fontFamily: 'Poppins sans-serif', fontSize: '4.5vw', wordSpacing: '5px' }} >Together We Shape The Future of Technology</h1>
                        <Nav.Link href='#products'>
                            <button style={{ fontFamily: 'Poppins sans-serif' }} className='btn px-4 button text-light py-2'>SEE  PRODUCTS</button>
                        </Nav.Link>


                    </Carousel.Caption>

                </Carousel.Item>


                <Carousel.Item className='background-2'>


                    <Carousel.Caption style={{ position: 'absolute', top: '50%', transform: 'translateY(-60%)' }}>

                        <h1 className='text-left fw-bold' style={{ fontFamily: 'Poppins sans-serif', fontSize: '4.5vw', wordSpacing: '5px' }} >Together We Shape The Future of Technology</h1>
                        <Nav.Link href='#products'>
                            <button style={{ fontFamily: 'Poppins sans-serif' }} className='btn px-4 button text-light py-2'>SEE PRODUCTS</button>
                        </Nav.Link>


                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='background-3'>


                    <Carousel.Caption style={{ position: 'absolute', top: '50%', transform: 'translateY(-60%)' }}>

                        <h1 className='text-left fw-bold' style={{ fontFamily: 'Poppins sans-serif', fontSize: '4.5vw', wordSpacing: '5px' }} >Together We Shape The Future of Technology</h1>
                        <Nav.Link href='#products'>
                            <button style={{ fontFamily: 'Poppins sans-serif' }} className='btn px-4 button text-light py-2'>SEE PRODUCTS</button>
                        </Nav.Link>


                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <Part></Part>
            <Summary></Summary>
            <Reviews></Reviews>
            <Form></Form>
            <BestTeam></BestTeam>
        </div>


    );
};

export default Home;



