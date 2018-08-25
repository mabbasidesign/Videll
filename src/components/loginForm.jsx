import React, { Component } from 'react';
import Input from "../common/input";
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
    
    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const {error} = joi.validate(obj, schema);
        return error ? error.details[0].message: null;
    }   

    render() {
        const { data,errors } = this.state;

        return ( 
            <div>
                <h1>Log in</h1>
                <form onSubmit={this.handleSubmit}>
                <Input
                    name="username"
                    value={data.username}
                    label="Username"
                    onChange={this.handleChange}
                    error={errors.username}
                />
                 <Input
                    name="password"
                    value={data.password}
                    label="Password"
                    onChange={this.handleChange}
                    error={errors.password}
                />
                </form>
                {this.renderButton("button")};
            </div>
        );
    }
}
 
export default LoginForm;