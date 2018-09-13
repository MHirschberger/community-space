import React, { Component } from 'react'
import Comments from '../components/Comments/Comments';
import CommentInput from '../components/Comments/CommentInput';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/commentActions';

class CommentsContainer extends Component {

  componentDidMount() {
    this.props.fetchComments(this.props.match.params.discussion_id);
  }

    filterComments = () => (
        this.props.comments.filter(comment => comment.discussionId === this.props.discussion.id)
    )

  render() {

    const discussionId = this.props.match.params.discussion_id
    return (
      <div>
        {/* {this.props.discussion.text} */}
        <button onClick={() => this.props.deleteDiscussion(discussionId)}> Delete </button>
        {this.props.comments.length > 0 ? <Comments comments={this.props.comments} deleteComment={this.props.deleteComment} /> : null}
        <CommentInput addComment={this.props.addComment} discussionId={discussionId} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    comments: state.comments.comments
})

const mapDispatchToProps = dispatch => ({
    addComment: (text, discussionId) => dispatch({type: 'ADD_COMMENT', comment: {text, discussionId}}),
    deleteComment: id => dispatch({type: 'DELETE_COMMENT', id}),
    fetchComments: discussionId => dispatch(fetchComments(discussionId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);