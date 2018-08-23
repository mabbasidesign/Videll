import React, { Component } from 'react';
import Input from "../common/input";

class LoginForm extends Component {

    state = {
        account: {username: "", password: ""},
    };

    username = React.createRef();

    componentDidMount(){
        this.username.current.focus();
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("submitted")

        const username = this.username.current.value;
    }

    handleChange = e => {
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account });
    }

    // handleChange = ({ currentTarget: input }) => {
    //     const account = {...this.state.account};
    //     account[input.name] = input.value;
    //     this.setState({ account });
    // }

    render() {
        const { account } = this.state;

        return ( 
            <div>
                <h1>Log in</h1>
                <form onSubmit={this.handleSubmit}>

                <Input
                    name="username"
                    value={account.username}
                    label="Username"
                    onChange={this.handleChange}
                />

                 <Input
                    name="password"
                    value={account.password}
                    label="Password"
                    onChange={this.handleChange}
                />
                    
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;