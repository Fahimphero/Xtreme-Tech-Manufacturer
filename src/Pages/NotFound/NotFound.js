import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-dark text-light'>
            <h2 className='text-center'>Oops!! Page Not Found</h2>
            <h3 className='text-center'>Error 404</h3>
            <h3 className='text-center'><Link to='/'>  Go Back </Link></h3>
            <video style={{ width: '100%', height: '500px' }}

                src="https://thumbs.gfycat.com/RipeHandsomeBongo-mobile.mp4"

                muted
                autoPlay={"autoplay"}
                preLoad="auto"
                loop

            > </video>


        </div>
    );
};

export default NotFound;