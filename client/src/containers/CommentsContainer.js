import React, { Component } from 'react'
import Comments from '../components/Comments/Comments';
import CommentInput from '../components/Comments/CommentInput';
import { connect } from 'react-redux';
import { fetchComments, addComment, deleteComment } from '../actions/commentActions';
import { fetchDiscussion } from '../actions/discussionActions';

class CommentsContainer extends Component {

  componentDidMount() {
    this.props.fetchComments(this.props.match.params.discussion_id)
    this.props.fetchDiscussion(this.props.match.params.discussion_id)
  }

  render() {
    const discussionId = this.props.match.params.discussion_id
    return (
      <div>
        <div className='discussion-text'>
          <p>{this.props.discussion.text}</p>
        </div>
        <div className='comments-list'>
          <Comments comments={this.props.comments} deleteComment={this.props.deleteComment} />
          <CommentInput addComment={this.props.addComment} discussionId={discussionId} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    comments: state.comments.comments,
    discussion: state.discussions.discussions
})

const mapDispatchToProps = dispatch => ({
    addComment: (text, discussionId) => dispatch(addComment(text, discussionId)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    fetchComments: discussionId => dispatch(fetchComments(discussionId)),
    fetchDiscussion: discussionId => dispatch(fetchDiscussion(discussionId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);