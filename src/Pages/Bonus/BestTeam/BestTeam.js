import React from 'react';
import image1 from '../../../Images/About Us/1.jpg'
import image2 from '../../../Images/About Us/2.jpg'
import image3 from '../../../Images/About Us/3.jpg'

const BestTeam = () => {
    return (
        <div className='container py-5'>
            <h2 className='text-center fw-bold text-light text-uppercase py-3 '>Why <span style={{ color: 'royalblue' }}>Choose us</span></h2>
            {/* <h2 className='fw-bold text-light pt-3'>Get In Touch</h2> */}
            <div className='row'>
                <div className='col col-lg-6'>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <h4 className='fw-bold'> WE ARE THE BEST TEAM</h4>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Our Products deliver leadership performance, battery life, and much much more. Our products optimize specifically to deliver leadership performance per watt for computers. Our products deliver an average of 1.3x faster performance compared to the other products on the market.

                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <h4 className='fw-bold text-uppercase'> Always Forward</h4>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    We look forward to advancing the High-Performance Computing Experience. Our vision is to advance the pc experience through next-generation desktop, and laptop innovations.


                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <h4 className='fw-bold text-uppercase'>THE BEST COMPANY</h4>

                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Our last launched CPU was the world's fastest gaming CPU. You can only buy the best desktop processor for gaming pc from here. We work hard every day to build unique technologies to make our customer's life easier.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col col-lg-6'>
                    <div id="carouselExampleControls" className="carousel slide bg-secondary " data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={image1} className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src={image2} className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src={image3} className="d-block w-100" alt="..."></img>
                            </div>
                        </div>
                        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestTeam;