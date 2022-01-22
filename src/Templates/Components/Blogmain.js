import React from 'react'

const Blogmain = () => {
    return (
        <section className="blog">
            <div className="nav-scroller container">
                <nav className="nav d-flex justify-content-between">
                    <a className="p-3 link-secondary" href="#">World</a>
                    <a className="p-3 link-secondary" href="#">U.S.</a>
                    <a className="p-3 link-secondary" href="#">Technology</a>
                    <a className="p-3 link-secondary" href="#">Design</a>
                    <a className="p-3 link-secondary" href="#">Culture</a>
                    <a className="p-3 link-secondary" href="#">Business</a>
                    <a className="p-3 link-secondary" href="#">Politics</a>
                    <a className="p-3 link-secondary" href="#">Opinion</a>
                    <a className="p-3 link-secondary" href="#">Science</a>
                    <a className="p-3 link-secondary" href="#">Health</a>
                    <a className="p-3 link-secondary" href="#">Style</a>
                    <a className="p-3 link-secondary" href="#">Travel</a>
                </nav>
            </div>
            <div className="container-fluid image-container-blog p-0 position-relative text-center">
                <img src="./IMAGES/destination.jpg" className=" p-0 main-image-blog "
                    alt="Main Image" />
                <div className="content container text-start position-absolute ">
                    <div className="category">
                        <ul type="none" className="d-flex">
                            <li>Travel</li>
                            <li>Tourism</li>
                        </ul>
                    </div>
                    <div className="title">
                        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                    </div>
                    <div className="userName text-start"><img src="./IMAGES/usericon.png" className="rounded-circle usericon"
                        alt="usericon" />Name</div>
                    <div className="viewsanddate d-flex"><span className="views me-3">18k views</span><span
                        className="date">12date</span></div>
                </div>
            </div>


            <section className="pt-5 pb-5">
                <div className="container ">
                    <div className="row d-md-flex-row   ">
                        <div className="col-md-5 ms-md-0 col-12   d-flex  ">
                            <div className="card blog-card p-0   w-100 h-100 text-light shadow-lg position-relative border-0 ">
                                <img className="card-img h-100 w-100"
                                    src="https://images.unsplash.com/photo-1522724709546-19901cb1818a?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=97bace733cd75edf9ec8b4a2ef1fad7c"
                                    alt="Card image" />
                                <div className="card-img-overlay  p-1 p-md-3    ">
                                    <div className="position-relative  w-100 h-25  d-flex">
                                        <div className="container-fluid align-self-start   mt-2 mb-2">
                                            <div className="row">
                                                <div className="col-7 col-md-5">
                                                    <h6 className="mt-1 text-white">Travel</h6>
                                                </div>
                                                <div className="col-md-7 col-5 text-right">
                                                    <div className="row align-items-center">
                                                        <div className="col-12 align-self-center">
                                                            <hr className="border border-border-light mt-3" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="position-relative card-content-title  w-100 h-100  d-flex">
                                        <div className="container-fluid align-self-center mt-5 mb-2">
                                            <div className="row h-100 align-items-center">
                                                <div className="col-12">
                                                    <h2 className="text-end pt-md-2 pt-sm-4 text-white">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="position-relative  w-100  h-25 d-flex">
                                        <div className="container-fluid p-0 m-0 align-self-end  mt-5 mb-2">
                                            <div className="row">
                                                <div className="col-md-7 col-7">
                                                    <div className=" pt-0 d-inline-block">
                                                        <div className="userName text-start"><img src="./IMAGES/usericon.png"
                                                            className="img-fluid rounded-circle usericon" alt="usericon" />Name</div>
                                                        <div className="viewsanddate d-flex"><span className="views me-3">18k
                                                            views</span><span className="date">12date</span></div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 h-100">
                            <div className="container-fluid w-100">
                                <div className="row">
                                    <div className="col col-12 text-center text-md-start">
                                        <h2 className="pt-4 pt-md-0">Need any help about travel?</h2>

                                    </div>
                                </div>
                                <div className="row mt-2 align-content-center">
                                    <a className="card p-2 col-md-6  no-gutters text-light  border-light " data-toggle="modal"
                                        data-target=".bd-example-modal-lg">
                                        <img className="card-img h-100 shadow"
                                            src="https://images.unsplash.com/photo-1517659649778-bae24b8c2e26?ixlib=rb-0.3.5&amp;s=6c3524e0ea8d0107f85384392d779467&amp;auto=format&amp;fit=crop&amp;w=666&amp;q=80"
                                            alt="Card image" />
                                        <div
                                            className="card-img-overlay p-1 d-flex  flex-column  align-items-baseline justify-content-center ">

                                            <div className="container-fluid  h-50  text-center">
                                                <div className="row h-100 align-items-center">
                                                    <div className="col-12 cardwh">
                                                        <h2 className="text-white  mt-3 mb-3">How can i travel?
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </a>
                                    <a className="card p-2 col-md-6  no-gutters text-light  border-light" data-toggle="modal"
                                        data-target=".bd-example-modal-lg">
                                        <img className="card-img h-100 shadow"
                                            src="https://images.unsplash.com/photo-1443453489887-98f56bc5bb38?ixlib=rb-0.3.5&amp;s=13ea309e96c29da90ee6453003ba8408&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80"
                                            alt="Card image" />
                                        <div
                                            className="card-img-overlay p-1 d-flex  flex-column  align-items-baseline justify-content-center ">

                                            <div className="container-fluid  h-50  text-center">
                                                <div className="row h-100 align-items-center">
                                                    <div className="col-12 cardwh">
                                                        <h2 className="text-white  mt-3 mb-3">Where can i travel?
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </a>
                                    <a className="card p-2 col-md-6  no-gutters text-light  border-light" data-toggle="modal"
                                        data-target=".bd-example-modal-lg">
                                        <img className="card-img h-100 shadow"
                                            src="https://images.unsplash.com/photo-1517659649778-bae24b8c2e26?ixlib=rb-0.3.5&amp;s=6c3524e0ea8d0107f85384392d779467&amp;auto=format&amp;fit=crop&amp;w=666&amp;q=80"
                                            alt="Card image" />
                                        <div
                                            className="card-img-overlay p-1 d-flex  flex-column  align-items-baseline justify-content-center ">

                                            <div className="container-fluid  h-50  text-center">
                                                <div className="row h-100 align-items-center">
                                                    <div className="col-12 cardwh">
                                                        <h2 className="text-white  mt-3 mb-3">Travel tips
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </a>
                                    <a className="card p-2 col-md-6  no-gutters text-light  border-light" data-toggle="modal"
                                        data-target=".bd-example-modal-lg">
                                        <img className="card-img h-100 shadow"
                                            src="https://images.unsplash.com/photo-1443453489887-98f56bc5bb38?ixlib=rb-0.3.5&amp;s=13ea309e96c29da90ee6453003ba8408&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80"
                                            alt="Card image" />
                                        <div
                                            className="card-img-overlay p-1 d-flex  flex-column  align-items-baseline justify-content-center ">

                                            <div className="container-fluid  h-50  text-center">
                                                <div className="row h-100 align-items-center">
                                                    <div className="col-12 cardwh">
                                                        <h2 className="text-white  mt-3 mb-3">Why do i travel?
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-5 pb-5">

                <div className="container">
                    <div className="row row-cols-md-2">
                        <div className="col-md-8">
                            <h1 className="mb-2">All Travel Blogs
                            </h1>
                        </div>
                        <div className="col-md-4 d-flex justify-content-end mb-2">
                            <input type="search" className="form-control   rounded-0 rounded-start" placeholder="Blog title" />
                            <input type="button" value="Search" className="btn btn-primary rounded-0 rounded-end " />
                        </div>
                    </div>

                    <div className="row mt-2 blog-all-card">
                        <div className="col-md-7">
                            <a href="#">
                                <div className="card blog-card p-0   w-100 h-75 text-light shadow-lg position-relative border-0 ">
                                    <img className="card-img h-100 w-100"
                                        src="./IMAGES/destination.jpg"
                                        alt="Card image" />
                                    <div className="card-img-overlay  p-1 p-md-3    ">
                                        <div className="position-relative  w-100 h-25  d-flex">
                                            <div className="container-fluid align-self-start   mt-2 mb-2">
                                                <div className="row">
                                                    <div className="col-7 col-md-5">
                                                        <h6 className=" text-white  "><span className="btn btn-outline-success fw-bolder border-2">Travel</span></h6>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="position-relative card-content-title  w-100 h-100  d-flex">
                                            <div className="container-fluid align-self-center mt-5 mb-2">
                                                <div className="row h-100 align-items-center">
                                                    <div className="col-12">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="position-relative  w-100  h-25 d-flex">
                                            <div className="container-fluid p-0 m-0 align-self-end  mt-5 mb-2">
                                                <div className="row">
                                                    <div className="col-md-7 col-7">
                                                        <div className=" pt-0 d-inline-block">
                                                            <div className="userName text-start"><img src="./IMAGES/usericon.png"
                                                                className="img-fluid rounded-circle usericon" alt="usericon" />Name</div>
                                                            <div className="viewsanddate d-flex"><span className="views me-3">18k
                                                                views</span><span className="date">12date</span></div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-5">
                            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime hic praesentium harum vero quidem expedita suscipit qui! Doloremque expedita ipsam non cumque dolor eligendi iure nemo voluptas? Consequuntur, beatae blanditiis!</p>
                            <a className="btn btn-primary" href="#">Read Blog</a>
                        </div>

                    </div>
                    <hr />



                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">»</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row mb-2">
                        <h1>Recent Posts</h1>
                        <div className="col-md-6">
                            <div className="card shadow flex-md-row mb-4 box-shadow h-md-250">
                                <div className="card-body d-flex flex-column align-items-start">
                                    <h4 className="mb-2 fw-normal">
                                        <a className="text-dark" href="#">Lorem Ipsum is simply dummy text
                                            of the printing</a>
                                    </h4>
                                    <a href="#">Continue reading</a>
                                </div>
                                <img className="card-img-right flex-auto d-none d-md-block" alt="Thumbnail [200x250]"
                                    src="https://images.unsplash.com/photo-1517216015940-049a2d4e2da4?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=14035a7d76df29c4697de036fcd005ce"
                                    data-holder-rendered="true" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card shadow flex-md-row mb-4 box-shadow h-md-250">
                                <div className="card-body d-flex flex-column align-items-start">
                                    <h4 className="mb-2 fw-normal ">
                                        <a className="text-dark" href="#">Lorem Ipsum is simply dummy
                                            text</a>
                                    </h4>
                                    <a href="#">Continue reading</a>
                                </div>
                                <img className="card-img-right flex-auto d-none d-md-block" alt="Thumbnail [200x250]"
                                    src="https://images.unsplash.com/photo-1517216015940-049a2d4e2da4?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=14035a7d76df29c4697de036fcd005ce"
                                    data-holder-rendered="true" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-3 pb-3">

                <div className="container">

                    <div className="row row-grid">
                        <h1>Gallery</h1>
                        <div className="col-xs-6 col-md-3 my-1">
                            <figure className="figure">
                                <img src=" https://dummyimage.com/300x300/5fa9f8/ffffff"
                                    className="figure-img img-fluid rounded"
                                    alt="A generic square placeholder image with rounded corners in a figure." />
                                <figcaption className="figure-caption">A caption for the above image.
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-xs-6 col-md-3 my-1">
                            <figure className="figure">
                                <img src=" https://dummyimage.com/300x300/5fa9f8/ffffff"
                                    className="figure-img img-fluid rounded"
                                    alt="A generic square placeholder image with rounded corners in a figure." />
                                <figcaption className="figure-caption">A caption for the above image.
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-xs-6 col-md-3 my-1">
                            <figure className="figure">
                                <img src=" https://dummyimage.com/300x300/5fa9f8/ffffff"
                                    className="figure-img img-fluid rounded"
                                    alt="A generic square placeholder image with rounded corners in a figure." />
                                <figcaption className="figure-caption">A caption for the above image.
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-xs-6 col-md-3 my-1">
                            <figure className="figure">
                                <img src=" https://dummyimage.com/300x300/5fa9f8/ffffff"
                                    className="figure-img img-fluid rounded"
                                    alt="A generic square placeholder image with rounded corners in a figure." />
                                <figcaption className="figure-caption">A caption for the above image.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-1" className="pt-2 pb-1">
                <div className="container">
                    <div className="row">
                        <h1>Popular Destinations</h1>
                        <a className="card p-2 col-md-4  text-light  border-light " data-toggle="modal"
                            data-target=".bd-example-modal-lg">
                            <img className="card-img h-100 shadow"
                                src="https://images.unsplash.com/photo-1517659649778-bae24b8c2e26?ixlib=rb-0.3.5&amp;s=6c3524e0ea8d0107f85384392d779467&amp;auto=format&amp;fit=crop&amp;w=666&amp;q=80"
                                alt="Card image" />
                            <div
                                className="card-img-overlay p-1 d-flex  flex-column  align-items-baseline justify-content-center ">
                                <div className="container-fluid h-25">
                                    <div className="row h-100 align-items-center">
                                        <div className="col-6">
                                            <h5 className="text-white mt-2 mb-2">1</h5>
                                        </div>
                                        <div className="col-6 text-end">
                                            <h5 className="  mt-2 mb-2 text-white">+24c</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-fluid  h-50  text-center">
                                    <div className="row h-100 align-items-center">
                                        <div className="col-12">
                                            <h2 className="text-white  mt-3 mb-3">Barcelona
                                                <small> Spain</small>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-fluid h-25  ">
                                    <div className="row h-100 align-items-center">
                                        <div className="col-6">
                                            <i className="fa fa-cloud fa-lg" aria-hidden="true"></i>
                                        </div>
                                        <div className="col-6 text-end">
                                            <h5 className="  mt-2 mb-2 text-white">$2,240</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a className="card p-2 col-md-4  text-light  border-light " data-toggle="modal"
                            data-target=".bd-example-modal-lg">
                            <img className="card-img h-100 shadow"
                                src="https://images.unsplash.com/photo-1443453489887-98f56bc5bb38?ixlib=rb-0.3.5&amp;s=13ea309e96c29da90ee6453003ba8408&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80"
                                alt="Card image" />
                            <div
                                className="card-img-overlay p-1 d-flex  flex-column  align-items-baseline justify-content-center ">
                                <div className="container-fluid h-25">
                                    <div className="row h-100 align-items-center">
                                        <div className="col-6">
                                            <h5 className="text-white mt-2 mb-2">2</h5>
                                        </div>
                                        <div className="col-6 text-end">
                                            <h5 className="  mt-2 mb-2 text-white">+24c</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-fluid  h-50  text-center">
                                    <div className="row h-100 align-items-center">
                                        <div className="col-12">
                                            <h2 className="text-white  mt-3 mb-3">New York
                                                <small>United States</small>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-fluid h-25  ">
                                    <div className="row h-100 align-items-center">
                                        <div className="col-6">
                                            <i className="fa fa-cloud fa-lg" aria-hidden="true"></i>
                                        </div>
                                        <div className="col-6 text-end">
                                            <h5 className="  mt-2 mb-2 text-white">$2,240</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a className="card p-2 col-md-4  text-light  border-light " data-toggle="modal"
                            data-target=".bd-example-modal-lg">
                            <img className="card-img h-100 shadow"
                                src="https://images.unsplash.com/photo-1517659649778-bae24b8c2e26?ixlib=rb-0.3.5&amp;s=6c3524e0ea8d0107f85384392d779467&amp;auto=format&amp;fit=crop&amp;w=666&amp;q=80"
                                alt="Card image" />
                            <div
                                className="card-img-overlay p-1 d-flex  flex-column  align-items-baseline justify-content-center ">
                                <div className="container-fluid h-25">
                                    <div className="row h-100 align-items-center">
                                        <div className="col-6">
                                            <h5 className="text-white mt-2 mb-2">1</h5>
                                        </div>
                                        <div className="col-6 text-end">
                                            <h5 className="  mt-2 mb-2 text-white">+24c</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-fluid  h-50  text-center">
                                    <div className="row h-100 align-items-center">
                                        <div className="col-12">
                                            <h2 className="text-white  mt-3 mb-3">Barcelona
                                                <small> Spain</small>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-fluid h-25  ">
                                    <div className="row h-100 align-items-center">
                                        <div className="col-6">
                                            <i className="fa fa-cloud fa-lg" aria-hidden="true"></i>
                                        </div>
                                        <div className="col-6 text-end">
                                            <h5 className="  mt-2 mb-2 text-white">$2,240</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
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
    )
}

export default Blogmain;
