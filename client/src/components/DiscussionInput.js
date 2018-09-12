import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        this.props.addDiscussion(this.state.text);
        this.setState({
            text: ''
        });
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
    addDiscussion: text => dispatch({type: 'ADD_DISCUSSION', text}),
})
  
export default connect(null, mapDispatchToProps)(DiscussionInput);

