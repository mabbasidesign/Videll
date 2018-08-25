import React, { Component } from 'react';
import Input from "../common/input";
import joi from 'joi-browser';

class LoginForm extends Component {

    state = {
        account: {username: "", password: ""},
        errors: {}
    };

    schema = {
        username: joi.string().required().label("UserName"),
        password: joi.string().required().label("Password"),
    };

    validate = () => {
        const options = { abortErly: false }
        const {error} = joi.validate(this.state.account, this.schema, );

        if(!error) return null;

        const errors = {};
        for(let item of error.details)
            errors[item.path[0]] = item.message;
        return errors;

        // console.log(result);
        // const errors = {};
        // const { account } = this.state;
        // if(account.username.trim() === "" )
        //     errors.username = "Username is required";
        // if(account.password.trim() === "")
        //     errors.password = "Password is required";

        // return Object.keys(errors).length === 0 ? null: errors;
    };

    username = React.createRef();

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        console.log(errors);
        this.setState({ errors: errors || {} });
        if(errors) return;

        console.log("submitted");
    }
    
    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const {error} = joi.validate(obj, schema);
        return error ? error.details[0].message: null;

        // if(name === "username"){
        //     if(value.trim() === '') return "username is required";
        // }
        // if(name === "password"){
        //     if(value.trim() === '') return "password is required";
        // }
    }

    // handleChange = e => {
    //     const account = {...this.state.account};
    //     account[e.currentTarget.name] = e.currentTarget.value;
    //     this.setState({ account });
    // }

    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
            else delete errors[input.name];
        
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account, errors });
    }

    render() {
        const { account,errors } = this.state;

        return ( 
            <div>
                <h1>Log in</h1>
                <form onSubmit={this.handleSubmit}>
                <Input
                    name="username"
                    value={account.username}
                    label="Username"
                    onChange={this.handleChange}
                    error={errors.username}
                />
                 <Input
                    name="password"
                    value={account.password}
                    label="Password"
                    onChange={this.handleChange}
                    error={errors.password}
                />
                    <button disabled={this.validate()} type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;