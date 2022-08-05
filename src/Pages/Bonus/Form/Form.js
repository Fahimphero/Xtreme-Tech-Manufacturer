import React from 'react';
import image from '../../../Images/contact-img.png'
import './Form.css'

const Form = () => {
    return (
        <div className='container'>
            <div className='text-center mb-4'>
                <h2 className='fw-bold text-light pt-5'><span style={{ color: 'royalblue' }}>Get</span> In <span style={{ color: 'royalblue' }}>Touch</span> </h2>
                <p className='text-light'>To get every update please submit the form</p>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6  rounded-3 p-3 mx-auto">
                    <img className='img-fluid' src={image} alt="" />
                </div>
                <div className="col-12 col-lg-6 ">
                    <form className='w-75 mx-auto p-3 rounded-3' style={{ border: '7px solid royalblue' }}>
                        <div className="mb-3 mt-3 ">
                            <label htmlFor="exampleInputName1" className="form-label text-light">Your Name</label>
                            <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label text-light">Your Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label text-light">Your Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn button text-light w-100 mb-4"><span className='fs-5'>Submit</span></button>
                    </form>

                </div>
            </div>
        </div>
    );

};

export default Form;