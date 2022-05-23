import React, { useEffect, useState } from 'react';
import Parts from '../../Parts/Parts';

const Part = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className="container mt-5">
            <div className="row gy-3">
                {
                    parts.map(part => <Parts key={part._id} part={part}></Parts>)
                }
            </div>
        </div >
    );
};

export default Part;