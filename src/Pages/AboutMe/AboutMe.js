import React from 'react';
import ProfilePic from '../../Images/Fahim-my-bg.png'


const AboutMe = () => {
    return (

        <div className='bg' style={{ backgroundColor: 'black', minWidth: '100%', minHeight: '100%', position: 'fixed', left: '0' }}>
            <div className='mt-5 '>
                <div className='d-flex align-items-center justify-content-center'>
                    <img className='w-25' src={ProfilePic} alt="" />
                    <div className='ms-5 text-light w-50'>
                        <h3 style={{ color: 'royalblue' }}>Irfanul Islam Fahim</h3>
                        <h5 > <span style={{ color: 'royalblue' }}>Email:</span> irfanulislamfahim@gmail.com</h5>
                        {/* <p>One day I will become a web developer like Jhankar Mahbub.
                            My aim in life is to be a web developer. Nobody can stop me now.
                            After four months of hard work I am now more determined than ever. NO PAIN NO GAIN!!
                        </p> */}
                        <div className='d-flex '>
                            <div className='mx-5'>
                                <h4>Skills:</h4>
                                <h6>HTML5</h6>
                                <h6>CSS3</h6>
                                <h6>BOOTSTRAP</h6>
                                <h6>TAILWIND</h6>
                                <h6>JAVASCRIPT</h6>
                                <h6>REACT</h6>
                            </div>
                            <div>
                                <h4>Technologies:</h4>
                                <h6>NODE</h6>
                                <h6>MONGODB</h6>
                                <h6>HEROKU</h6>
                                <h6>FIREBASE</h6>
                                <h6>GITHUB</h6>
                                <h6>NETLIFY</h6>
                                <h6>REACT ROUTER</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;