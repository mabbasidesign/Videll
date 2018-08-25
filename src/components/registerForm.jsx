import React, { Component } from 'react';
import Form from "../common/form";
import joi from 'joi-browser';

class RegisterForm extends Form {
    
    state = {
        data: {username: "", password: "", name: ""},
        errors: {}
    };

    schema = {
        username: joi.string().required().email().label("UserName"),
        password: joi.string().required().min(5).label("Password"),
        name: joi.string().required().label("Name")
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
                    {this.renderInput("name", "Name")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}
 
export default RegisterForm;