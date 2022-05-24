import React from 'react';
import logo from '../../Images/logo.png'


const Navbar = () => {
    return (

        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark ">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a className="ps-5 navbar-brand" href=" ">
                    <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"></img>
                    <span className='text-light'> XTreme Tech</span>
                </a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
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


    );
};

export default Navbar;
<nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
        <a className="ps-5 navbar-brand" href=" ">
            <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"></img>
            <span className='text-light'> XTreme Tech</span>
        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
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