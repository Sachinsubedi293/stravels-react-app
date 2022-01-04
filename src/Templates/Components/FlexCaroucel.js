import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const FlexCaroucel = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 4// optional, default to 1.
        }
    };
    return (
        <>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                arrows={false}
                additionalTransfrom={true}
                customTransition="all 0.5s linear"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div><div className="col-container">
                    <div className="icon"><i className="fa fa-globe fa-2x" aria-hidden="true"></i></div>
                    <div className="comment">Expert Travel Advice</div>
                    <div className="info"><i className="fa fa-info-circle" aria-hidden="true"></i></div>
                </div></div>
                <div><div className="col-container">
                    <div className="icon"><i className="fa fa-calendar fa-2x" aria-hidden="true"></i></div>
                    <div className="comment">21 Day No-fee flexibility</div>
                    <div className="info"><i className="fa fa-info-circle" aria-hidden="true"></i></div>
                </div></div>
                <div><div className="col-container">
                    <div className="icon"><i className="fa fa-dollar fa-2x" aria-hidden="true"></i></div>
                    <div className="comment">Refund Guarantee</div>
                    <div className="info"><i className="fa fa-info-circle" aria-hidden="true"></i></div>
                </div></div>
                <div>
                    <div className="col-container">
                        <div className="icon">
                            <i className="fa fa-star fa-2x " aria-hidden="true"></i>
                        </div>
                        <div className="comment">Trustpilot Reviews</div>
                        <div className="info"><i className="fa fa-info-circle" aria-hidden="true"></i></div>
                    </div>
                </div>
            </Carousel>
        </>
    )
}

export default FlexCaroucel;
