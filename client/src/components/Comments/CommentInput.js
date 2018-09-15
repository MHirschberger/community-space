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
        this.props.addComment(this.state.text, this.props.discussionId)
        this.setState({
            text: ''
        });
    }

    render() {
        return (
        <div>
            <div>
                <p>Add Comment to Discussion</p>
            </div>
            {this.props.errors && this.props.errors.length > 0 ? <ul className='error-messages'><h3>Errors:</h3>{this.props.errors.map(error => <li>{error}</li>)}</ul> : null}
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
  
