import React from 'react';
import part1 from '../Images/Parts/part 1.png'
import part2 from '../Images/Parts/part 13.jpg'
import part3 from '../Images/Parts/part 3.jpg'
import part4 from '../Images/Parts/part 7.jpg'
import part5 from '../Images/Parts/part 11.jpg'
import part6 from '../Images/Parts/part 9.jpg'
import './parts.css'
import { useNavigate } from 'react-router-dom';
import Loading from '../Pages/Loading/Loading';

const Parts = ({ part }) => {
    const { _id, image, name, body, price, minimumQuantity, availableQuantity } = part;
    const navigate = useNavigate();
    const handlePurchase = (id) => {

        navigate(`/purchase/${id}`)
    }

    return (

        <div className="col col-lg-4">
            <div className="card mb-3 hover-border" >
                <div className="row g-0">

                    <div className="col-md-5">
                        <img src={image} className="img-fluid rounded-start  h-100" alt="..."></img>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title text-center fw-bold">{name}</h5>
                            <p className="card-text">{body.slice(0, 80)}...</p>

                        </div>
                        <div className="row  card-body pt-0 pb-1">
                            <div className="col-md-6">
                                <h6 className="card-title fw-bold">Minimum Quantity: <span className='text-primary '>{minimumQuantity}</span></h6>
                            </div>
                            <div className="col-md-6">
                                <h6 className="card-title fw-bold">Available Quantity: <span className='text-primary '>{availableQuantity}</span></h6>
                            </div>
                            <div className="col-md-6">
                                <h6 className="card-title fw-bold">Price: <span className='text-primary fw-bold'>${price}</span></h6>
                            </div>
                            <div className="col-md-6">
                                <button onClick={() => handlePurchase(_id)} className='btn px-4 button text-light '>Buy</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Parts;