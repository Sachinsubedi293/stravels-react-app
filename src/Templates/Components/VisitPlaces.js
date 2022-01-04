import React from 'react'
import { Discount, Path, TravelplaceInformationfilter } from '../Utils/common';
import FlexCaroucel from './FlexCaroucel';

const VisitPlaces = () => {
    
    return (
        <>
            <section className="body destination">
                <section className="container">
                <FlexCaroucel />
                </section>
                <section className="image">
                    <div className="texts">
                        <h1>Destinations for <br />Holidays and Tours</h1>
                        <h6>A continent of temples and sunsets, and the highest and greatest mountain range on Earth</h6>
                    </div>
                </section>
                <nav>
                    <ul className="container text-dark">
                        <li>Home</li>
                        <li className="text-capitalize">{Path}</li>
                    </ul>
                </nav>
                <section className="container search-box bg-secondary text-light rounded p-2 shadow" id="search">
                    <div className="row row-cols-md-4 pb-2">
                        <div className="col"><label for="#">Destination</label>
                            <input type="text" name="#" className="form-control" placeholder="--Place--" />
                        </div>
                        <div className="col"><label for="#">Departure Date</label><input type="date" className="form-control" name="#" />
                        </div>
                        <div className="col"><label for="#">Price Range</label><input type="number" className="form-control" name="price"
                            placeholder="In Nepali Rupeee" /></div>
                        <div className="col"><label for="#">Search</label><input type="button" className="btn btn-primary br-50 form-control"
                            value="Search" name="#" /></div>
                    </div>
                </section>
                <section className="text-center top-destinations-show container mt-5">
                    <h2 className="pt-5">Our Top Destinations</h2>
                    <div className="destinations d-flex justify-content-center pb-3">
                        <a href="https://www.facebook.com/" className="btn btn-outline-primary br-50 btn-rounded">Kathmandu</a>
                        <a href="https://www.facebook.com/" className="btn btn-outline-primary br-50 btn-rounded">Bhaktapur</a>
                        <a href="https://www.facebook.com/" className="btn btn-outline-primary br-50 btn-rounded">Boudhanath Stupa (Bodhnath)</a>
                        <a href="https://www.facebook.com/" className="btn btn-outline-primary br-50 btn-rounded">Pokhara</a>
                        <a href="https://www.facebook.com/" className="btn btn-outline-primary br-50 btn-rounded">item5</a>
                        <a href="https://www.facebook.com/" className="btn btn-outline-primary br-50 btn-rounded">item6</a>
                        <a href="https://www.facebook.com/" className="btn btn-outline-primary br-50 btn-rounded">item7</a>
                        <a href="https://www.facebook.com/" className="btn btn-outline-primary br-50 btn-rounded">item8</a>
                        <a href="https://www.facebook.com/" className="btn btn-outline-primary br-50 btn-rounded">item9</a>
                        <a href="https://www.facebook.com/" className="btn btn-outline-primary br-50 btn-rounded">item10</a>
                    </div>
                </section>
                <section className="best-selling-trips container">
                    <div className="d-flex trip-hr">
                        <hr /><strong>Adventure Holidays</strong>
                        <hr />
                    </div>
                    <div className="row row-cols-md-3 ">
                        {TravelplaceInformationfilter().map(res=>(
                            
                            <div className="col-md-4" key={res.id}>
                            <div className="card shadow position-relative ">
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
                                <div className="w-100 d-flex justify-content-end position-absolute  top-0"><label className="text-light p-2 text-center discount-bg fw-bolder rounded-circle end-0">{res.discount}%</label></div>

                                <div className="card-body">

                                    <h3 className="text-center ">{res.travel_place_title}</h3>
                                    <small className="d-flex review-star justify-content-center text-center pb-2">
                                        <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                        <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                        <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                        <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                        <i className="fa fa-star-half text-warning" aria-hidden="true"></i>
                                        <label><strong className="ms-1 text-success">{res.user_rating.length}</strong> reviews</label>
                                    </small>
                                    <div className="row row-cols-md-2 mt-2">
                                        <div className="col-md-4"><img src="./IMAGES/main-2.jpg" className="img-fluid" alt="catagory" />
                                            <label>Culture</label>
                                        </div>
                                        <div className="col-md-8">
                                            <h5>Activity Level</h5>
                                            <h6>Modarate</h6>
                                            <hr className="m-0" />
                                            <label>Age 18+</label>
                                        </div>

                                    </div>
                                    <div className="d-flex justify-content-center mt-3 mb-0">
                                        <h4 className="text-danger me-1">{res.duration}</h4>from <h4 className="text-danger ms-1"> ${Discount(res.Total_cost, res.discount)}</h4>
                                    </div>
                                    <small className="d-flex w-100 text-center justify-content-center mt-0 mb-2">With Discount</small>
                                    <div className="d-flex justify-content-center">
                                        <label>Guided (<span className="text-success">{res.Tour_operator}</span>)</label>
                                    </div>
                                    <div className="viw-button"><a type="button" href="https://www.facebook.com/" className="form-control bg-primary text-light text-center mt-3">View
                                        Details</a></div>
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
                <section className="text-center activity container">
                    <h3 className="mb-3">Activitys in Nepal</h3>
                    <div className="d-flex justify-content-center activity-button pb-3">
                        <a href="https://www.facebook.com/" className="btn btn-outline-primary br-50 btn-rounded">item1</a>
                        <a href="https://www.facebook.com/" className="btn btn-outline-primary br-50 btn-rounded">item1</a>
                        <a href="https://www.facebook.com/" className="btn btn-outline-primary br-50 btn-rounded">item1</a>
                        <a href="https://www.facebook.com/" className="btn btn-outline-primary br-50 btn-rounded">item1</a>
                        <a href="https://www.facebook.com/" className="btn btn-outline-primary br-50 btn-rounded">item1</a>
                    </div>
                </section>
                <section className="experiences container text-center">
                    <div className="row row-cols-md-2 ">
                        <div className="col-md-8">
                            <h5>Top Nepal experiences</h5>
                            <p>We offer a range of walking, trekking and cultural holidays, and will be adding even more soon. </p>
                            <p><strong>Go Trekking in the Himalayas: </strong>With eight of the world’s ten highest peaks located in
                                Nepal, and a variety of options catering for different fitness levels and endurance, it’s no wonder that
                                trekking is the most popular activity here.

                                The Everest Base Camp Trek is by far the most popular route, and takes approximately 12 days to complete.
                                Trekkers walk along the Khumbu Valley, passing through authentic villages and visiting monasteries on their
                                way to the tallest peak on earth.

                                If you’re looking for more of a challenge, the Annapurna Circuit is an epic, three-week adventure most
                                notable for the sheer variety of scenery it passes through.

                                For novices, the Langtang Valley Trek is one of the easiest and most popular treks that takes 10-12 days.

                                If you’re really short on time, the Kathmandu Valley Trek is the perfect option, with stunning valley views
                                and cultural heritage rolled into just 3 days.
                                Everest Base Camp trek</p>
                            <p><strong>Cycle Around Phewa Tal in Pokhara: </strong>With nine lakes, Pokhara lives up to its label of “City
                                of Lakes”, but Phewa Tal is no doubt its main attraction. Rent a bike from any of the local stores and cycle
                                around the lakeshore to take in the tranquil scenery.

                                Here, you’ll see a variety of native birds, with a panoramic backdrop of rolling hills and the Himalayas.

                                If you have more than a day here, take one of the brightly painted doongas (boats) and stop off at the
                                Barahi Temple.

                                Situated in the center of the lake, it’s built in honor of the deity Ajima, and the locals regularly make
                                the trip on Saturday to worship her.</p>
                            <p><strong>Get a Taste of Authentic Nepalese Food: </strong>Thanks to its wonderful cultural and geographic
                                diversity, Nepalese cuisine is a hodgepodge of lip-smacking, fiery dishes that are rich in spices and
                                bursting with flavor.

                                More often than not, the ubiquitous dal bhat – a big plate of steamed rice served with delicious
                                accoutrements of stir-fried vegetables, meat curries, spiced potatoes, and salads – will be on the menu.

                                As will the meat-filled dumplings, Momos, the second crown jewel in Nepalese cuisine.

                                If you’re looking for more “everyday” local flavors, try choyla. This renowned Newari specialty is an
                                appetizer made with grilled meat, typically buffalo, but chicken and other forms of meat are also common.

                                Pair it with Tongba, a naturally fermented millet alcohol, served in long bamboo canisters, and you’ll earn
                                bragging rights to have tasted authentic Nepalese food.</p>
                            <p><strong>Go White Water Rafting in Upper Seti: </strong>If white water rafting down a river, camping on
                                riverside beaches, and getting far away from clamoring cities sounds good to you, try white water rafting in
                                Nepal.

                                Only 30 min from Pokhara’s Lakeside, the Upper Seti River is the best single-day white water rafting
                                adventure.

                                There are challenging rapids for rafters and kayakers in the October/November season, where you can pass
                                through a gorge with the high Annapurna Himalayas looming above.

                                If you love the great outdoors, there are many fantastic multi-day kayaking or white water rafting tours
                                departing frequently from Kathmandu and Pokhara.

                                Some even combine rafting with short treks to reach some unique landscapes, so check with local tour
                                operators when you arrive.</p>
                        </div>
                        <div className="col-md-4 p-5 ">
                            <div className="card-review p-2">
                                <div className="stars"><i className="fa fa-star text-warning" aria-hidden="true"></i>
                                    <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                    <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                    <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                    <i className="fa fa-star-half text-warning" aria-hidden="true"></i>
                                </div>

                                <p>Sierra de Aitana is a beautiful part of Spain that is full of majestic hills and mountains;...</p>
                                <div className="user">
                                    <img src="./IMAGES/stravelslogo.png" className="img-fluid" alt="user" />
                                    <h5>Name, Date</h5>
                                </div>
                                <h6>Trip</h6>
                            </div>
                            <div className="card-review mt-2 p-2 mb-2">
                                <div className="stars"><i className="fa fa-star text-warning" aria-hidden="true"></i>
                                    <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                    <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                    <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                    <i className="fa fa-star-half text-warning" aria-hidden="true"></i>
                                </div>

                                <p>Sierra de Aitana is a beautiful part of Spain that is full of majestic hills and mountains;...</p>
                                <div className="user">
                                    <img src="./IMAGES/stravelslogo.png" className="img-fluid" alt="user" />
                                    <h5>Name, Date</h5>
                                </div>
                                <h6>Trip</h6>
                            </div>
                            <a href="#
                            https://www.facebook.com/" className="btn btn-outline-primary ">Read All Reviews</a>

                        </div>
                    </div>
                </section>
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
            </section>
        </>
    )
}

export default VisitPlaces;
