import axios from 'axios';
import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie/es6';
import Logo from '../Static/IMAGES/stravels.png';
import access_refresh from '../Utils/access_and_refresh';
import { Api } from '../Utils/common';

const Login = () => {
    const [Error, setError] = useState(null);
    const [Success, setSuccess] = useState(null);
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const responseGoogle = (response) => {
        console.log(response);
    }
    const navigate = new useNavigate();
    const cookies = new Cookies();
    const LogintoAccount = () => {
        let data = JSON.stringify({
            "email": Email,
            "password": Password
        });

        let config = {
            method: 'post',
            url: Api + '/account/login/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then((response) => {
                var token = access_refresh(response.data.tokens);
                var access = (token.access).substring(1);
                var refresh = (token.refresh).substring(1);
                cookies.set('Access_token', access);
                localStorage.setItem('Refresh_token', refresh);
                setSuccess('Successfully Logged In, Redirecting to homepage.')
                setTimeout(() => {
                    setSuccess()
                    navigate("/")
                }, 2000);
            })
            .catch((error) => {
                setError(error.response.data.detail);
                console.log(error.response.data.detail);
                setTimeout(() => {
                    setError();
                }, 2000);
                console.log(error);
            });
    }
    return (
        <div className="container login mt-5 mb-4">
            <div className="row px-3 mb">
                <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
                    <div className="img-left d-flex align-items-center d-md-flex">
                        <div>
                            <img src={Logo} className="img-fluid" alt="logo" />
                        </div>
                    </div>
                    <div className="card-body">
                        <h4 className="title text-center mt-4">
                            Login into account
                        </h4>
                        <form className="form-box px-3">
                            <div className="form-input">
                                <span><i className="fa fa-envelope-o"></i></span>
                                <input type="email" className="form-control" placeholder="Email Address" onChange={(e) => { setEmail(e.target.value) }} tabIndex="10" required />
                            </div>
                            <div className="form-input">
                                <span><i className="fa fa-key"></i></span>
                                <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" required />
                            </div>
                            <div className="mb-3">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input form-check-input me-2" id="cb1" name="cbl" />
                                    <label className="custom-control-label" htmlFor="cb1"> Remember me</label>
                                </div>
                            </div>
                            {Error ? <div className="alert  alert-danger text-uppercase" role="alert">
                                <i className="fa fa-times-circle me-2" aria-hidden="true"></i> {Error}
                            </div> : <></>}
                            {Success ? <div className="alert alert-success text-uppercase" role="alert">
                                <i className="fa fa-check-square-o me-2" aria-hidden="true"></i> {Success}
                            </div> : <></>}
                            <div className="mb-1">
                                <button type="button" onClick={LogintoAccount} className="btn btn-primary btn-block form-control text-uppercase">
                                    Login
                                </button>
                            </div>
                            <div className="d-flex justify-content-end">
                                <a href="/forgot" className="forget-link text-primary mb-1">
                                    Forget Password?
                                </a>
                            </div>
                            <div className="text-center mb-3">
                                <h3 className="m-0">OR</h3>
                            </div>
                            <div className="google-login d-flex justify-content-center mb-3">
                                <GoogleLogin
                                    clientId="54505914534-lcojbgb7o42d5f45lsm3sfr49qcvse6p.apps.googleusercontent.com"
                                    buttonText="Login With Google"
                                    className="rounded google-button"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />

                            </div>
                            <div className="facebook d-flex justify-content-center">
                                {/* <FacebookLogin /> */}
                            </div>

                            <hr />
                            <div className="text-center mb-2">
                                Don't have an account?
                                <Link to="/register" className="register-link ms-2 text-primary">
                                    Register here
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
