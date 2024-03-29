import React from 'react';
import './Footer.css';
import logo from '../../Images/logo.png'
import Google from '../../Images/Google Play.png'
import PayWith from '../../Images/Pay With.png'

const Footer = () => {
    return (
        <div className='bg-dark pt-5 pb-4'>
            <div className='container text-white'>
                <div className='row'>
                    <div className='col-12 col-lg-4 d-flex justify-content-center'>
                        <div>
                            <h4><img src={logo} width="40px" height="40px" alt="" /> XTreme Tech</h4>
                            <p> Level-4, 55, Parkins Center, New York, USA</p>
                            <p> Official: <a className='text-light' style={{ textDecoration: 'none' }} href="mailto: irfanulislamfahim@gmail.com">xtreme-tech@gmail.com</a></p>
                            <p> Helpline : 0346356356 , 024634636 , 035436346357</p>
                            <p>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
                            <p><img src={Google} alt="" /></p>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4 d-flex justify-content-center'>
                        <div>
                            <p className='showUnderline'>About Us</p>
                            <p className='showUnderline'>Success</p>
                            <p className='showUnderline'>Refund Policy</p>
                            <p className='showUnderline'>Terms and Conditions</p>
                            <p className='showUnderline'>Privacy Policy</p>
                            <p className='showUnderline'>App Privacy Policy</p>
                            <div className='d-flex'>
                                <p className='pe-2'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" className="svg-inline--fa fa-facebook-square fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg></p>
                                <p className='pe-2'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram-square" className="svg-inline--fa fa-instagram-square fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path></svg></p>

                                <p className='pe-2'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" className="svg-inline--fa fa-youtube fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4 d-flex justify-content-center'>
                        <img className='img-fluid' src={PayWith} alt="" />
                    </div>
                </div>
                <h6 className='text-center pt-3'><small >Copyright © 2022 Xtreme-Tech.com</small></h6>

            </div>

        </div>
    );
};

export default Footer;