import React, { Component } from 'react'
import Discussions from '../components/Discussions/Discussions';
import { connect } from 'react-redux';

class DiscussionsContainer extends Component {

  render() {
    return (
      <div>
        <Discussions discussions={this.props.discussions} deleteDiscussion={this.props.deleteDiscussion}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    discussions: state.discussions.discussions
})

const mapDispatchToProps = dispatch => ({
  deleteDiscussion: id => dispatch({type: 'DELETE_DISCUSSION', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(DiscussionsContainer);