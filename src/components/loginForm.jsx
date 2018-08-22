import React, { Component } from 'react';

class LoginForm extends Component {

    handleSubmit = e => {
        e.preventDefault();
        console.log("submitted")
    }

    render() { 
        return (  
            <div>
                <h1>Log in</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input id="username" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Username:</label>
                        <input id="password" type="text" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;