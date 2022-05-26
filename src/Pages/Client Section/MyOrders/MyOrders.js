import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link, useNavigate, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import { Ringcontext } from '../Dashboard/Dashboard';



const MyOrders = () => {
    const navigate = useNavigate();
    // const ring = useContext(Ringcontext)
    // console.log(ring)

    const [user] = useAuthState(auth);

    const [clientParts, setClientParts] = useState([]);

    const url = `http://localhost:5000/clientparts/${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setClientParts(data));

    }, [])

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
                    const remaining = clientParts.filter(product => product._id !== id)
                    setClientParts(remaining);
                })

        }

    }
    return (
        <div>
            <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">User</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Manage</th>
                        <th scope="col">Payment</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        clientParts.map((info, index) => <tr>

                            <th scope="row">{index + 1}</th>
                            <td>{info?.user}</td>
                            <td>{info?.name}</td>
                            <td>{info?.quantity}</td>
                            <td><button onClick={() => handleDelete(info?._id)} className='btn btn-danger py-1'>DELETE</button></td>
                            <td><Link to={`/dashboard/payment/${info?._id}`}><button className='btn btn-info py-1'>PAY</button></Link></td>
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