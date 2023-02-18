import React, { Component } from 'react';
import Base from './base';
import $ from 'jquery';

class Register extends Component {
    state = { 
        error_massage: "",
        username: "",
        password: "",
        password_confirm: "",
    } 

    handleClick = e => {
        e.preventDefault();
        if (this.state.username === "") {
            this.setState({error_massage: "用户名不能为空！"});
        } else if (this.state.password === "") {
            this.setState({error_massage: "密码不能为空！"});
        } else if (this.state.password_confirm === "") {
            this.setState({error_massage: "确认密码不能为空！"});
        } else if (this.state.password_confirm !== this.state.password) {
            this.setState({error_massage: "两次输入的密码不一致！"});
        } else {
            $.ajax({
                url: "https://app4075.acapp.acwing.com.cn/calculator/register/",
                type: "get",
                data: {
                    username: this.state.username,
                    password: this.state.password,
                    password_confirm: this.state.password_confirm,
                },
                dataType: "json",
                success: resp => {
                    console.log(resp);
                    if (resp.result === "success") {
                        window.location.replace("/calculator");
                    } else {
                        this.setState({error_massage: resp.result});
                    }
                }
            });
        }
    };

    render() { 
        return (
            <React.Fragment>
                <Base>
                <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col col-lg-3">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">用户名</label>
                                        <input onChange={e => {this.setState({username: e.target.value})}} type="text" className="form-control" id="username" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">密码</label>
                                        <input onChange={e => {this.setState({password: e.target.value})}} type="password" className="form-control" id="password" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password_confirm" className="form-label">确认密码</label>
                                        <input onChange={e => {this.setState({password_confirm: e.target.value})}} type="password" className="form-control" id="password_confirm" />
                                    </div>
                                    <div id="emailHelp" className="form-text" style={{color: "red"}}>{this.state.error_massage}</div>
                                    <button onClick={this.handleClick} style={ {width: "100%"} } type="submit" className="btn btn-primary">登录</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Base>
                
            </React.Fragment>
        );
    }
}
 
export default Register;