import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddReviews = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('https://shrouded-island-37601.herokuapp.com/clientreviews', data)
            .then(function (response) {
                console.log(response);
                toast.success('Review Added Successfully')
            })

            .catch(function (error) {
                console.log(error);
            });


    }

    return (
        <div>
            <div className='login-form mx-auto  rounded-3 button'>
                <form className='p-3  mx-auto d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user?.displayName} placeholder='User Name' {...register("user", { required: true })} readOnly />

                    <input placeholder='User Image URL' {...register("image", { required: true })} />

                    <input typeof='number' placeholder='Ratings'{...register("quantity", { required: true })} />

                    {/* 
                        <input placeholder='Car Name' {...register("Car Name", { required: true })} /> */}


                    <textarea placeholder='Comments(Max-Length:150)' {...register("body", { required: true, maxLength: 150 })} cols="30" rows="5" />


                    <input className='text-light btn btn-dark' type="submit" value="Add Review" />

                </form>

            </div>
        </div>
    );
};

export default AddReviews;