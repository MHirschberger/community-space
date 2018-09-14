import React, { Component } from 'react';

export default class CommentInput extends Component {

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
        this.props.addComment(this.state.text, this.props.discussionId)
        .then(this.checkForErrors.bind(this));
    }

    checkForErrors = () => {
        this.setState({
            text: '',
            error: false
        });
        if (this.props.comments.errors.length > 0) {
            this.setState({
                error: true
            })
        }
    }

    render() {
        return (
        <div>
            <div>
                <p>Add Comment to Discussion</p>
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
  
