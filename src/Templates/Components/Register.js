import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Static/IMAGES/stravels.png';
import Usericon from '../Static/IMAGES/usericon.png';
import axios from 'axios';
import { Api } from '../Utils/common';

const Register = () => {
    const [Success, setSuccess] = useState('');
    const [Error, setError] = useState();
    const [ProfilePic, setProfilePic] = useState(null);
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [CheckPass, setCheckPass] = useState();
    const [Password, setPassword] = useState('');
    const [Contact, setContact] = useState('');
    const [Address, setAddress] = useState('');
    const navigate = new useNavigate();
    const Selectedfile = (e) => {
        setProfilePic(e.target.files[0]);
        Usericon = URL.createObjectURL(e.target.files[0]);
    }

    const RegisterAccount = () => {
        if (CheckPass===Password&&Password.length>=8) {
            const FormData = require('form-data');
            let data = new FormData();
            if (ProfilePic!=null) {
                data.append('Profile_Image', ProfilePic)
            }
            data.append('email', Email);
            data.append('contactno', Contact);
            data.append('password', Password);
            data.append('first_name', FirstName);
            data.append('last_name', LastName);
            data.append('address', Address)
            
            let config = {
              method: 'post',
              url: Api+'/account/register/',
              headers: { 
                'Content-Type':'multipart/form-data',
              },
              data : data
            };
            
            axios(config)
            .then((response) => {
                setSuccess("Account Created Successfully.")
                setTimeout(() => {
                    setSuccess("Redirecting to login page.")
                    setTimeout(() => {
                        setSuccess()
                        navigate("/login")
                    }, 1000);
                }, 2000);
              console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                setError(error.response.data.email);
                setTimeout(() => {
                    setError()
                }, 2000);
              console.log(error.response.data);
            });
            
        }else{
           
            setError("Solve the errors fist. Either your Password is short or confirmed password is different.")
            setTimeout(() => {
                setError()
            }, 2000);
        }
       
    }
    return (
        <>
            <div className="container-fluid login mt-5 mb-4">
                <div className="row px-3">
                    <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
                        <div className="img-left d-flex align-items-center d-md-flex">
                            <div>
                                <img src={Logo} className="img-fluid" alt="logo" />
                            </div>
                        </div>

                        <div className="card-body">
                            <h4 className="title text-center mt-4">
                                Sign up into account
                            </h4>
                            <form className="form-box px-3">
                                <div
                                    className="image w-25 h-25 position-relative d-flex justify-content-center m-auto mb-3 p-1 bg-light rounded-circle border border-primary border-5">
                                    <img src={Usericon} className="img-fluid rounded-circle" alt="user-icon" />
                                    <div className="position-absolute w-25 top-50 end-0">
                                        <label htmlFor="file" className="file-selector"> <i className="fa fa-camera text-light"
                                            aria-hidden="true"></i></label>
                                        <input type="file" name="file" id="file" onChange={Selectedfile} className="form-control container-fluid"
                                            accept="image/*" />
                                    </div>
                                </div>
                                <div className="row row-cols-md-2 mb-4">
                                    <div className="col">
                                        <div className="form-input">
                                            <span><i className="fa fa-user" aria-hidden="true"></i></span>
                                            <input type="text" name="firstname" className="form-control mb-0"
                                                placeholder="First Name" onChange={(e) => { setFirstName(e.target.value) }} required />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-input">
                                            <span><i className="fa fa-user" aria-hidden="true"></i></span>
                                            <input type="text" name="lastname" className="form-control mb-0" placeholder="Last Name" onChange={(e) => { setLastName(e.target.value) }}
                                                required />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-envelope-o"></i></span>
                                    <input type="email" name="email" className="form-control mb-0" placeholder="Email Address"
                                        tabIndex="10" onChange={(e) => { setEmail(e.target.value) }} aria-describedby="#emailHelp" required />
                                    <div id="emailHelp" className="mb-3">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-key"></i></span>
                                    <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} className="form-control mb-0" aria-describedby="#PasswordHelp" placeholder="Password" required />
                                    <div id="PasswordHelp" className="mb-3"><ul><li>Passwords must be at least 8 characters long.</li><li>Password and Confirmed password must be same.</li></ul></div>
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-key"></i></span>
                                    <input type="password" name="password" onChange={(e)=>{setCheckPass(e.target.value)}} className="form-control" placeholder="Confirm Password"
                                        required />
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-phone"></i></span>
                                    <input type="number" name="contactno" className="form-control" placeholder="Contact No" onChange={(e) => { setContact(e.target.value) }}
                                        required />
                                </div>
                                <div className="form-input address">
                                <span> <i className="fa fa-address-book" aria-hidden="true"></i></span>
                                    <input type="text" name="address" className="form-control" placeholder="Address(City)" onChange={(e) => { setAddress(e.target.value) }}
                                        required />
                                </div>
                                {Error ? <div className="alert  alert-danger text-uppercase" role="alert">
                                    <i className="fa fa-times-circle me-2" aria-hidden="true"></i> {Error}
                                </div> : <></>}
                                {Success ? <div className="alert alert-success text-uppercase" role="alert">
                                    <i className="fa fa-check-square-o me-2" aria-hidden="true"></i> {Success}
                                </div> : <></>}
                                <div className="mb-3 text-center">
                                    <button type="button" className="btn btn-block btn-primary w-50 form-control text-uppercase" onClick={RegisterAccount}>
                                        Sign up
                                    </button>
                                </div>
                                <hr />

                                <div className="text-center mb-2">
                                    Already have an account?
                                    <Link to="/login" className="register-link ms-2 text-primary">
                                        Login
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;
