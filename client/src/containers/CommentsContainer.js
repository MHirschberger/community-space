import React, { Component } from 'react'
import Comments from '../components/Comments/Comments';
import CommentInput from '../components/Comments/CommentInput';
import { connect } from 'react-redux';

class CommentsContainer extends Component {

    filterComments = () => (
        this.props.comments.filter(comment => comment.discussionId === this.props.discussion.id)
    )

  render() {
    return (
      <div>
        {/* {this.props.discussion.text} */}
        <button onClick={() => this.props.deleteDiscussion(this.props.discussion.id)}> Delete </button>
        <Comments comments={this.filterComments()} deleteComment={this.props.deleteComment} />
        <CommentInput addComment={this.props.addComment} discussionId={this.props.discussion.id} />
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