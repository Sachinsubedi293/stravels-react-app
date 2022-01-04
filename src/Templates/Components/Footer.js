import React from 'react';
import Logo  from '../Static/IMAGES/stravels.png';

const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start text-muted">

                <section className="d-flex justify-content-center justify-content-lg-between p-2 border-bottom connected">

                    <div className="me-5 d-none d-lg-block ">
                        <span>Get connected with us on social networks:</span>
                    </div>



                    <div>

                        <section className="mb-2 social-media">

                            <a className="btn btn-primary btn-floating m-1" href="#!" role="button"><i
                                className="fa fa-facebook-square" aria-hidden="true"></i>
                                <p className='d-none'>Facebook</p>
                                </a>


                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#55acee" }} href="#!" role="button"><i
                                className="fa fa-twitter" aria-hidden="true"></i>
                                 <p className='d-none'>Twitter</p>
                                </a>


                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#dd4b39" }} href="#!" role="button"><i
                                className="fa fa-google" aria-hidden="true"></i>
                                 <p className='d-none'>Google</p>
                                 </a>


                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#ac2bac" }} href="#!" role="button"><i
                                className="fa fa-instagram" aria-hidden="true"></i>
                                 <p className='d-none'>Instagram</p>
                                </a>


                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#0082ca" }} href="#!" role="button"><i
                                className="fa fa-linkedin" aria-hidden="true"></i>
                                 <p className='d-none'>Linkedin</p>
                                </a>

                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#333333" }} href="#!" role="button"><i
                                className="fa fa-github" aria-hidden="true"></i>
                                 <p className='d-none'>Github</p>
                                </a>
                        </section>

                    </div>


                </section>



                <section className="">
                    <div className="container text-center text-md-start mt-2">

                        <div className="row mt-3">

                            <div className="container p-4 pb-0">

                                <section className="">
                                    <p className="d-flex justify-content-center align-items-center">
                                        <span className="me-3">Register for free</span>
                                        <button type="button" className="btn btn-outline-primary br-50 btn-rounded">
                                            Sign up!
                                        </button>
                                    </p>
                                </section>

                            </div>
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-center">

                                <h5 className="text-uppercase fw-bold mb-4 text-center">
                                    STRAVELS
                                </h5>
                                <img src={Logo} className="image img-fluid" alt="logo" />
                                <h5 className="text-center p-2">
                                    Safe and Suitable Travels
                                </h5>
                            </div>



                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-center">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Packages
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Angular</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">React</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Vue</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Laravel</a>
                                </p>
                            </div>



                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset text-uppercase  ">Travel Hub</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-uppercase ">Our Holidays</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-uppercase ">Careers</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-uppercase ">About Us</a>
                                </p>
                            </div>



                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 contact-footer">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fa fa-home" aria-hidden="true"></i> Kathmandu , KTM 44600, NP</p>
                                <p>
                                    <i className="fa fa-envelope" aria-hidden="true"></i> stravels@gmail.com
                                </p>
                                <p><i className="fa fa-phone" aria-hidden="true"></i> + 977 984 073 8115</p>
                                <p><i className="fa fa-print" aria-hidden="true"></i> + 977 234 567 89</p>
                            </div>

                        </div>

                    </div>
                </section>



                <div className="text-center copyright p-2" style={{ backgroundColor: "rgba(0, 0, 0, 0.034)" }}>
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="https://stravels.ml">Stravels.ml</a>
                </div>

            </footer>
        </>
    )
}

export default Footer;
