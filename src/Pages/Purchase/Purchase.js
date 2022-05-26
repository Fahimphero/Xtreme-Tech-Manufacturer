import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    console.log(id)
    const [user, loading, error] = useAuthState(auth);
    const [part, setPart] = useState({});
    const [quantity, setQuantity] = useState('');

    const url = `http://localhost:5000/part/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));

    }, [])

    const { _id, image, name, body, price, minimumQuantity, availableQuantity } = part;

    let primaryQuantity = minimumQuantity;
    console.log(primaryQuantity);

    const handleQuantity = (event) => {

        setQuantity(event.target.value)
        console.log(event.target.value)
    }
    if (+quantity > +availableQuantity) {
        toast.error(`You can not increase more than ${availableQuantity}`)
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        if (+quantity > +availableQuantity) {
            toast.error(`Please reset your quantity`)
        }

        else {
            if (+quantity === 0) {

                Object.assign(data, { quantity: minimumQuantity, name: name, price: price })
                console.log(data)
                axios.post('http://localhost:5000/clientparts', data)
                    .then(function (response) {
                        console.log(response);
                        toast.success('Order Added Successfully')
                    })

                    .catch(function (error) {
                        console.log(error);
                    });
            }
            if (+quantity > 0) {
                Object.assign(data, { quantity: +quantity, name: name, price: price })
                console.log(data)
                axios.post('http://localhost:5000/clientparts', data)
                    .then(function (response) {
                        console.log(response);
                        toast.success('Order Added Successfully')
                    })

                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }


    return (
        <div className='bg-dark pb-5'>
            <div className='container text-black py-5'>
                <div className='row'>

                    <div className='col col-lg-6'>

                        <div className="card product-detail mx-auto" >
                            <img src={image} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h4 className="card-title fw-bold text-center">{name}</h4>
                                <div className="card-text">
                                    <p > {body}</p>
                                    <div className='d-flex justify-content-around'>

                                        <p><strong className='fs-5'>Minimum Quantity:</strong> <span style={{ color: 'royalblue' }} className='fw-bold fs-5'>{minimumQuantity}</span>
                                        </p>
                                        <p><strong className='fs-5'>Available Quantity:</strong> <span style={{ color: 'royalblue' }} className=' fw-bold fs-5'>{availableQuantity}</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-center'> <strong className='fs-5'>Price:</strong> <span style={{ color: 'royalblue' }} className=' fw-bold fs-5'>${price}</span>
                                        </p>
                                    </div>
                                    {/* <div className='d-flex justify-content-around align-items-center'>
                                        <p className='mb-0'><strong className='fs-6'>Company: </strong> {product.company}</p>
                                        <button onClick={() => handleDelivered(product.quantity)} className='btn btn-danger'><strong>Delivered</strong></button>
                                    </div> */}
                                </div>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a>  */}
                            </div>
                        </div>

                    </div>
                    <div className='col col-lg-6'>
                        <div className='login-form mx-auto  rounded-3 button'>
                            <form className='p-3  mx-auto d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>



                                <input defaultValue={user?.displayName} placeholder='User Name' {...register("user", { required: true })} readOnly />



                                <input defaultValue={user?.email} placeholder='User Email' {...register("email", { required: true })} readOnly />
                                {/* 
                        <input placeholder='Car Name' {...register("Car Name", { required: true })} /> */}

                                {/* <input placeholder='Image Url' {...register("image", { required: true })} /> */}

                                <textarea placeholder='Address' {...register("body", { required: true, maxLength: 70 })} cols="30" rows="5" />


                                <input typeof='number' placeholder='Phone Number' {...register("phoneNumber", { required: true })} />

                                {/* <input typeof='number' placeholder='Quantity'{...register("quantity", { required: true })} /> */}

                                {
                                    (quantity <= +availableQuantity) ? <input onChange={handleQuantity} type="number" defaultValue={minimumQuantity} name="restock" id="" /> :
                                        <input onChange={handleQuantity} typeof='number' disabled readOnly
                                            value={availableQuantity}
                                            step={availableQuantity} name="restock" id="" />
                                }



                                <input className='text-light btn btn-dark' type="submit" value="Purchase" />

                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Purchase;