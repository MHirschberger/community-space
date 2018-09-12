import React, { Component } from 'react';
import Comment from './Comment';

export default class Comments extends Component {

  render() {

    const comments = this.props.comments.map(comment => <Comment key={comment.id} comment={comment} deleteComment={this.props.deleteComment}/>)

    return (
      <ul>
        {comments}
      </ul>
    );
  }
};