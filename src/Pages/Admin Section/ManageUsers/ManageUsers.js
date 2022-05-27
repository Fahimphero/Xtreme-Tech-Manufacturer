import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import Loading from '../../Loading/Loading';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);


    const handleAdmin = (admin) => {
        console.log(admin)



        fetch(`https://shrouded-island-37601.herokuapp.com/userinfo/admin/${admin?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an Admin')
                }
                return res.json()

            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success('Successfully made an Admin')
                }

            })

    }





    useEffect(() => {
        fetch('https://shrouded-island-37601.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])

    // const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://shrouded-island-37601.herokuapp.com/users', {
    //     method: 'GET',

    // }).then(res => res.json()));
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <div>
                <h3 className='m-0 mb-4  '>My Orders: {users?.length}</h3>
                <table class="table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User</th>
                            <th scope="col">User Email</th>
                            <th scope="col">Manage</th>
                            <th scope="col">DELETE</th>

                        </tr>
                    </thead>

                    <tbody>

                        {
                            users.map((info, index) => <tr>

                                <th scope="row">{index + 1}</th>
                                <td>{info?.userName}</td>
                                <td>{info?.email}</td>
                                {info?.role !== 'admin' ?
                                    <td><button onClick={() => handleAdmin(info)} className='btn btn-secondary py-1'>Make Admin</button></td> :
                                    <td><button disabled className='btn btn-info py-1'>Admin</button></td>
                                }
                                <td><button className='btn btn-danger py-1'>DELETE</button></td>



                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;