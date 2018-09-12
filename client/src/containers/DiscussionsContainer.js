import React, { Component } from 'react'
import Discussions from '../components/restaurants/Restaurants'
import { connect } from 'react-redux';

class DiscussionsContainer extends Component {

  render() {
    return (
      <div>
        <DiscussionInput addDiscussion = {this.props.addDiscussion}/>
        <Discussions discussions={this.props.discussions} deleteRestaurant={this.props.deleteDiscussion}/>
      </div>
    )
  }
}

const mapStateToProps = ({ discussions }) => ({ discussions })

const mapDispatchToProps = dispatch => ({
  addDiscussion: text => dispatch({type: 'ADD_DISCUSSION', text}),
  deleteDiscussion: id => dispatch({type: 'DELETE_DISCUSSION', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(DiscussionsContainer);