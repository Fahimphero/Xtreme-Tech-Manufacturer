import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const { email } = user;
    const onSubmit = data => {
        console.log(data)

        const url = `https://salty-mountain-00629.herokuapp.com/userinfo/${email}`

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success('User profile updated successfully')
            })
    }



    return (
        <div>
            <div className='login-form mx-auto  rounded-3 button'>
                <form className='p-3  mx-auto d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user?.displayName} placeholder='User Name' {...register("user", { required: true })} readOnly />

                    <input defaultValue={user?.email} placeholder='User Email' {...register("email", { required: true })} readOnly />

                    <input typeof='text' placeholder='Education' {...register("education", { required: true })} />

                    <input typeof='text' placeholder='Location' {...register("location", { required: true })} />

                    <input typeof='number' placeholder='Phone Number'{...register("phoneNumber", { required: true })} />

                    <input typeof='text' placeholder='Linkedin Profile Link'{...register("linkedin", { required: true })} />

                    {/* 
                        <input placeholder='Car Name' {...register("Car Name", { required: true })} /> */}





                    <input className='text-light btn btn-dark' type="submit" value="Add Review" />

                </form>

            </div>
        </div>
    );
};

export default Profile;