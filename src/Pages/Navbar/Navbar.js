import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import auth from '../../firebase.init';
import logo from '../../Images/logo.png'
import './Navbar.css'
import defaultUser from '../../Images/profile-pic.png'


const Navbar = () => {

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }

    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div className='sticky-top'>
            <div className='bg-dark ' style={{ height: '6px' }}></div>
            <nav className="navbar  navbar-expand-lg navbar-secondary bg-secondary ">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className=" navbar-brand" href=" ">
                        <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"></img>
                        <span className='text-light'> XTreme Tech</span>
                    </a>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <div className='d-flex align-items-center justify-content-center  ms-auto fw-bold text-center py-2'>
                            {
                                user &&
                                <p className=' m-0'>Welcome{'  '}<small className='text-light'>{user.displayName}</small></p>

                            }
                        </div>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">

                            <li className="nav-item  py-2">
                                <CustomLink to='/' className="decoration fw-bold change px-3 py-2 rounded-3" aria-current="page" >Home</CustomLink>
                            </li>


                            <li className="nav-item py-2">
                                <a href='https://irfanulislam-fahim.netlify.app/' className="decoration fw-bold change px-3 py-2" aria-current="page" >MyPortfolio</a>
                            </li>
                            <li className="nav-item py-2">
                                <CustomLink to='/blogs' className="decoration fw-bold change px-3 py-2 rounded-3" aria-current="page" >Blogs</CustomLink>
                            </li>

                            {
                                user ? <>

                                    <li className="nav-item  py-2">
                                        <CustomLink to='/dashboard ' className="decoration fw-bold change px-3 py-2 rounded-3" aria-current="page" >Dashboard</CustomLink>
                                    </li>


                                    <li className='nav-item d-flex align-items-center justify-content-center'>
                                        <img className='profile-pic' src={user.photoURL ? user.photoURL : defaultUser} alt="" />

                                    </li>

                                    <li className='nav-item  py-2'>

                                        <button style={{ border: '0', backgroundColor: 'inherit' }} onClick={logout} className="fw-bold change  px-3 py-0" aria-current="page" >SignOut</button>

                                    </li>

                                </>
                                    : <li className="nav-item  py-2">
                                        <CustomLink to='/login' className="decoration fw-bold change px-3 py-2 rounded-3" aria-current="page" >LogIn</CustomLink>
                                    </li>
                            }

                        </ul>

                    </div>
                </div>
            </nav>
            <div className=' bg-light' style={{ height: '6px' }}></div>
        </div>


    );
};

export default Navbar;



<nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
        <a className="ps-5 navbar-brand" href=" ">
            <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"></img>
            <span className='text-light '> XTreme Tech</span>
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                    <a className="nav-link active text-light" aria-current="page" href=" ">Home</a>
                </li>
                <li className="nav-item">
                    <Link to='/login' className="nav-link active text-light" href=" ">Login</Link>
                </li> */}
            </ul>

        </div>
    </div>
</nav>