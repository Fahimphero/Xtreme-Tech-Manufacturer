import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../Images/logo.png'
import './Navbar.css'

const Navbar = () => {

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }

    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-secondary bg-secondary ">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className=" navbar-brand" href=" ">
                    <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"></img>
                    <span className='text-light'> XTreme Tech</span>
                </a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <div className='ms-auto fw-bold text-center'>
                        {
                            user &&
                            <p>Welcome <small className='text-light'>{user.displayName}</small></p>

                        }
                    </div>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">

                        <li className="nav-item">
                            <Link to='/' className="decoration fw-bold change pe-3" aria-current="page" >Home</Link>
                        </li>
                        {
                            user ? <> <li className='nav-item'>

                                <button style={{ border: '0', backgroundColor: 'inherit' }} onClick={logout} className="fw-bold change ps-0 pe-3 py-0" aria-current="page" >SignOut</button>

                            </li>
                                <li className="nav-item">
                                    <Link to='/dashboard ' className="decoration fw-bold change pe-3 " aria-current="page" >Dashboard</Link>
                                </li>
                            </>
                                : <li className="nav-item">
                                    <Link to='/login' className="decoration fw-bold change pe-3 " aria-current="page" >LogIn</Link>
                                </li>
                        }

                        <li className="nav-item">
                            <a href='https://irfanul-islam-fahim.netlify.app/' className="decoration fw-bold change pe-3" aria-current="page" >MyPortfolio</a>
                        </li>
                        <li className="nav-item">
                            <Link to='/blogs' className="decoration fw-bold change pe-3" aria-current="page" >Blogs</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>


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