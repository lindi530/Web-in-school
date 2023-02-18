import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Navbar extends Component {
    state = {  };

    handleClick = () => {
        $.ajax({
            url: "https://app4075.acapp.acwing.com.cn/calculator/logout/",
            type: "get",
            success: resp => {
                if (resp.result === "success") {
                    window.location.replace("/calculator");
                }
            }
        });
    }
    
    render_calculator = () => {
        if (this.props.is_login) {
            return (
                <li className="nav-item">
                    <Link className="nav-link" to='/calculator/calculator'>calculator</Link>
                </li>
            );
        } else {
            return "";
        }
    };

    render_user = () => {
        if (!this.props.is_login) {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to='/calculator/login'>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/calculator/register'>Register</Link>
                    </li>        
                </ul>
            );
        } else {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link">{this.props.username}</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={this.handleClick} className="nav-link" style={{cursor: "pointer"}}>logout</a>
                    </li>
                </ul>
            );
        }
        
    };

    render() { 
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: "#5CAF8C"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/calculator'>Web-calculator</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link" to='/calculator'>Home</Link>
                            </li>
                            {this.render_calculator()}
                        </ul>
                        {this.render_user()}
                    </div>
                </div>
            </nav>
            
        );
    }
}
 
export default Navbar;