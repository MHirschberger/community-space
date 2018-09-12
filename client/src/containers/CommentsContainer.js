import React, { Component } from 'react'
import Comments from '../components/Comments/Comments';
import { connect } from 'react-redux';

class CommentsContainer extends Component {

  render() {
    return (
      <div>
        <CommentInput addComment={this.props.addComment} />
        <Comments comments={this.props.comments} deleteComment={this.props.deleteComment} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    comments: state.comments.comments
})

const mapDispatchToProps = dispatch => ({
    addComment: text => dispatch({type: 'ADD_COMMENT', text}),
    deleteComment: id => dispatch({type: 'DELETE_COMMENT', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);