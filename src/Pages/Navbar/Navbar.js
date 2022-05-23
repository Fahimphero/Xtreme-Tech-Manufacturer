import React from 'react';
import logo from '../../Images/logo.png'


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="ps-5 navbar-brand" href=" ">
                        <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"></img>
                        <span className='text-light'> Xtreme Tech</span>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href=" ">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href=" ">Home</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;