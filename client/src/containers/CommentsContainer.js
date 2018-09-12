import React, { Component } from 'react'
import Comments from '../components/Comments/Comments';
import { connect } from 'react-redux';

class CommentsContainer extends Component {

  render() {
    return (
      <div>
        <CommentInput addComment={this.props.addComment} discussionId={this.props.discussion.id} />
        <Comments comments={this.props.comments} deleteComment={this.props.deleteComment} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    comments: state.discussions.comments
})

const mapDispatchToProps = dispatch => ({
    addComment: (text, discussionId) => dispatch({type: 'ADD_COMMENT', comment: {text, discussionId}}),
    deleteComment: id => dispatch({type: 'DELETE_COMMENT', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);