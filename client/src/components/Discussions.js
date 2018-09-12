import React, { Component } from 'react';
import Discussion from './Discussion';

class Discussions extends Component {
  render() {

    const discussions = this.props.discussions.map(discussion => <Discussion key={discussion.id} discussion={discussion} deleteDiscussion={this.props.deleteDiscussion}/>)
    return(
      <div>
        {discussions}
      </div>
    );
  }
};

export default Discussions;