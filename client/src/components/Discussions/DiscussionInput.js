import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addDiscussion } from '../../actions/discussionActions';

class DiscussionInput extends Component {

    state = {
        text: ''
      }
      
    handleChange = event => {
        this.setState({
            text: event.target.value
        })
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.addDiscussion(this.state);
        this.setState({
            text: ''
        })
        this.props.history.push('/')
    }

    render() {
        return (
        <div>
            <div>
                <h1>Start a New Discussion</h1>
            </div>
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

const mapDispatchToProps = dispatch => ({
    addDiscussion: discussion => dispatch(addDiscussion(discussion)),
})
  
export default withRouter(connect(null, mapDispatchToProps)(DiscussionInput));

