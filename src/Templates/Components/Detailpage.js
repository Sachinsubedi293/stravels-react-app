import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Api, Discount, RatingAdd } from '../Utils/common';

const Detailpage = () => {
    const [DetailApi, setDetailApi] = useState([]);
    const [Path, setPath] = useState([]);
    const [Rating, setRating] = useState([]);
    var slug = useParams('detail').slug;
    useEffect(() => {
        axios.get(Api + `/api/travel-place-information/?slug=${slug}`).then(res => {
            setDetailApi(res.data[0]);
            setPath(res.data[0].Travels_place_path);
            setRating(res.data[0].user_rating)
            console.log(res.data[0]);
            console.log(res.data[0].Travels_place_path);
        })
    }, [slug]);
    return (
        <>
            <div className="detailpage">
                <nav>
                    <ul className="container d-flex flex-wrap text-dark">
                        <li>Home</li>
                        <li>Destinations</li>
                        <li>{DetailApi.travel_place_title}</li>
                    </ul>
                </nav>
                <section className="details-start  container">
                    <div className="row row-cols-md-2">
                        <div className="col-md-9">
                            <h2 className="text-uppercase fw-bold ">{DetailApi.travel_place_title}</h2>
                            <div className="hr d-flex mt-0">
                                <hr />
                                <hr />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa consequatur, voluptas accusamus aliquam,
                                omnis optio consectetur ex voluptatibus quaerat, possimus natus nobis enim quis. Soluta nihil nobis maxime
                                quisquam illum?</p>
                            <div id="detail-carousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={DetailApi.travels_place_image} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={DetailApi.travels_place_image1} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={DetailApi.travels_place_image2} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#detail-carousel" data-bs-slide="prev">
                                    <div className="icon"><i className="fa fa-chevron-left fa-2x" aria-hidden="true"></i></div>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#detail-carousel" data-bs-slide="next">
                                    <div className="icon"><i className="fa fa-chevron-right fa-2x" aria-hidden="true"></i></div>

                                    <span className="visually-hidden">Previous</span>
                                </button>
                            </div>
                            <div
                                className="start mt-4 container d-flex justify-content-between p-2 shadow rounded border text-center align-items-center">
                                <div className="p-2">
                                    <p>Start Planning Your Tour</p>
                                </div>
                                <div className="ask-question">
                                    <a href="https://www.facebook.com/">
                                        <i className="fa fa-question " aria-hidden="true"> </i> Ask a Question
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="time mt-3 d-flex">
                                <i className="fa fa-calendar me-2" aria-hidden="true"></i>
                                <h6>{DetailApi.duration} Nights</h6>
                            </div>
                            <div className="review p-2 d-flex align-items-center ">

                                <a href="https://www.facebook.com/" className="btn btn-warning text-light me-2">{RatingAdd(Rating) ? RatingAdd(Rating) : 5}</a>
                                {RatingAdd(Rating) <= 1 ? <> <i className="fa fa-star text-warning" aria-hidden="true"></i> <i class="fa fa-star-o text-warning me-2" aria-hidden="true"></i> <i class="fa fa-star-o text-warning me-2" aria-hidden="true"></i> <i class="fa fa-star-o text-warning me-2" aria-hidden="true"></i> <i class="fa fa-star-o text-warning me-2" aria-hidden="true"></i> </> : RatingAdd(Rating) <= 2 ? <><i className="fa fa-star text-warning" aria-hidden="true"></i><i className="fa fa-star text-warning" aria-hidden="true"></i> <i class="fa fa-star-o text-warning me-2" aria-hidden="true"></i> <i class="fa fa-star-o text-warning me-2" aria-hidden="true"></i> <i class="fa fa-star-o text-warning me-2" aria-hidden="true"></i></> : RatingAdd(Rating) <= 3 ? <><i className="fa fa-star text-warning" aria-hidden="true"></i><i className="fa fa-star text-warning" aria-hidden="true"></i><i className="fa fa-star text-warning" aria-hidden="true"></i> <i class="fa fa-star-o text-warning me-2" aria-hidden="true"></i> <i class="fa fa-star-o text-warning me-2" aria-hidden="true"></i></> : RatingAdd(Rating) <= 4 ? <><i className="fa fa-star text-warning" aria-hidden="true"></i><i className="fa fa-star text-warning" aria-hidden="true"></i><i className="fa fa-star text-warning" aria-hidden="true"></i><i className="fa fa-star text-warning" aria-hidden="true"></i> <i class="fa fa-star-o text-warning me-2" aria-hidden="true"></i></> : <> <i className="fa fa-star text-warning" aria-hidden="true"></i><i className="fa fa-star text-warning" aria-hidden="true"></i><i className="fa fa-star text-warning" aria-hidden="true"></i><i className="fa fa-star text-warning" aria-hidden="true"></i><i className="fa fa-star text-warning" aria-hidden="true"></i></>}
                                <h6 className='ms-2'>{Rating.length} Cient Reviews</h6>
                            </div>
                            <div className="from">
                                <label>From </label><strong> Kathmandu </strong>to <strong> Pokhara</strong>
                            </div>
                            <div className="row row-cols-md-2 mt-4">
                                <div className="col d-flex flex-column justify-content-evenly">
                                    <strong>Tour Operator</strong>
                                    <p>{DetailApi.Tour_operator}</p>

                                    <strong>Age range</strong>
                                    <p>18 to 35</p>
                                    <strong>Private Available:</strong>
                                    <a href="https://www.facebook.com/"><p>Request As Private</p></a>
                                    <strong>Difficulty Level:</strong>
                                    <p>Easy</p>
                                </div>
                                <div className="col d-flex flex-column ">
                                    <strong>Max groupe size</strong>
                                    <p>{DetailApi.max_group_size}</p>
                                    <strong>Operated in</strong>
                                    <p>{DetailApi.operate_language}</p>
                                    <strong>Max Elevation:</strong>
                                    <p>4600m</p>
                                </div>
                            </div>
                            <div className="book shadow p-4 mt-5 ">
                                <small>From</small>
                                <del className="text-danger">${DetailApi.Total_cost}</del><span className="badge bg-danger ms-2 rounded-pill">{DetailApi.discount}%</span>
                                <div className="price d-flex align-items-center mt-0 ">
                                    <h4>US</h4>
                                    <h1 className="ms-2">${Discount(DetailApi.Total_cost, DetailApi.discount)}</h1>
                                </div>
                                <div className="check d-flex mt-3 ">
                                    <input type="button" className="btn btn-primary text-light fw-bold form-control" value="Check Avaibility" />
                                    <div className="wish ms-2 border rounded-circle">
                                        <div className="wish-button d-flex align-items-center , justify-content-center p-2 shadow rounded-circle">
                                            <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="intrest mt-3 d-flex justify-content-center align-items-center  ">
                                    <div className="icon my-auto me-2  p-0 rounded-pill">
                                        <i className="fa fa-clock-o fa-2x" aria-hidden="true"></i>
                                    </div>
                                    <div className="description">
                                        <p>
                                            <strong>Pay over time</strong> with smaller, interest-free instalments.
                                        </p>
                                    </div>
                                </div>
                                <div className="split d-flex justify-content-center align-items-center">
                                    <div className="icon my-auto me-2 p-0">
                                        <i className="fa fa-check fa-2x" aria-hidden="true"></i>
                                    </div>
                                    <div className="description">
                                        <p><strong>Book once</strong> and share the cost with split payments. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-md-2">
                        <div className="col-md-9 mt-5">
                            <h1>Places You’ll See</h1>
                            <div className="place">
                            </div>
                            <div className="map position-relative" dangerouslySetInnerHTML={{ __html: DetailApi.map }}>
                            </div>
                            <div className="overview mt-4 p-3 ">
                                <div className="title d-flex">
                                    <div className="icon me-2"><i className="fa fa-newspaper-o  fa-2x" aria-hidden="true"></i></div>
                                    <h1>Overview</h1>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea molestias numquam fugit ab quas quia at eius.
                                    Perspiciatis, harum. Corporis error id enim omnis assumenda ipsam magnam illum commodi maxime.</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi expedita non sunt laborum quasi ex
                                    odit neque veniam et voluptate itaque eaque, consequatur dignissimos ad cupiditate distinctio doloremque
                                    totam eius.</p>
                            </div>
                            <div className="highlights pt-4  container">
                                <div className="title container">
                                    <h2>Highlights</h2>
                                </div>
                                <div className="d-flex">
                                    <ul className="check-list">
                                        <li><i className="fa fa-check-circle-o fa-2x me-2 " aria-hidden="true"></i> Head</li>
                                        <li><i className="fa fa-check-circle-o fa-2x me-2 " aria-hidden="true"></i> Shoulders</li>
                                        <li><i className="fa fa-check-circle-o fa-2x me-2 " aria-hidden="true"></i> Knees</li>
                                        <li><i className="fa fa-check-circle-o fa-2x me-2 " aria-hidden="true"></i> Toes</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="Itinerary mt-2">

                                <div className="accordion-body">
                                    <div className="">
                                        <div className="title d-flex">
                                            <div className="icon me-2"><i className="fa fa-road fa-2x " aria-hidden="true"></i></div>
                                            <h1>Itinerary</h1>
                                        </div>
                                        <div className="accordion" id="MainAccordian">
                                            {Path.map((res, Index) => (
                                                <div className="accordion-item" key={res.id} >
                                                    <h2 className="accordion-header position-relative" id={"headingOne" + res.id}>
                                                        <button className="accordion-button d-flex flex-wrap align-items-center" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOne" + res.id} aria-expanded="true" aria-controls={"collapseOne" + res.id}>
                                                            <div className={Index === 0 ? "firsticon" : Index === Path.length - 1 ? "lasticon" : "middleicon"}></div>
                                                            <span className='me-3 p-0 text-danger'>Day:{Index + 1}</span> <label> {res.route_name}</label>
                                                        </button>
                                                    </h2>
                                                    <div id={"collapseOne" + res.id} className="accordion-collapse collapse" aria-labelledby={"headingOne" + res.id} data-bs-parent="#MainAccordian">
                                                        <div className="accordion-body text-center">
                                                            <p>{res.route_information}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="cost-detail p-3  mt-2 ">
                                <div className="title d-flex">
                                    <div className="icon me-2"><i className="fa fa-pie-chart fa-2x " aria-hidden="true"></i></div>
                                    <h1 className="text-uppercase">Cost Detail</h1>
                                </div>
                                <div className="includes container">
                                    <h5 className="text-uppercase">Cost Includes</h5>
                                    <ul className="check-list" type="none">
                                        <li><i className="fa fa-check-circle-o fa-2x me-2 " aria-hidden="true"></i> Head</li>
                                        <li><i className="fa fa-check-circle-o fa-2x me-2 " aria-hidden="true"></i> Shoulders</li>
                                        <li> <i className="fa fa-check-circle-o fa-2x me-2 " aria-hidden="true"></i> Knees</li>
                                        <li><i className="fa fa-check-circle-o fa-2x me-2 " aria-hidden="true"></i> Toes</li>
                                    </ul>
                                </div>
                                <div className="excludes container">
                                    <h5 className="text-uppercase">Cost Excludes</h5>
                                    <ul className="check-list" type="none">
                                        <li><i className="fa fa-times-circle-o fa-2x me-2 " aria-hidden="true"></i> Head</li>
                                        <li><i className="fa fa-times-circle-o fa-2x me-2 " aria-hidden="true"></i> Shoulders</li>
                                        <li><i className="fa fa-times-circle-o fa-2x me-2 " aria-hidden="true"></i> Knees</li>
                                        <li><i className="fa fa-times-circle-o fa-2x me-2 " aria-hidden="true"></i> Toes</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="datesandprice">
                                <div className="title d-flex">
                                    <div className="icon me-2"><i className="fa fa-money fa-2x" aria-hidden="true"></i></div>
                                    <h1>Dates & Price</h1>
                                </div>
                                <div className="datepricebody">
                                    <p>Except for the fixed departure date, we have every day departure according to your requirements.</p>

                                    <div className="selectdate p-2 d-flex justify-content-sm-start ">
                                        <i className="fa fa-calendar-check-o text-warning d-flex me-2 align-items-center" aria-hidden="true"></i>
                                        <small className="me-2 d-flex align-items-center">Selected Date:</small>
                                        <select className="form-select w-25">
                                            <option value="1">Dec 2022</option>
                                        </select>
                                    </div>
                                    <div className="date p-3 shadow m-2 rounded">
                                        <div className="row row-cols md-4">
                                            <div className="col">
                                                <small>Start Date</small>
                                                <h4 className="text-primary">5676543</h4>
                                            </div>
                                            <div className="col"><small>End Date</small>
                                                <h4 className="text-primary">456r7t89</h4>
                                            </div>
                                            <div className="col">
                                                <h4 className="text-primary">US$ 1000</h4><small>Per Persion</small>
                                            </div>
                                            <div className="col d-flex align-items-center justify-content-sm-around"><input type="button"
                                                className="btn btn-primary" value="Book Now" /></div>
                                        </div>
                                        <hr />
                                        <div className="availability"><i className="fa fa-bolt text-primary" aria-hidden="true"></i> Guaranteed </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3 mt-5 ">
                            <div className="shadow-lg p-3 mt-4 information">
                                <h3>Trip Information</h3>
                                <ul type="none" >
                                    <li><a href="https://www.nepalmotherhousetreks.com/info/trip-preparation" target="_blank"
                                        rel="noreferrer">Trip Preparation</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/info/trip-grading" target="_blank" rel="noreferrer">Trip
                                        Grading</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/info/trekking-permit-fees-in-nepal" target="_blank"
                                        rel="noreferrer">Trekking Permit Fees in Nepal</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/info/trekking-categories" target="_blank"
                                        rel="noreferrer">Trekking Categories</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/info/tims-cards" target="_blank" rel="noreferrer">TIMS
                                        Cards</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/info/nepal-trekking-season" target="_blank"
                                        rel="noreferrer">Nepal Trekking Season</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/info/money-bank-atm-service" target="_blank"
                                        rel="noreferrer">Money Bank &amp; ATM service</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/info/guide-and-porter-hiring-service" target="_blank"
                                        rel="noreferrer">Guide &amp; Porter Hiring Service in Nepal</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/info/foods-on-the-trek" target="_blank"
                                        rel="noreferrer">Foods on the Trek</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/info/first-aid-check-list" target="_blank"
                                        rel="noreferrer">First Aid Check List</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/info/drinking-water" target="_blank"
                                        rel="noreferrer">Drinking Water</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/info/altitude-sickness-information" target="_blank"
                                        rel="noreferrer">Altitude Sickness Information</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/info/accommodation" target="_blank"
                                        rel="noreferrer">Accommodation</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/info/a-typical-trek-day" target="_blank"
                                        rel="noreferrer">A Typical Trek Day</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/equipment/packing-list-for-nepal-trekking"
                                        target="_blank" rel="noreferrer">Packing List for Nepal Trek</a></li>
                                </ul>
                            </div>

                            <div className="information mt-5 text-center mb-0">
                                <h3 className="pt-3">You May also Like</h3>
                                <ul type="none" className="text-start pb-3 pe-1">
                                    <li><a href="https://www.nepalmotherhousetreks.com/trek-to-upper-mustang">Trek to Upper Mustang</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/annapurna-sunrise-trekking">Annapurna Sunrise
                                        Trekking</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/nar-phu-valley-trek">Nar Phu Valley Trek</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/upper-mustang-trek-with-luri-gumba">Upper Mustang Trek
                                        with Luri Gumba</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/nepal-glimpse-trip-with-yoga">Nepal Glimpse Trip with
                                        Yoga</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/annapurna-short-trekking">Annapurna Short Trekking</a>
                                    </li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/jomsom-to-muktinath-trek">Jomsom to Muktinath Trek</a>
                                    </li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/upper-mustang-tiji-festival-trek">Upper Mustang Tiji
                                        Festival Trek</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/annapurna-royal-trek">Annapurna Royal Trek</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/annapurna-base-camp-trekking">Annapurna Base Camp
                                        Trekking</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/annapurna-circuit-trek">Annapurna Circuit Trek</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/ghale-gaun-trekking">Ghale Gaun Trekking</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/annapurna-sanctuary-trekking">Annapurna Sanctuary
                                        Trekking</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/khopra-trek">Khopra Trek</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/mardi-himal-trek">Mardi Himal Trek</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/panchase-trekking">Panchase Trekking</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/nepal-rhododendron-trek">Nepal Rhododendron Trek</a>
                                    </li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/tilicho-lake-trek">Tilicho Lake Trek</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/poon-hill-trek-2-days">Poon Hill Trek 2 Days</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/ghorepani-poon-hill-trek">Ghorepani Poon Hill Trek</a>
                                    </li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/short-annapurna-circuit-trek">Short Annapurna Circuit
                                        Trek</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/annapurna-base-camp-trek-via-poon-hill">Annapurna Base
                                        Camp Trek via Poon Hill</a></li>
                                    <li><a href="https://www.nepalmotherhousetreks.com/nar-phu-valley-short-trek">Nar Phu Valley Short
                                        Trek</a></li>
                                </ul>
                            </div>
                        </div>


                    </div>

                </section>
            </div>
            <section className="contact container">
                <div className="row row-cols-md-3">
                    <div className="col-md-4">
                        <div className="contact-item">
                            <h5>Call us on 98407381115</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-item">
                            <h5>Email us</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-item border-0">
                            <h5>Chat with us online</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Detailpage;
