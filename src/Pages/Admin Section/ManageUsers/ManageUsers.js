import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

import Loading from '../../Loading/Loading';

const ManageUsers = () => {
    // const [users, setUsers] = useState([]);
    const [user] = useAuthState(auth);

    const handleRemove = (info) => {
        console.log(info)
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://xtreme-tech-manufacturer-server.onrender.com/users/${info._id} `
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    refetch();
                    toast.success('User removed successfully')
                })

        }
    }

    const handleAdmin = (admin) => {
        console.log(admin)



        fetch(`https://xtreme-tech-manufacturer-server.onrender.com/userinfo/admin/${admin?.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Admin added successfully')
                }
            })

    }

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://xtreme-tech-manufacturer-server.onrender.com/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }



    // useEffect(() => {
    //     fetch('https://xtreme-tech-manufacturer-server.onrender.com/users')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }, [users])


    return (
        <div>
            <div>
                <h3 className='m-0 mb-4  '>Total Users: {users?.length}</h3>
                <table className="table table-dark table-striped table-hover">
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
                            users.map((info, index) => <tr key={info._id}>

                                <th scope="row">{index + 1}</th>
                                <td>{info?.userName}</td>
                                <td>{info?.email}</td>
                                {info?.role !== 'admin' ?
                                    <td><button onClick={() => handleAdmin(info)} className='btn btn-secondary py-1'>Make Admin</button></td> :
                                    <td><button disabled className='btn btn-info py-1'>Admin</button></td>
                                }
                                <td><button onClick={() => handleRemove(info)} className='btn btn-danger py-1'>Remove</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;