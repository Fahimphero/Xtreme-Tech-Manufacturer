import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from '../Dashboard/CheckoutForm';


const stripePromise = loadStripe('pk_test_51L1GYYKoLIjwSiBUp981FYI36wwB6fAW3bqkjsrhmQE8bLwAjju3H05zr5tqdRKbSWhyG0taDq6TgH8vmIh15iiZ009Vy46aYe');

const Payment = () => {
    const { id } = useParams()
    const [clientPart, setClientPart] = useState({});
    console.log(clientPart);
    const { user, email, _id, body, price, name, quantity, phoneNumber } = clientPart
    const url = `https://xtreme-tech-manufacturer-server.onrender.com/clientpart/${id} `

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setClientPart(data))
    }, [])

    console.log(id);
    return (
        <div className=''>
            {/* style="max-width: 18rem;" */}
            {/* <h2 className='text-light'>This is payment section</h2> */}
            <div className="card text-dark bg-light mb-3" style={{ maxWidth: '25rem' }}>
                <div className="card-header " style={{ color: 'royalblue' }} ><b>Hello,  {user}</b></div>
                <div className="card-body">
                    <h5 className="card-title pb-3 "><b>Please Pay For {name}</b></h5>
                    <p className="card-text mb-0">Your Product Quantity: <span className='text-primary'>{quantity}</span> </p>
                    <p className="card-text "> Your Address: {body}. Your Phone Number: {phoneNumber}</p>
                    <p className="card-text">Please pay: <span className='text-danger'>${price}</span></p>
                </div>
            </div>
            <div className="card text-dark bg-light mb-3" style={{ maxWidth: '25rem' }}>
                <div className="card-header">Enter your card number</div>
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm clientPart={clientPart} />
                    </Elements>
                </div>
            </div>


        </div>
    );
};

export default Payment;