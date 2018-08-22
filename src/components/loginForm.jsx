import React, { Component } from 'react';

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

    // handleChange = e => {
    //     const account = {...this.state.account};
    //     account[e.currentTarget.name] = e.currentTarget.value;
    //     this.setState({ account });
    // }

    handleChange = ({ currentTarget: input }) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account });
    }

    render() {
        const { account } = this.state;

        return ( 
            <div>
                <h1>Log in</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                        onChange={this.handleChange}
                        value={account.username}
                        ref={this.username}
                        id="username"
                        type="text"
                        name="username"
                        className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Username:</label>
                        <input
                        onChange={this.handleChange}
                        ref={this.password}
                        value={account.password}
                        name="password"
                        id="password"
                        type="text"
                        className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;