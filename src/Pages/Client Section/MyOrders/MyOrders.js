import React, { useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Ringcontext } from '../Dashboard/Dashboard';



const MyOrders = () => {
    const [services, setServices] = useState([])
    const ring = useContext(Ringcontext)
    console.log(ring)

    // console.log(clientParts)

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/clientparts/${id} `

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = ring.filter(product => product._id !== id)
                    setServices(remaining);
                })

        }

    }
    return (
        <div>
            <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Manage</th>
                        <th scope="col">Payment</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        ring.map((info, index) => <tr>

                            <th scope="row">{index + 1}</th>
                            <td>{info?.user}</td>
                            <td>{info?.name}</td>
                            <td>{info?.quantity}</td>
                            <td><button onClick={() => handleDelete(info?._id)} className='btn btn-danger py-1'>DELETE</button></td>
                            <td>{info?.paid}</td>
                        </tr>)
                    }
                    {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;