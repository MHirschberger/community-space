import React, { Component } from 'react';

export default class Comment extends Component {

  render() {
    const { comment } = this.props

    return (
      <div>
        <li>
          {comment.text}
        </li>
        <button onClick={() => this.props.deleteComment(this.props.comment.id)}> Delete This Comment </button>
      </div>
    );
  }

};


