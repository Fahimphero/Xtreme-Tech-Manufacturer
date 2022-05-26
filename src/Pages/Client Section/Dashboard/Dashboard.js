import React, { createContext, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import ClientSection from '../ClientSection';

export const Ringcontext = createContext('ring')

const Dashboard = () => {
    const { email } = useParams();
    const emailId = { email: email };
    console.log(email)
    const [clientParts, setClientParts] = useState([]);

    const url = `http://localhost:5000/clientparts/${emailId.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setClientParts(data));

    }, [])

    return (
        <Ringcontext.Provider value={email}>
            <div className='bg-dark text-light ' style={{ height: '80vh' }}>
                <div className='container'>

                    <div className='row'>
                        <div className='col col-lg-3'>
                            <div class="list-group mt-3">
                                <Link to={`/dashboard/${email}`} class="list-group-item list-group-item-action active" aria-current="true">
                                    My Orders
                                </Link>
                                <Link to={`/dashboard/${email}/reviews`} class="list-group-item list-group-item-action">
                                    My Reviews
                                </Link>
                                <Link to={`/dashboard/${email}/myprofile`} class="list-group-item list-group-item-action">
                                    My Profile
                                </Link>
                            </div>
                        </div>
                        <div className='col col-lg-9'>
                            <h1 className='pt-3' style={{ color: 'royalblue' }}>Welcome to your Dashboard</h1>
                            <h3 className='m-0 mb-4  '>My Orders: {clientParts.length}</h3>

                            <Outlet></Outlet>

                            {

                                <ClientSection clientParts={clientParts}></ClientSection>
                            }
                        </div>
                    </div>




                </div>

            </div>
        </Ringcontext.Provider>
    );

};

export default Dashboard;