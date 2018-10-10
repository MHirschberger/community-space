import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


class Login extends Component {

    state = {
        email: '',
        password: '',
        loggedIn: false,
        error: false
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.createSession(this.state)
        .then(this.checkForErrors.bind(this));
    }

    checkForErrors = () => {
        this.setState({
            text: '',
            error: false
        });
        if (this.props.errors.length > 0) {
            this.setState({
                error: true
            })
        } else {
            this.props.history.push('/')
        }
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

const mapStateToProps = state => ({
    errors: state.sessions.errors
})

const mapDispatchToProps = dispatch => ({
    createSession: credentials => dispatch(createSession(credentials)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));