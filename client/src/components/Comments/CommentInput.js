import React, { Component } from 'react';

export default class CommentInput extends Component {

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
        this.props.addComment(this.state.text, this.props.discussionId);
        this.setState({
            text: ''
        })
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
  
