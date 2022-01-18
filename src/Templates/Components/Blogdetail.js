import React from 'react'

const Blogdetail = () => {
    return (
        <div>
            <section class="main original-blog">
                <div class="image-original-blog">
                    <img src="./IMAGES/destination.jpg" class="img-fluid position-fixed detail-blog-image" alt="" />
                </div>
                <main role="main" class="container article-main-content">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="col-inner">
                                <div class="article-meta">
                                    <small data-toggle="tooltip" data-placement="top" title="" data-original-title="Views">
                                        <i class="fa fa-eye" aria-hidden="true"></i> 161 Hits
                                    </small>
                                    <small data-toggle="tooltip" data-placement="top" title="" data-original-title="Author">
                                        <i class="fa fa-user" aria-hidden="true"></i> Sachin Subedi
                                    </small>
                                    <small data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Published on">
                                        <i class="far fa-clock"></i> Jan 2, 2022, 5:03 PM
                                    </small>
                                </div>
                                <h1 class="article-title">Create New React App in React js in Windows</h1>
                                <div class="d-inline-flex mb-3" >
                                    <form method="post" >
                                        <button type="submit" class="btn btn-dark btn-sm me-2 mr-1">
                                            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> Liked
                                        </button>
                                    </form>
                                    <form method="post" >
                                        <button type="submit" class="btn btn-dark btn-sm me-2 active mr-1">
                                            <i class="fa fa-bookmark-o" aria-hidden="true"></i> Bookmarked
                                        </button>
                                    </form>
                                    <button type="button" class="article-share-button btn btn-dark btn-sm">
                                        <i class="fa fa-share" aria-hidden="true"></i> Share
                                    </button>
                                </div>
                                <div id="main-content" class="article-content dont-break-out">



                                </div>
                                <div class="article-tags">
                                    <span class="badge badge-secondary">Explore more about</span>
                                </div>

                                <div class="article-comments mb-3">
                                    <div class="block-header">
                                        <div class="block-title"><span>Comments</span></div>
                                    </div>
                                    <div>
                                        <h4>Add comment</h4>
                                        <form method="post">

                                            <div class="form-group">
                                                <textarea required="" name="content" class="form-control"
                                                    placeholder="Content"></textarea>
                                            </div>
                                            <input type="submit" class="btn btn-primary mt-2" value="Submit" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4  ">
                            <div class="col-inner  sticky-top-blog">
                                <div class="widget mt-5">
                                    <div class="block-header">
                                        <div class="block-title"><span>About Author</span></div>
                                    </div>
                                    <div class="block-content">
                                        <div class="author-info">
                                            <div class="author-image">
                                                <img alt="Sachin Subedi" loading="lazy"
                                                    src="//2.gravatar.com/avatar/ee06781b6e6b71062fd15ebb404df765?s=150&amp;amp;d=mm&amp;amp;r=g"
                                                    width="100" height="100" />
                                            </div>
                                            <div class="author-connect">
                                                <div class="author-name">
                                                    <a href="https://getpaidguru.com/author/Sachin">Sachin Subedi</a>
                                                </div>
                                                <div class="follow-me">
                                                </div>
                                                <div class="author-follow">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="author-description">
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget newsletter ">
                                    <div class="block-header">
                                        <div class="block-title"><span>Join Our Newsletter</span></div>
                                    </div>
                                    <div class="block-content">
                                        <p>Subscribe our newsletter to stay updated.</p>
                                        <form method="post"
                                            class="newsletter-subscribe">

                                            <div class="form-group">
                                                <input type="email" name="email" placeholder="mail@example.com"
                                                    class="form-control" required="" />
                                            </div>
                                            <div class="form-group">
                                                <input type="submit" class="btn btn-primary mt-2" value="Subscribe" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>

            <section class="background-blog pt-5 pb-0">
                <section class="pt-5 pb-5">
                    <div class="container">
                        <div class="row mb-2">
                            <div class="col-md-6">
                                <div class="card shadow flex-md-row mb-4  h-md-250">
                                    <div class="card-body d-flex flex-column align-items-start">
                                        <strong class="d-inline-block mb-2 text-primary">World</strong>
                                        <h3 class="mb-0">
                                            <a href="#">Featured post</a>
                                        </h3>
                                        <div class="mb-1 text-muted">Nov 12</div>
                                        <p class="card-text mb-auto">This is a wider card with
                                            supporting text below as a natural lead-in to additional
                                            content.</p>
                                        <a href="#">Continue reading</a>
                                    </div>
                                    <img class="card-img-right flex-auto d-none d-md-block image-thumbnail" data-src="holder.js/200x250?theme=thumb"
                                        alt="Thumbnail [200x250]" src=" https://dummyimage.com/200x250/ccc/efefef"
                                        data-holder-rendered="true" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card shadow flex-md-row mb-4  h-md-250">
                                    <div class="card-body d-flex flex-column align-items-start">
                                        <strong class="d-inline-block mb-2 text-success">Design</strong>
                                        <h3 class="mb-0">
                                            <a href="#">Post title</a>
                                        </h3>
                                        <div class="mb-1 text-muted">Nov 11</div>
                                        <p class="card-text mb-auto">This is a wider card with
                                            supporting text below as a natural lead-in to additional
                                            content.</p>
                                        <a href="#">Continue reading</a>
                                    </div>
                                    <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb"
                                        alt="Thumbnail [200x250]" src=" https://dummyimage.com/200x250/ccc/efefef"
                                        data-holder-rendered="true" />
                                </div>
                            </div>
                        </div>
                    </div>
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
            </section>

        </div>
    )
}

export default Blogdetail;
