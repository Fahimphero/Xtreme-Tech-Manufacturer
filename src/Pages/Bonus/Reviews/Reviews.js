import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import people1 from '../../../Images/People/People 1.png'
import people2 from '../../../Images/People/People 2.png'
import people3 from '../../../Images/People/People 3.png'



const Reviews = () => {

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('https://shrouded-island-37601.herokuapp.com/clientreviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])



    return (
        <div>

            <h2 className='text-light text-center'>Customer <span style={{ color: 'royalblue' }}>Reviews</span></h2>
            {/* <div className='d-flex align-items-center'>
                <div className='w-50 bg-primary' style={{ height: '2px' }}></div>
                <p className='mt-2 px-2'>Or</p>
                <div className='w-50 bg-primary' style={{ height: '2px' }}></div>
            </div> */}
            <div id="carouselExampleControls" className="carousel slide bg-secondary py-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ minHeight: '18rem' }}>
                        <img src={people1} className="d-block mx-auto rounded-pill p-1" style={{ border: "1px solid blue" }} alt="..." width="100" height="100" ></img>
                        <h6 className='text-dark text-center pt-2'>Harley Quinn</h6>
                        <h6 className='text-dark text-center pt-2'>Ratings: 5 stars</h6>
                        <p className='text-light d-block w-50 mx-auto text-center mt-4'>
                            The only company that offers value to…
                            The only company that offers value to their gaming customer base the last couple of years with a steady net profit margin since their foundation. I hope they take down Nvidia in the Gpu market.
                        </p>
                    </div>

                    {
                        reviews.map(review =>
                            <div key={review._id} className="carousel-item " style={{ minHeight: '18rem' }}>
                                <img src={review.image} className="d-block mx-auto rounded-pill p-1" style={{ border: "1px solid blue" }} alt="..." width="100" height="100" ></img>
                                <h6 className='text-dark text-center pt-2'>{review.user}</h6>
                                <h6 className='text-dark text-center pt-2'>Ratings  {review.quantity} Stars</h6>
                                <p className='text-light d-block w-50 mx-auto text-center mt-4'>
                                    {review.body}
                                </p>
                            </div>
                        )

                    }

                    {/* <div className="carousel-item">
                        <img src={people2} className="d-block mx-auto rounded-pill p-1" style={{ border: "1px solid blue" }} alt="..." width="100" height="100" ></img>
                        <h6 className='text-dark text-center pt-2'>John Doe</h6>
                        <p className='text-light d-block w-50 mx-auto text-center mt-4'>
                            The only company that offers value to…
                            The only company that offers value to their gaming customer base the last couple of years with a steady net profit margin since their foundation. I hope they take down Nvidia in the Gpu market.
                        </p>
                    </div> */}


                    <div className="carousel-item" style={{ minHeight: '18rem' }}>
                        <img src={people3} className="d-block mx-auto rounded-pill p-1" style={{ border: "1px solid blue" }} alt="..." width="100" height="100" ></img>
                        <h6 className='text-dark text-center pt-2'>John Cena</h6>
                        <h6 className='text-dark text-center pt-2'>Ratings: 5 stars</h6>
                        <p className='text-light d-block w-50 mx-auto text-center mt-4'>
                            The only company that offers value to…
                            The only company that offers value to their gaming customer base the last couple of years with a steady net profit margin since their foundation. I hope they take down Nvidia in the Gpu market.
                        </p>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Reviews;