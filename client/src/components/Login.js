import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


class Login extends Component {

    state = {
        email: '',
        password: '',
        loggedIn: false
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = event => {
        event.preventDefault();

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
    errors: state.discussions.errors
})

const mapDispatchToProps = dispatch => ({
    addDiscussion: discussion => dispatch(addDiscussion(discussion)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));