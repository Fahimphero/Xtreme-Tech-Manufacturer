import React, { useEffect, useState } from 'react';
import Parts from '../../Parts/Parts';
import Loading from '../Loading/Loading';
import './Part.css'

const Part = () => {
    const [parts, setParts] = useState([]);



    useEffect(() => {
        fetch('https://shrouded-island-37601.herokuapp.com/part')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])

    if (parts.length == 0) {
        return <Loading></Loading>
    }

    return (
        <div className="container mt-5">
            <div className=' text-light mb-4 marquee'>
                <hr />
                <h2 className='text-light text-center mb-1 '>BEST OFFERS FROM <span style={{ color: 'royalblue' }} className='fw-bold'>XTreme Tech</span></h2>
                <hr />
            </div>
            <div className="row gy-3">
                {
                    parts.map(part => <Parts key={part._id} part={part}></Parts>)
                }
            </div>
        </div >
    );
};

export default Part;