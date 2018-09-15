import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Discussion extends Component {


  render() {
    const { discussion } = this.props;

    return (
      <div className='discussion-link-div'>
        <NavLink className='discussion-link' to={`/discussions/${this.props.discussion.id}/comments`} style={{ textDecoration: 'none' }}>{discussion.text}</NavLink>
      </div>
    );
  }
};

export default Discussion;