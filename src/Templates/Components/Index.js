import React, { useState, useEffect } from 'react'
import Rendervideo from '../Static/IMAGES/homevideo.mp4';
import imgmain from '../Static/IMAGES/main.jpg';
import imgmain2 from '../Static/IMAGES/main-2.jpg';
import imgmain3 from '../Static/IMAGES/main-3.jpg';
import imgmain4 from '../Static/IMAGES/main-4.jpg';
import imgmain5 from '../Static/IMAGES/main-4(1).jpg';
import imgmain6 from '../Static/IMAGES/forest.jpg';
import imgmain7 from '../Static/IMAGES/main-9.png';
import imgmain8 from '../Static/IMAGES/monkey.jpg';
import imgmain9 from '../Static/IMAGES/people.jpg';
import FlexCaroucel from './FlexCaroucel';
import axios from 'axios';
import { Api, Discount } from '../Utils/common';
import { Link } from 'react-router-dom';
import ReviewCaroucel from './ReviewCaroucel';

const Index = () => {
    const [InformationApi, setInformationApi] = useState([]);
    const [DepartureDate, setDepartureDate] = useState("");
    const [PackageName, setPackageName] = useState("");
    const [CategoryApi, setCategoryApi] = useState([]);
    const [CategoryId, setCategoryId] = useState(0);


    useEffect(() => {
        axios.get(Api + `/api/travel-place-information/`).then(res => {
            setInformationApi(res.data.slice(0, 3));
            console.log(res.data);
        }).catch(err => {
            console.error(err);
        })
        axios.get(Api + `/api/Travels-category/`).then(res => {
            setCategoryApi(res.data);
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, []);
    return (
        <>
            <section className="body">
                <section className="container">
                    <FlexCaroucel />
                </section>
                <section className="video">
                    <video src={Rendervideo} autoPlay muted loop ></video>
                    <div className="text text-center"><h1>Adventure</h1><h3>is</h3> <h2>worthwhile</h2>
                        <div className="discover"><h2>Discover More</h2></div></div>
                    <div className="overlay"></div>
                    <section className="container search-box p-2 shadow" id="search" >
                        <div className="row row-cols-md-4 pb-2">
                            <div className="col"><label htmlFor="https://www.facebook.com/">Destination</label>
                                <input type="text" name="https://www.facebook.com/" className="form-control" placeholder="--Place--" onChange={(e) => { setPackageName(e.target.value) }} list='Places' />
                                <datalist id='Places'>
                                    {InformationApi.map(res => (<option value={res.travel_place_title} key={res.id}>{res.travel_place_title}</option>))}
                                </datalist>
                            </div>
                            <div className="col"><label htmlFor="https://www.facebook.com/">Departure Date</label><input type="date" className="form-control" name="https://www.facebook.com/" onChange={(e) => { setDepartureDate(e.target.value) }} />
                            </div>
                            <div className="col"><label htmlFor="https://www.facebook.com/">Type</label><select className='form-select' onChange={(e) => { setCategoryId(e.target.value) }}>
                                <option value="0">--Type--</option>
                                {CategoryApi.map(res => (<option key={res.id} value={res.id}>{res.category}</option>))}</select></div>
                            <div className="col"><label htmlFor="https://www.facebook.com/">Search</label><Link to={
                                '/destinations'} state={{ 'name': PackageName, 'date': DepartureDate, "categoryid": CategoryId }} className='btn btn-primary text-light br-50 form-control'>
                                Search</Link></div>
                        </div>
                    </section>
                </section>
                <div className="col-container  bg-light mt-4 w-25 rounded mx-auto d-flex align-items-center justify-content-around">
                    <div className="trustpilot-widget  mt-4" data-locale="en-US" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="61cc78b4a5f416e3ff299298" data-style-height="50px" data-style-width="100%" data-theme="light" data-min-review-count="10">
                        <a href="https://www.trustpilot.com/review/stravels.ml" target="_blank" rel="noreferrer">Trustpilot</a>
                    </div>
                </div>
                <div className="text-center where mt-3  container">
                    <h1>Where Adventure Holidays Begin</h1>
                    <p className="font-weight-500">45 years experience of taking people on extraordinary adventures.</p>
                    <p>At Exodus, we love adventure travel and always have. There’s something about the feeling of visiting a
                        new country, culture or environment – whether that’s a mountain range, desert or jungle – that just
                        can’t be beaten. We first took a group of travellers to the Himalaya 45 years ago, and have since
                        expanded to offer more than 500 itineraries across more than 90 countries. So, if you’re looking for an
                        adventure holiday, or are in need of some travel inspiration for your next activity holiday, you’ve come
                        to the right place.
                    </p>
                    <p>We are proud to say that 97% of our customers would recommend us to a friend: you can read feedback in
                        our Trip Review Centre. And it’s part of our mission to do things as responsibly as possible, without
                        damaging the environment or disrupting local communities. In fact, we work with local guides,
                        restaurants and guest houses to positively impact their communities and to help you get closer to the
                        heart and soul of the destinations that we travel to.</p>
                </div>
                <section className="row row-cols-md-3 mt-5 container-grid-main m-auto container">
                    <div className="col-md-6">
                        <div className="content"> <a href="https://www.facebook.com/">
                            <div className="content-overlay"></div> <img className="content-image" src={imgmain} alt="Mustang" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Save Up-to 10% cash on pokhara trip</h3>
                                <p className="content-body">Enjoy holiday at huge discounts...</p>
                                <p className="content-text"><i className="fa fa-map-marker"></i> Pokhara</p>
                            </div>
                        </a> </div>
                    </div>

                    <div className="col-md-3">
                        <div className="content"> <a href="https://www.facebook.com/">
                            <div className="content-overlay"></div> <img className="content-image" src={imgmain2} alt="mainimage2" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Destnation of the month</h3>
                                <p className="content-body">Jomsome</p>
                                <p className="content-text"><i className="fa fa-map-marker"></i> Mustang</p>
                            </div>
                        </a> </div>
                    </div>
                    <div className="col-md-3">
                        <div className="content"> <a href="https://www.facebook.com/">
                            <div className="content-overlay"></div> <img className="content-image" src={imgmain3} alt="mainimage3" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Best Tour Operator Award</h3>
                                <p className="content-body">Fun Travels</p>
                                <p className="content-text"><i className="fa fa-map-marker"></i> Kathmandu</p>
                            </div>
                        </a> </div>
                    </div>
                    <div className="col-md-6">
                        <div className="content"> <a href="https://www.facebook.com/">
                            <div className="content-overlay"></div> <img className="content-image" src={imgmain4} alt="mainimage4" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Where can i travel?</h3>
                                <p className="content-body">Take advantage of the New & Easy Testing rules for travel.</p>
                            </div>
                        </a> </div>
                    </div>
                    <div className="col-md-3">
                        <div className="content"> <a href="https://www.facebook.com/">
                            <div className="content-overlay"></div> <img className="content-image" src={imgmain8} alt="mainimage8" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Experiences Worth Waiting For</h3>
                                <p className="content-body">Life is short</p>
                            </div>
                        </a> </div>
                    </div>
                    <div className="col-md-3">
                        <div className="content"> <a href="https://www.facebook.com/">
                            <div className="content-overlay"></div> <img className="content-image" src={imgmain5} alt="mainimage5" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Health Care</h3>
                                <p className="content-body">To travel is to live.</p>
                            </div>
                        </a> </div>
                    </div>
                    <div className="col-md-3">
                        <div className="content"> <a href="https://www.facebook.com/">
                            <div className="content-overlay"></div> <img className="content-image" src={imgmain9} alt="mainimage9" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Travel hub</h3>
                                <p className="content-body">Travel Guidelines</p>
                            </div>
                        </a> </div>
                    </div>
                    <div className="col-md-3">
                        <div className="content"> <a href="https://www.facebook.com/">
                            <div className="content-overlay"></div> <img className="content-image" src={imgmain6} alt="mainimage6" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Our Nature Net Positive commitment </h3>
                                <p className="content-body">Improvement</p>
                            </div>
                        </a> </div>
                    </div>
                    <div className="col-md-6">
                        <div className="content"> <a href="https://www.facebook.com/">
                            <div className="content-overlay"></div> <img className="content-image" src={imgmain7} alt="mainimage7" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Book With Confidence</h3>
                                <p className="content-body">Extra booking flexibility & financial protection</p>
                            </div>
                        </a> </div>
                    </div>

                </section>

                <section className="best-selling-trips container">
                    <div className="d-flex trip-hr">
                        <hr /><strong>Our Best Selling Trips</strong>
                        <hr />
                    </div>
                    <div className="row row-cols-md-3 ">
                        {InformationApi.map(res => (
                            <div key={res.id} className="col-md-4 p-4">
                                <div className="card shadow">
                                    <div id="card-carousel-1" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={res.travels_place_image} className="d-block img-fluid p-0 w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={res.travels_place_image1} className="d-block img-fluid p-0 w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={res.travels_place_image2} className="d-block img-fluid p-0 w-100" alt="..." />
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#card-carousel-1"
                                            data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#card-carousel-1"
                                            data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                    <div className="card-body">
                                        <h3 className="text-center ">{res.travel_place_title}</h3>
                                        <small className="d-flex review-star justify-content-center text-center pb-2">
                                            <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                            <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                            <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                            <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                            <i className="fa fa-star-half text-warning" aria-hidden="true"></i>
                                            <label >{res.user_rating.length} reviews</label>
                                        </small>
                                        <div className="row row-cols-md-2 mt-2">
                                            <div className="col-md-4"><img src={imgmain2} className="img-fluid" alt="catagory" />
                                                <label>Culture</label></div>
                                            <div className="col-md-8"><h5>Activity Level</h5>
                                                <h6>Modarate</h6><hr className="m-0" />
                                                <label>Age 18+</label></div>

                                        </div>
                                        <div className="d-flex justify-content-center mt-3">
                                            <h4>{res.duration}</h4>from <h4>${Discount(res.Total_cost, res.discount)} </h4>
                                        </div>
                                        <span className='fw-light w-100 d-flex justify-content-center mb-3'>With<span className='text-danger fw-bold me-1 ms-1'>{res.discount}%</span>Discount</span>
                                        <div className="d-flex justify-content-center">
                                            <label>Guided ({res.Tour_operator})</label>
                                        </div>
                                        <div className="viw-button"><Link type="button" to={"/detail/" + res.slug} className="form-control bg-primary text-light text-center mt-3">View Details</Link></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex trip-hr mt-4">
                        <hr /><strong> <button type="button" className="btn btn-outline-primary br-50 btn-rounded">
                            View all Trips
                        </button></strong>
                        <hr />
                    </div>

                </section>
                <section className="paragraph container text-center">
                    <p> Our trips include walking and cycling tours that take in awe-inspiring scenery and breathtaking wildlife
                        encounters. And we have adventure holidays designed specifically for families, mixed-activity holidays and
                        seasonal getaways, perfect for those interested in winter sports. There are unforgettable experiences in top
                        destinations the world over. From your own African odyssey, to a journey of discovery in Central America and
                        pioneering expeditions to the Arctic and Antarctic, with Exodus these are just some of the memories waiting to
                        be made. We’ve also launched a collection of new adventure holidays for 30s and 40s to help busy professionals
                        maximise their annual leave. Join us now for the adventure holiday of a life time. </p>
                    <p>Our staff have collectively visited over 170 countries and have the passion, knowledge and insight around
                        adventure travel that you can rely on. Contact any of our Expert explorers or Specialist Sales Team today.</p>
                    <p>Finally, for any additional information about everything from bookings to how to prepare for specific activity
                        holidays, our ‘FAQs’ can help point you in the right direction.</p>
                </section>
                <ReviewCaroucel />

                <section className="contact container">
                    <div className="row row-cols-md-3">
                        <div className="col-md-4"><div className="contact-item"><h5>Call us on 98407381115</h5></div></div>
                        <div className="col-md-4"><div className="contact-item"><h5>Email us</h5></div></div>
                        <div className="col-md-4"><div className="contact-item border-0"><h5>Chat with us online</h5></div></div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Index;
