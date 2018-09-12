import React, { Component } from 'react'
import Discussions from '../components/Discussions';
import { connect } from 'react-redux';

class DiscussionsContainer extends Component {

  render() {
    return (
      <div>
        <Discussions discussions={this.props.discussions} deleteRestaurant={this.props.deleteDiscussion}/>
      </div>
    )
  }
}

const mapStateToProps = ({ discussions }) => ({ discussions })

const mapDispatchToProps = dispatch => ({
  deleteDiscussion: id => dispatch({type: 'DELETE_DISCUSSION', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(DiscussionsContainer);