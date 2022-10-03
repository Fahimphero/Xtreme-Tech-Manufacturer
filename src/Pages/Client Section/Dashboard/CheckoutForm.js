import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import gif from './../../../Images/Spinner-1s-104px (2).svg'

const CheckoutForm = ({ clientPart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { user, email, _id, body, price, name, quantity, phoneNumber } = clientPart;

    useEffect(() => {
        if (price) {
            fetch('https://salty-mountain-00629.herokuapp.com/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ price })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data?.clientSecret) {

                        setClientSecret(data.clientSecret);
                    }
                });
        }


    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        setCardError(error?.message || '');
        setSuccess('')
        // confirm card payment
        setProcessing(true);
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            toast.success(`Congrats! Your Payment is completed`);
            setSuccess('Congrats! Your payment is completed.')

            //store payment on database
            const payment = {
                productId: _id,
                transactionId: paymentIntent.id
            }
            fetch(`https://salty-mountain-00629.herokuapp.com/clientparts/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',

                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {
                    setProcessing(false);
                    console.log(data);
                })

        }

    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn button text-light  mt-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>

            {processing && (
                <div className="d-flex justify-content-center"><img src={gif} alt="" /></div>

            )}
            {
                cardError && <p className='text-danger mt-2'>{cardError}</p>
            }
            {
                success && <div className=' mt-2' >
                    <p>{success}  </p>
                    <p>Your transaction Id: <span className="text-primary font-bold">{transactionId}</span> </p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;