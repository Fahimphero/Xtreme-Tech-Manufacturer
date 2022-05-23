import React from 'react';
import part1 from '../Images/Parts/part 1.png'
import part2 from '../Images/Parts/part 13.jpg'
import part3 from '../Images/Parts/part 3.jpg'
import part4 from '../Images/Parts/part 7.jpg'
import part5 from '../Images/Parts/part 11.jpg'
import part6 from '../Images/Parts/part 9.jpg'

const Parts = ({ part }) => {
    const { image, name, body, price, company, minimumQuantity, availableQuantity } = part;
    return (

        <div className="col col-lg-4">
            <div className="card mb-3" style={{ border: '1px solid blue' }}>
                <div className="row g-0">
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{body.slice(0, 95)}...</p>

                        </div>
                        <div className="row  card-body pt-0 pb-1">
                            <div className="col-md-6">
                                <h6 className="card-title">Minimum Quantity: <span className='text-primary'>{minimumQuantity}</span></h6>
                            </div>
                            <div className="col-md-6">
                                <h6 className="card-title">Available Quantity: <span className='text-primary'>{availableQuantity}</span></h6>
                            </div>
                            <div className="col-md-6">
                                <h6 className="card-title">Price: <span className='text-primary'>${price}</span></h6>
                            </div>
                            <div className="col-md-6">
                                <button className='btn btn-primary'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={image} className="img-fluid rounded-end  h-100" alt="..."></img>
                    </div>

                </div>

            </div>
        </div>


    );
};

export default Parts;