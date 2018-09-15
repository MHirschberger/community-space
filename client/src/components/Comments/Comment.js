import React, { Component } from 'react';

export default class Comment extends Component {

  render() {
    const { comment } = this.props

    return (
      <div>
        <p className='comment'>
          {comment.text}
        </p>
        <button className='delete-comment' onClick={() => this.props.deleteComment(this.props.comment.id)}> Delete Comment </button>
      </div>
    );
  }

};


