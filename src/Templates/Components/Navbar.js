import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie/es6';
import { Darktheme, DecodedToken } from '../Utils/common';
const Navbar = () => {
    const cookies = new Cookies();
    var access = cookies.get("Access_token");
    const [User] = useState(DecodedToken(access));
    console.log(User);
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg shadow">
                    <div className="container-fluid">
                        <a className="navbar-brand p-0" href="https://www.facebook.com/">
                            <div className="logo"></div>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-main"
                            aria-controls="navbar-main" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="toggler"><i className="fa fa-bars" aria-hidden="true"></i> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar-main">
                            <ul className="navbar-nav me-0 mb-2 mb-lg-0 mx-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="https://www.facebook.com/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.facebook.com/">Destinations</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.facebook.com/">Packages</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.facebook.com/">Blogs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.facebook.com/">Our Community</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.facebook.com/">Our info</a>
                                </li>
                            </ul>
                            <form className="d-flex  text-center justify-content-center">
                                <a href="#search"><i className="fa fa-search" aria-hidden="true"></i> Search</a>

                                <div className="form-check text-center form-switch">
                                    <label className="form-check-label lw-1" htmlFor="themeswitcher">LIGHT</label>
                                    <input className="form-check-input change" type="checkbox" onClick={()=>{Darktheme()}} id="themeswitcher" />
                                    <label className="form-check-label lw-1" htmlFor="themeswitcher">DARK</label>
                                </div>
                               <Link to="/login"><input type="button" className="btn btn-danger" value="Sign In"/></Link> 
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;
