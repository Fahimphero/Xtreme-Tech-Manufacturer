import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { paymentid } = useParams()
    console.log(paymentid);
    return (
        <div>
            <h2 className='text-light'>This is payment section</h2>
        </div>
    );
};

export default Payment;