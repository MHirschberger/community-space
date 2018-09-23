import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Discussion extends Component {

  // Assessment Code

  // state = {
  //   vote: 0
  // }

  // upvote = event => {
  //   event.preventDefault()
  //   this.setState((prevState) => {
  //     return {vote: prevState.vote + 1}
  //   })
  // }


  render() {
    const { discussion } = this.props;

    return (
      <div className='discussion-link-div'>
        <NavLink className='discussion-link' to={`/discussions/${this.props.discussion.id}/comments`} style={{ textDecoration: 'none' }}>{discussion.text}</NavLink>
        {/* Assessment Code */}
        {/* <button onClick={this.upvote}>Upvote</button>
        {this.state.vote} */}
      </div>
    );
  }
};

export default Discussion;