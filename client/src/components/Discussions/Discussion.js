import React, { Component } from 'react';
import CommentsContainer from '../../containers/CommentsContainer';
import { Link, Route } from 'react-router-dom';

class Discussion extends Component {


  render() {
    const { discussion } = this.props;

    return (
      <div>
        <p>{discussion.text}</p>
        <Link to={`/discussions/${this.props.discussion.id}/comments`}>See Comments</Link>
        <Route exact path={`/discussions/${this.props.discussion.id}/comments`} render={() => <CommentsContainer discussion={discussion} deleteDiscussion={this.props.deleteDiscussion} />} />  
        {/* <CommentsContainer discussion={discussion} deleteDiscussion={this.props.deleteDiscussion} />  */}
      </div>
    );
  }
};

export default Discussion;