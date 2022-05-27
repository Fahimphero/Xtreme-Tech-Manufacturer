import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../Hooks/useAdmin';



// export const Ringcontext = createContext('ring')

const Dashboard = () => {
    // const [user] = useAuthState(auth)
    // const [admin] = useAdmin(user)
    const { email } = useParams();
    const emailId = { email: email };
    // console.log(email)
    // const ring = useContext(Ringcontext)
    // console.log(ring)

    const [clientParts, setClientParts] = useState([]);

    const url = `https://shrouded-island-37601.herokuapp.com/clientparts/${emailId.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setClientParts(data));

    }, [])


    return (
        // <Ringcontext.Provider value={email}>
        <div className='bg-dark text-light ' style={{ minHeight: '80vh' }}>
            <div className='container'>

                <div className='row'>
                    <div className='col col-lg-3'>
                        <div class="list-group mt-3">
                            <Link to={`/dashboard`} class="list-group-item list-group-item-action active" aria-current="true">
                                My Orders
                            </Link>
                            <Link to='/dashboard/addreviews' class="list-group-item list-group-item-action">
                                My Reviews
                            </Link>
                            <Link to='/dashboard/myprofile' class="list-group-item list-group-item-action">
                                My Profile
                            </Link>
                            <Link to='/dashboard/manageusers' class="list-group-item list-group-item-action">
                                All Users
                            </Link>
                        </div>
                    </div>
                    <div className='col col-lg-9'>
                        <h1 className='pt-3' style={{ color: 'royalblue' }}>Welcome to your Dashboard</h1>


                        <Outlet></Outlet>

                        {/* {

                                <ClientSection clientParts={clientParts}></ClientSection>
                            } */}
                    </div>
                </div>




            </div>

        </div>
        // </Ringcontext.Provider>
    );

};

export default Dashboard;


