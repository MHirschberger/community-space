import React, { Component } from 'react';
import CommentsContainer from '../../containers/CommentsContainer'

class Discussion extends Component {


  render() {
    const { discussion } = this.props;

    return (
      <div>
        {discussion.text}
        <button onClick={() => this.props.deleteDiscussion(this.props.discussion.id)}> Delete </button>
          <CommentsContainer discussion={discussion}/>
      </div>
    );
  }
};

export default Discussion;