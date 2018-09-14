import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addDiscussion } from '../../actions/discussionActions';

class DiscussionInput extends Component {

    state = {
        text: '',
        error: false
      }
      
    handleChange = event => {
        this.setState({
            text: event.target.value
        })
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.addDiscussion(this.state)
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
        <div>
            <div>
                <h1>Start a New Discussion</h1>
            </div>
            {this.state.error ? <ul className='error-messages'><h3>Errors:</h3>{this.props.errors.map(error => <li>{error}</li>)}</ul> : null}
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea name="text" value={this.state.text} onChange={this.handleChange}/><br></br>
                    <input type="submit" />
                </form>
            </div>
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
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DiscussionInput));

