import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Discussion extends Component {


  render() {
    const { discussion } = this.props;

    return (
      <div className='discussion-link'>
        <Link className='link' to={`/discussions/${this.props.discussion.id}/comments`} style={{ textDecoration: 'none' }}>{discussion.text}</Link>
      </div>
    );
  }
};

export default Discussion;