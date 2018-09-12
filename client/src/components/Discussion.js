import React, { Component } from 'react';
//import ReviewsContainer from '../../containers/ReviewsContainer'

class Discussion extends Component {


  render() {
    const { discussion } = this.props;

    return (
      <div>
        {discussion.text}
        <button onClick={() => this.props.deleteDiscussion(this.props.discussion.id)}> Delete </button>
          {/* <ReviewsContainer restaurant={restaurant}/> */}
      </div>
    );
  }
};

export default Discussion;