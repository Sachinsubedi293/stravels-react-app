import React from 'react'

const Blogmain = () => {
    return (
        <section class="blog">
            <div class="container-fluid image-container-blog p-0 position-relative text-center">
                <img src="./IMAGES/destination.jpg" class=" p-0 main-image-blog " 
                    alt="Main Image"/>
                    <div class="content container text-start position-absolute ">
                        <div class="category">
                            <ul type="none" class="d-flex">
                                <li>Travel</li>
                                <li>Tourism</li>
                            </ul>
                        </div>
                        <div class="title">
                            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                        </div>
                        <div class="userName text-start"><img src="./IMAGES/usericon.png" class="rounded-circle usericon"
                            alt="usericon"/>Name</div>
                        <div class="viewsanddate d-flex"><span class="views me-3">18k views</span><span
                            class="date">12date</span></div>
                    </div>
            </div>
         

            <section class="pt-5 pb-5">
                <div class="container ">
                    <div class="row d-md-flex-row   ">
                        <div class="col-md-5 ms-md-0 col-12   d-flex  ">
                            <div class="card blog-card p-0   w-100 h-100 text-light shadow-lg position-relative border-0 ">
                                <img class="card-img h-100 w-100"
                                    src="https://images.unsplash.com/photo-1522724709546-19901cb1818a?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=97bace733cd75edf9ec8b4a2ef1fad7c"
                                    alt="Card image"/>
                                    <div class="card-img-overlay  p-1 p-md-3    ">
                                        <div class="position-relative  w-100 h-25  d-flex">
                                            <div class="container-fluid align-self-start   mt-2 mb-2">
                                                <div class="row">
                                                    <div class="col-7 col-md-5">
                                                        <h6 class="mt-1 text-white">Travel</h6>
                                                    </div>
                                                    <div class="col-md-7 col-5 text-right">
                                                        <div class="row align-items-center">
                                                            <div class="col-12 align-self-center">
                                                                <hr class="border border-border-light mt-3"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="position-relative card-content-title  w-100 h-100  d-flex">
                                            <div class="container-fluid align-self-center mt-5 mb-2">
                                                <div class="row h-100 align-items-center">
                                                    <div class="col-12">
                                                        <h2 class="text-end pt-md-2 pt-sm-4 text-white">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="position-relative  w-100  h-25 d-flex">
                                            <div class="container-fluid p-0 m-0 align-self-end  mt-5 mb-2">
                                                <div class="row">
                                                    <div class="col-md-7 col-7">
                                                        <div class=" pt-0 d-inline-block">
                                                            <div class="userName text-start"><img src="./IMAGES/usericon.png"
                                                                class="img-fluid rounded-circle usericon" alt="usericon"/>Name</div>
                                                            <div class="viewsanddate d-flex"><span class="views me-3">18k
                                                                views</span><span class="date">12date</span></div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-7 h-100">
                            <div class="container-fluid w-100">
                                <div class="row">
                                    <div class="col col-12 text-center text-md-start">
                                        <h2 class="pt-4 pt-md-0">Need any help about travel?</h2>

                                    </div>
                                </div>
                                <div class="row mt-2 align-content-center">
                                    <a class="card p-2 col-md-6  no-gutters text-light  border-light " data-toggle="modal"
                                        data-target=".bd-example-modal-lg">
                                        <img class="card-img h-100 shadow"
                                            src="https://images.unsplash.com/photo-1517659649778-bae24b8c2e26?ixlib=rb-0.3.5&amp;s=6c3524e0ea8d0107f85384392d779467&amp;auto=format&amp;fit=crop&amp;w=666&amp;q=80"
                                            alt="Card image"/>
                                            <div
                                                class="card-img-overlay p-1 d-flex  flex-column  align-items-baseline justify-content-center ">

                                                <div class="container-fluid  h-50  text-center">
                                                    <div class="row h-100 align-items-center">
                                                        <div class="col-12 cardwh">
                                                            <h2 class="text-white  mt-3 mb-3">How can i travel?
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                    </a>
                                    <a class="card p-2 col-md-6  no-gutters text-light  border-light" data-toggle="modal"
                                        data-target=".bd-example-modal-lg">
                                        <img class="card-img h-100 shadow"
                                            src="https://images.unsplash.com/photo-1443453489887-98f56bc5bb38?ixlib=rb-0.3.5&amp;s=13ea309e96c29da90ee6453003ba8408&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80"
                                            alt="Card image"/>
                                            <div
                                                class="card-img-overlay p-1 d-flex  flex-column  align-items-baseline justify-content-center ">

                                                <div class="container-fluid  h-50  text-center">
                                                    <div class="row h-100 align-items-center">
                                                        <div class="col-12 cardwh">
                                                            <h2 class="text-white  mt-3 mb-3">Where can i travel?
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                    </a>
                                    <a class="card p-2 col-md-6  no-gutters text-light  border-light" data-toggle="modal"
                                        data-target=".bd-example-modal-lg">
                                        <img class="card-img h-100 shadow"
                                            src="https://images.unsplash.com/photo-1517659649778-bae24b8c2e26?ixlib=rb-0.3.5&amp;s=6c3524e0ea8d0107f85384392d779467&amp;auto=format&amp;fit=crop&amp;w=666&amp;q=80"
                                            alt="Card image"/>
                                            <div
                                                class="card-img-overlay p-1 d-flex  flex-column  align-items-baseline justify-content-center ">

                                                <div class="container-fluid  h-50  text-center">
                                                    <div class="row h-100 align-items-center">
                                                        <div class="col-12 cardwh">
                                                            <h2 class="text-white  mt-3 mb-3">Travel tips
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                    </a>
                                    <a class="card p-2 col-md-6  no-gutters text-light  border-light" data-toggle="modal"
                                        data-target=".bd-example-modal-lg">
                                        <img class="card-img h-100 shadow"
                                            src="https://images.unsplash.com/photo-1443453489887-98f56bc5bb38?ixlib=rb-0.3.5&amp;s=13ea309e96c29da90ee6453003ba8408&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80"
                                            alt="Card image"/>
                                            <div
                                                class="card-img-overlay p-1 d-flex  flex-column  align-items-baseline justify-content-center ">

                                                <div class="container-fluid  h-50  text-center">
                                                    <div class="row h-100 align-items-center">
                                                        <div class="col-12 cardwh">
                                                            <h2 class="text-white  mt-3 mb-3">Why do i travel?
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
            <section class="pt-5 pb-5">

                <div class="container">
                    <div class="row row-cols-md-2">
                        <div class="col-md-8">
                            <h1 class="mb-2">All Travel Blogs
                            </h1>
                        </div>
                        <div class="col-md-4 d-flex justify-content-end mb-2">
                            <input type="search" class="form-control   rounded-0 rounded-start" placeholder="Blog title" />
                            <input type="button" value="Search" class="btn btn-primary rounded-0 rounded-end "/>
                        </div>
                    </div>

                    <div class="row mt-2 blog-all-card">
                        <div class="col-md-7">
                            <a href="#">
                                <div class="card blog-card p-0   w-100 h-75 text-light shadow-lg position-relative border-0 ">
                                    <img class="card-img h-100 w-100"
                                        src="./IMAGES/destination.jpg"
                                        alt="Card image"/>
                                        <div class="card-img-overlay  p-1 p-md-3    ">
                                            <div class="position-relative  w-100 h-25  d-flex">
                                                <div class="container-fluid align-self-start   mt-2 mb-2">
                                                    <div class="row">
                                                        <div class="col-7 col-md-5">
                                                            <h6 class=" text-white  "><span class="btn btn-outline-success fw-bolder border-2">Travel</span></h6>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="position-relative card-content-title  w-100 h-100  d-flex">
                                                <div class="container-fluid align-self-center mt-5 mb-2">
                                                    <div class="row h-100 align-items-center">
                                                        <div class="col-12">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="position-relative  w-100  h-25 d-flex">
                                                <div class="container-fluid p-0 m-0 align-self-end  mt-5 mb-2">
                                                    <div class="row">
                                                        <div class="col-md-7 col-7">
                                                            <div class=" pt-0 d-inline-block">
                                                                <div class="userName text-start"><img src="./IMAGES/usericon.png"
                                                                    class="img-fluid rounded-circle usericon" alt="usericon"/>Name</div>
                                                                <div class="viewsanddate d-flex"><span class="views me-3">18k
                                                                    views</span><span class="date">12date</span></div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-5">
                            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime hic praesentium harum vero quidem expedita suscipit qui! Doloremque expedita ipsam non cumque dolor eligendi iure nemo voluptas? Consequuntur, beatae blanditiis!</p>
                            <a class="btn btn-primary" href="#">Read Blog</a>
                        </div>

                    </div>
                    <hr/>



                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">«</span>
                                    <span class="sr-only">Previous</span>
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">1</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">2</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">3</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">»</span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                </div>
            </section>
            <section class="pt-5 pb-5">
                <div class="container">
                    <div class="row mb-2">
                        <h1>Recent Posts</h1>
                        <div class="col-md-6">
                            <div class="card shadow flex-md-row mb-4 box-shadow h-md-250">
                                <div class="card-body d-flex flex-column align-items-start">
                                    <h4 class="mb-2 fw-normal">
                                        <a class="text-dark" href="#">Lorem Ipsum is simply dummy text
                                            of the printing</a>
                                    </h4>
                                    <a href="#">Continue reading</a>
                                </div>
                                <img class="card-img-right flex-auto d-none d-md-block" alt="Thumbnail [200x250]"
                                    src="https://images.unsplash.com/photo-1517216015940-049a2d4e2da4?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=14035a7d76df29c4697de036fcd005ce"
                                    data-holder-rendered="true" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card shadow flex-md-row mb-4 box-shadow h-md-250">
                                <div class="card-body d-flex flex-column align-items-start">
                                    <h4 class="mb-2 fw-normal ">
                                        <a class="text-dark" href="#">Lorem Ipsum is simply dummy
                                            text</a>
                                    </h4>
                                    <a href="#">Continue reading</a>
                                </div>
                                <img class="card-img-right flex-auto d-none d-md-block" alt="Thumbnail [200x250]"
                                    src="https://images.unsplash.com/photo-1517216015940-049a2d4e2da4?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=14035a7d76df29c4697de036fcd005ce"
                                    data-holder-rendered="true" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="pt-3 pb-3">

                <div class="container">

                    <div class="row row-grid">
                        <h1>Gallery</h1>
                        <div class="col-xs-6 col-md-3 my-1">
                            <figure class="figure">
                                <img src=" https://dummyimage.com/300x300/5fa9f8/ffffff"
                                    class="figure-img img-fluid rounded"
                                    alt="A generic square placeholder image with rounded corners in a figure."/>
                                    <figcaption class="figure-caption">A caption for the above image.
                                    </figcaption>
                            </figure>
                        </div>
                        <div class="col-xs-6 col-md-3 my-1">
                            <figure class="figure">
                                <img src=" https://dummyimage.com/300x300/5fa9f8/ffffff"
                                    class="figure-img img-fluid rounded"
                                    alt="A generic square placeholder image with rounded corners in a figure."/>
                                    <figcaption class="figure-caption">A caption for the above image.
                                    </figcaption>
                            </figure>
                        </div>
                        <div class="col-xs-6 col-md-3 my-1">
                            <figure class="figure">
                                <img src=" https://dummyimage.com/300x300/5fa9f8/ffffff"
                                    class="figure-img img-fluid rounded"
                                    alt="A generic square placeholder image with rounded corners in a figure."/>
                                    <figcaption class="figure-caption">A caption for the above image.
                                    </figcaption>
                            </figure>
                        </div>
                        <div class="col-xs-6 col-md-3 my-1">
                            <figure class="figure">
                                <img src=" https://dummyimage.com/300x300/5fa9f8/ffffff"
                                    class="figure-img img-fluid rounded"
                                    alt="A generic square placeholder image with rounded corners in a figure."/>
                                    <figcaption class="figure-caption">A caption for the above image.
                                    </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-1" class="pt-2 pb-1">
                <div class="container">
                    <div class="row">
                        <h1>Popular Destinations</h1>
                        <a class="card p-2 col-md-4  text-light  border-light " data-toggle="modal"
                            data-target=".bd-example-modal-lg">
                            <img class="card-img h-100 shadow"
                                src="https://images.unsplash.com/photo-1517659649778-bae24b8c2e26?ixlib=rb-0.3.5&amp;s=6c3524e0ea8d0107f85384392d779467&amp;auto=format&amp;fit=crop&amp;w=666&amp;q=80"
                                alt="Card image"/>
                                <div
                                    class="card-img-overlay p-1 d-flex  flex-column  align-items-baseline justify-content-center ">
                                    <div class="container-fluid h-25">
                                        <div class="row h-100 align-items-center">
                                            <div class="col-6">
                                                <h5 class="text-white mt-2 mb-2">1</h5>
                                            </div>
                                            <div class="col-6 text-end">
                                                <h5 class="  mt-2 mb-2 text-white">+24c</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container-fluid  h-50  text-center">
                                        <div class="row h-100 align-items-center">
                                            <div class="col-12">
                                                <h2 class="text-white  mt-3 mb-3">Barcelona
                                                    <small> Spain</small>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container-fluid h-25  ">
                                        <div class="row h-100 align-items-center">
                                            <div class="col-6">
                                                <i class="fa fa-cloud fa-lg" aria-hidden="true"></i>
                                            </div>
                                            <div class="col-6 text-end">
                                                <h5 class="  mt-2 mb-2 text-white">$2,240</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </a>
                        <a class="card p-2 col-md-4  text-light  border-light " data-toggle="modal"
                            data-target=".bd-example-modal-lg">
                            <img class="card-img h-100 shadow"
                                src="https://images.unsplash.com/photo-1443453489887-98f56bc5bb38?ixlib=rb-0.3.5&amp;s=13ea309e96c29da90ee6453003ba8408&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80"
                                alt="Card image"/>
                                <div
                                    class="card-img-overlay p-1 d-flex  flex-column  align-items-baseline justify-content-center ">
                                    <div class="container-fluid h-25">
                                        <div class="row h-100 align-items-center">
                                            <div class="col-6">
                                                <h5 class="text-white mt-2 mb-2">2</h5>
                                            </div>
                                            <div class="col-6 text-end">
                                                <h5 class="  mt-2 mb-2 text-white">+24c</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container-fluid  h-50  text-center">
                                        <div class="row h-100 align-items-center">
                                            <div class="col-12">
                                                <h2 class="text-white  mt-3 mb-3">New York
                                                    <small>United States</small>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container-fluid h-25  ">
                                        <div class="row h-100 align-items-center">
                                            <div class="col-6">
                                                <i class="fa fa-cloud fa-lg" aria-hidden="true"></i>
                                            </div>
                                            <div class="col-6 text-end">
                                                <h5 class="  mt-2 mb-2 text-white">$2,240</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </a>
                        <a class="card p-2 col-md-4  text-light  border-light " data-toggle="modal"
                            data-target=".bd-example-modal-lg">
                            <img class="card-img h-100 shadow"
                                src="https://images.unsplash.com/photo-1517659649778-bae24b8c2e26?ixlib=rb-0.3.5&amp;s=6c3524e0ea8d0107f85384392d779467&amp;auto=format&amp;fit=crop&amp;w=666&amp;q=80"
                                alt="Card image"/>
                                <div
                                    class="card-img-overlay p-1 d-flex  flex-column  align-items-baseline justify-content-center ">
                                    <div class="container-fluid h-25">
                                        <div class="row h-100 align-items-center">
                                            <div class="col-6">
                                                <h5 class="text-white mt-2 mb-2">1</h5>
                                            </div>
                                            <div class="col-6 text-end">
                                                <h5 class="  mt-2 mb-2 text-white">+24c</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container-fluid  h-50  text-center">
                                        <div class="row h-100 align-items-center">
                                            <div class="col-12">
                                                <h2 class="text-white  mt-3 mb-3">Barcelona
                                                    <small> Spain</small>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container-fluid h-25  ">
                                        <div class="row h-100 align-items-center">
                                            <div class="col-6">
                                                <i class="fa fa-cloud fa-lg" aria-hidden="true"></i>
                                            </div>
                                            <div class="col-6 text-end">
                                                <h5 class="  mt-2 mb-2 text-white">$2,240</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </a>
                    </div>
                </div>
            </section>
            <section class="contact container">
                <div class="row row-cols-md-3">
                    <div class="col-md-4">
                        <div class="contact-item">
                            <h5>Call us on 98407381115</h5>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="contact-item">
                            <h5>Email us</h5>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="contact-item border-0">
                            <h5>Chat with us online</h5>
                        </div>
                    </div>
                </div>
            </section>
            
        </section>
    )
}

export default Blogmain;
