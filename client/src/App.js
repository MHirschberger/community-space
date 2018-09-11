import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import PostInput from './components/PostInput';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'blue',
  color: 'white'
}

const Navbar = () =>
  <div>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/new"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Start New Discussion</NavLink>
  </div>;

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
          <Route exact path="/new" component={PostInput} />
        </div>
      </div>
    );
  }
}

export default App;
