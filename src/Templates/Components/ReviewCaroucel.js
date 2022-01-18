import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Api } from '../Utils/common';

const ReviewCaroucel = () => {
    const [Rating, setRating] = useState([]);
    const [TravelPlaceInformation, setTravelPlaceInformation] = useState([]);
    const [UserApi, setUserApi] = useState([]);
    useEffect(() => {
        axios.get(Api + `/api/User-Rating/`).then(res => {
            console.log(res.data);
            setRating(res.data);

        }).catch(err => {
            console.error(err);
        })
        axios.get(Api + `/account/user/`).then(res => {
            setUserApi(res.data);
            console.log(res.data);
        }).catch(err => {
            console.error(err);
        })
        axios.get(Api + `/api/travel-place-information/`).then(res => {
            setTravelPlaceInformation(res.data);
            console.log(res.data);
        }).catch(err => {
            console.error(err);
        })
    }, []);

    return (
        <div id="review-caroucel" className="carousel review-carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row row-cols-md-3 container mx-auto">
                        {Rating.slice(0, 3).map(response => (
                            <div className="col" key={response.id}>
                                <figure className="snip1192">
                                    <div className="title">Tour:{TravelPlaceInformation.filter((res) => { return res.id === response.travels_place_information }).map(res => res.travel_place_title)}</div>
                                    <blockquote>
                                        {response.Rating_Description}</blockquote>
                                    <div className="author">
                                        {UserApi.filter((res) => { return res.id === response.user }).map(res => (<span key={res.id}><img src={res.Profile_Image} alt="sq-sample1" />
                                            <h5>{res.first_name + " " + res.last_name}  <span> {response.Rating / 20} <i className="fa fa-star text-warning" aria-hidden="true"></i> Rating </span></h5></span>))}
                                    </div>
                                </figure>
                            </div>))}
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row row-cols-md-3 container  mx-auto">
                        {Rating.slice(3, 6).map(response => (
                            <div className="col" key={response.id}>
                                <figure className="snip1192">
                                    <div className="title">Tour:{TravelPlaceInformation.filter((res) => { return res.id === response.travels_place_information }).map(res => res.travel_place_title)}</div>
                                    <blockquote>
                                        {response.Rating_Description}</blockquote>
                                   <div className="author">
                                        {UserApi.filter((res) => { return res.id === response.user }).map(res => (<span key={res.id}><img src={res.Profile_Image} alt="sq-sample1" />
                                            <h5>{res.first_name + " " + res.last_name}  <span> {response.Rating / 20} <i className="fa fa-star text-warning" aria-hidden="true"></i> Rating </span></h5></span>))}
                                    </div>
                                </figure>
                            </div>))}
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row row-cols-md-3 container mx-auto">
                        {Rating.slice(6, 9).map(response => (
                            <div className="col" key={response.id}>
                                <figure className="snip1192">
                                    <div className="title">Tour:{TravelPlaceInformation.filter((res) => { return res.id === response.travels_place_information }).map(res => res.travel_place_title)}</div>
                                    <blockquote>
                                        {response.Rating_Description}</blockquote>
                                   <div className="author">
                                        {UserApi.filter((res) => { return res.id === response.user }).map(res => (<span key={res.id}><img src={res.Profile_Image} alt="sq-sample1" />
                                            <h5>{res.first_name + " " + res.last_name}  <span> {response.Rating / 20} <i className="fa fa-star text-warning" aria-hidden="true"></i> Rating </span></h5></span>))}
                                    </div>
                                </figure>
                            </div>))}
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#review-caroucel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#review-caroucel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default ReviewCaroucel;
