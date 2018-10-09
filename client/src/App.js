import React, { Component } from 'react';
import './App.css';
import AllDiscussions from './components/AllDiscussions';
import Home from './components/Home';
import About from './components/About';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DiscussionInput from './components/Discussions/DiscussionInput';
import CommentsContainer from './containers/CommentsContainer';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Community Space</h1>
          <Navbar />
        </header>
        <div className="App-body">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discussions" component={AllDiscussions} />
          <Route exact path="/discussions/new" component={DiscussionInput} />
          <Route exact path="/discussions/:discussion_id/comments" component={CommentsContainer} />
          <Route exact path="/login" component={Login} />
        </div>
      </div>
    );
  }
}

export default App;
