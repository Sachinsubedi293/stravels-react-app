import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Templates/Components/Login';
import Register from '../Templates/Components/Register';
import Destinations from '../Templates/Destinations';
import Detail from '../Templates/Detail';
import Homepage from '../Templates/Homepage';
import '../Templates/Static/CSS/mainstyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from '../Templates/Blog';
import BlogDetail from '../Templates/BlogDetail';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Homepage />}></Route>
                <Route path="/destinations" element={<Destinations />}></Route>
                <Route path="/detail/:slug" element={<Detail />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/blogs" element={<Blog />}></Route>
                <Route path="/blogdetails/:slug" element={<BlogDetail />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
