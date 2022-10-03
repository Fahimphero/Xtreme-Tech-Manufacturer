import { signOut } from 'firebase/auth';
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

    const url = `https://xtreme-tech-manufacturer-server.onrender.com/clientparts/${user?.email}`
    useEffect(() => {
        if (user) {
            fetch(`https://xtreme-tech-manufacturer-server.onrender.com/clientparts/${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => { setClientParts(data) });
        }
    }, [user])

    // console.log(clientParts)




    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://xtreme-tech-manufacturer-server.onrender.com/clientparts/${id} `

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
            <h3 className='m-0 mb-4  '>My Orders: {clientParts.length}</h3>
            <table className="table table-dark table-striped table-hover">
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
                        clientParts.map((info, index) => <tr key={info?._id}>

                            <th scope="row">{index + 1}</th>
                            <td>{info?.user}</td>
                            <td>{info?.name}</td>
                            <td>{info?.quantity}</td>
                            <td><button onClick={() => handleDelete(info?._id)} className='btn btn-danger py-1'>DELETE</button></td>
                            {
                                info?.paid ?
                                    <td>PAID <span style={{ color: 'royalblue' }}>TransactionId:</span> {info?.transactionId}</td>
                                    :
                                    <td><Link to={`/dashboard/payment/${info?._id}`}><button className='btn button text-light py-1'>PAY</button></Link></td>
                            }

                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;