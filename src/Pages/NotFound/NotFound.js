import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='back-img'>
            <div className=' container d-flex align-items-center justify-content-center' style={{ width: '100%', minHeight: '100vh' }} >
                <div className="row gy-4 ">
                    <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                        <img className="img-fluid" src="https://i.ibb.co/v30JLYr/Group-192-2.png" alt="" />

                    </div>
                    <div className="text-light col-12 col-lg-6 d-flex align-items-center justify-content-center">
                        <div className='w-75'>
                            <h1 style={{ fontFamily: "ui-sans-serif,system-ui,-apple-system", fontWeight: '900' }} className="pb-4">Looks like you've found the doorway to the great nothing</h1>
                            <p className="py-2">The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.</p>
                            <p className="py-2">Sorry about that! Please visit our hompage to get where you need to go.</p>
                            <Link to='/'><button className="btn btn-primary mb-4">Go back to Homepage</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;