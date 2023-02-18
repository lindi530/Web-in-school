import React, { Component } from 'react';
import Navbar from './navbar';

import {Routes, Route, Navigate} from 'react-router-dom';
import Calculator from './content/calculator';
import Home from './content/home';
import Login from './content/login';
import Register from './content/register';
import NotFound from './content/notFound';

import $ from "jquery";

class Web extends Component {
    state = { 
        is_login: false,
        username: "",
    };

    componentDidMount() {
        $.ajax({
            url: "https://app4075.acapp.acwing.com.cn/calculator/get_status/",
            type: "get",

            success: resp => {
                if (resp.result === "login") {
                    this.setState({
                        is_login: true,
                        username: resp.username,
                    });
                } else {
                    this.setState({
                        is_login: false,
                        username: "",
                    });
                }
            }
        });
    }

    render() { 
        return (
            <React.Fragment>
                <Navbar is_login={this.state.is_login} username={this.state.username} />
                <div className='container'>
                    <Routes>
                        <Route path='/calculator' element={<Home />} />
                        <Route path='/calculator/home' element={<Home />} />
                        <Route path='/calculator/calculator' element={this.state.is_login ? <Calculator /> : <Navigate replace to="/calculator/login" />} />
                        <Route path='/calculator/login' element={this.state.is_login ? <Navigate replace to="/calculator" /> : <Login />} />
                        <Route path='/calculator/register' element={this.state.is_login ? <Navigate replace to="/calculator" /> : <Register />} />
                        <Route path='/calculator/404' element={<NotFound />} />
                        <Route path='*' element={ <Navigate replace to="/calculator/404" />} />
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Web;