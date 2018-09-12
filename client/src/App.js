import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DiscussionInput from './components/Discussions/DiscussionInput';

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
          <Route exact path="/new" component={DiscussionInput} />
        </div>
      </div>
    );
  }
}

export default App;
