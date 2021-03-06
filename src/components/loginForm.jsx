import React, { Component } from 'react';
import Form from "../common/form";
import joi from 'joi-browser';

class LoginForm extends Form {

    state = {
        data: {username: "", password: ""},
        errors: {}
    };

    schema = {
        username: joi.string().required().label("UserName"),
        password: joi.string().required().label("Password"),
    };    

    doSubmit = () => {
        // call the server
        console.log("submitted");
    }

    render() {
        return ( 
            <div>
                <h1>Log in</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("button")}
                </form>
            </div>
        );
    }
}
 
export default LoginForm;