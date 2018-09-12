import React, { Component } from 'react'
import Comments from '../components/Comments/Comments';
import { connect } from 'react-redux';

class CommentsContainer extends Component {

  render() {
    return (
      <div>
        <Comments comments={this.props.comments} deleteComment={this.props.deleteComment}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    discussions: state.discussions.discussions
})

const mapDispatchToProps = dispatch => ({
    deleteComment: id => dispatch({type: 'DELETE_DISCUSSION', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);