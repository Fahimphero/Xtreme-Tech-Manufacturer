import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import image from '../../../Images/Contact-Us.png'
import './Form.css'

const Form = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hchpc4e', 'template_76vnvt6', form.current, 'Ya84B7fUSwl1YeCWA')
            .then((result) => {
                console.log(result.text);
                toast.success('Thank you!! Successfully received your email. XTreme Tech will reply very soon')
                e.target.reset();
            },
                (error) => {
                    console.log(error.text);
                });
    };



    return (
        <div className='container'>
            <div className='text-center mb-4'>
                <h2 className='fw-bold text-light pt-5'><span style={{ color: 'royalblue' }}>Get</span> In <span style={{ color: 'royalblue' }}>Touch</span> </h2>
                <p className='text-light'>To get every update please submit the form</p>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6  rounded-3  mx-auto">
                    <img className='img-fluid' src={image} alt="" />
                </div>
                <div className="col-12 col-lg-6 ">
                    <form ref={form} onSubmit={sendEmail} className='w-75 mx-auto p-3 rounded-3' style={{ border: '7px solid royalblue' }}>
                        <div className="mb-3 mt-3 ">
                            <label htmlFor="exampleInputName1" className="form-label text-light">Your Name</label>
                            <input type="text" name="user_name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" required></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label text-light">Your Email</label>
                            <input type="email" name="user_email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label text-light">Your Message</label>
                            <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3" required></textarea>
                        </div>
                        <button type="submit" className="btn button text-light w-100 mb-4"><span className='fs-5'>Submit</span></button>
                    </form>

                </div>
            </div>
        </div>
    );

};

export default Form;