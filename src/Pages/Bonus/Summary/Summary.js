import { faBuilding, faEarthAsia, faPeopleGroup, faPeopleRoof, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Summary = () => {
    return (
        <div className=' container mt-5 pb-5'>
            <h1 className='text-center text-uppercase' style={{ color: 'royalblue' }}>Millions Business Trust Us</h1>
            <h5 className='text-center text-light text-uppercase' >Try to understand users expectation</h5>
            <div className='row text-dark'>
                <div className='col-6 col-lg-3 pt-2 bg-light border-color d-flex justify-content-center'>
                    <div>
                        <p className='fs-2 fw-bold text-center mb-1'> <FontAwesomeIcon className='' style={{ color: 'royalblue' }} icon={faPeopleRoof}></FontAwesomeIcon> </p>
                        <p className='fs-2 fw-bold text-center mb-0'>575+</p>
                        <h5 className='pb-2 text-center' style={{ color: 'royalblue' }}> Happy Clients</h5>
                    </div>
                </div>
                <div className='col-6 col-lg-3 pt-2 bg-light border-color d-flex justify-content-center'>
                    <div>
                        <p className='fs-2 fw-bold text-center mb-1'> <FontAwesomeIcon style={{ color: 'royalblue' }} icon={faPeopleGroup}></FontAwesomeIcon> </p>
                        <p className='fs-2 fw-bold text-center mb-0'>75</p>
                        <h5 className='pb-2 text-center' style={{ color: 'royalblue' }}> Hardworking People</h5>
                    </div>

                </div>
                <div className='col-6 col-lg-3 pt-2 bg-light border-color d-flex justify-content-center'>
                    <div>
                        <p className='fs-2 fw-bold text-center mb-1'> <FontAwesomeIcon style={{ color: 'royalblue' }} icon={faEarthAsia}></FontAwesomeIcon> </p>
                        <p className='fs-2 fw-bold text-center mb-0'>12</p>
                        <h5 className='pb-2 text-center' style={{ color: 'royalblue' }}> Countries Covered</h5>
                    </div>
                </div>
                <div className='col-6 col-lg-3 pt-2 bg-light border-color d-flex justify-content-center'>
                    <div>
                        <p className='fs-2 fw-bold text-center mb-1'> <FontAwesomeIcon className='' icon={faThumbsUp} style={{ color: 'royalblue' }}></FontAwesomeIcon> </p>
                        <p className='fs-2 fw-bold text-center mb-0'>636+</p>
                        <h5 className='pb-2 text-center' style={{ color: 'royalblue' }}>Feedbacks</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;