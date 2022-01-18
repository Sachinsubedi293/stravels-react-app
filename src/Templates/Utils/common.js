import jwt_decode from "jwt-decode";
import { useState, useEffect } from 'react';
// import { FacebookProvider, LoginButton } from 'react-facebook';
import axios from 'axios';
import Cookies from "universal-cookie/es6";
const cookies = new Cookies();

export const Defaultstate = {
  'name': "",
  'date': "",
  'categoryid': null
}

// export const FacebookLogin = () => {
//   const handleResponse = (data) => {
//     console.log(data);
//   }
//   const handleError = (error) => {
//     this.setState({ error });
//   }
//   return <FacebookProvider appId="382751650286003">
//     <LoginButton
//       scope="email"
//       onCompleted={handleResponse}
//       onError={handleError}
//       className="rounded btn facebook-button d-flex  p-0 align-items-center text-center"
//     >
//       <i className="fa fa-facebook text-primary bg-white rounded  p-3 pt-2 d-flex align-items-center pb-2 h-100 " aria-hidden="true"></i>
//       <span className='btn facebook-button '>Login with Facebook</span>
//     </LoginButton>
//   </FacebookProvider>
// }
export const TravelplaceInformationfilter = (filter) => {
  const [MainApi, setMainApi] = useState([]);
  useEffect(() => {
    axios.get(Api + `/api/travel-place-information/`).then(response => {
      setMainApi(response.data);
    })
      .catch(err => {
        console.error(err);
      })
  }, [filter]);


  return MainApi;
}

export const Darktheme = () => {
  var body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}


// export const Api = "http://192.168.0.110:8888";
export const Api = "http://localhost:8000";
export const Discount = (TotalPrice, discount) => {
  var DiscountedPrice = (discount / 100) * TotalPrice;

  return TotalPrice - DiscountedPrice;
}

export const DecodedToken = (token) => {
  const [UserApi, setUserApi] = useState([]);
  useEffect(() => {
    if (cookies.get("Access_token")) {
      var decoded = jwt_decode(token);
      console.log(decoded);
      axios.get(Api + `/account/user/?id=${decoded.user_id}`, { headers: { "Authorization": cookies.get("Access_token") } }).then(res => {
        setUserApi(res.data);
        console.log(res.data);
      })
    }
  }, [token]);


  return UserApi
};

export const RatingAdd = (rating) => {
  var Added = 0;
  for (let index = 0; index < rating.length; index++) {
    const element = rating[index];
    Added = Added + (element.Rating / 20);
    console.log(Added);
  }
  return Added / rating.length;
}


export const categoryimage = (id)=>{
axios.get(Api+``)
}