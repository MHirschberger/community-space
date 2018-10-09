import React, { Component } from 'react';

export default class Login extends Component {

    state = {
        email: '',
        password: '',
        loggedIn: false
    }


    render() {
        return (
            <div className='login-form'>
                <h1>Login to Your Account</h1>
                <form onSubmit={this.handleSubmit}>
                    Email
                    <br></br>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/><br></br>
                    <br></br>
                    Password
                    <br></br> 
                    <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/><br></br>
                    <br></br>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}