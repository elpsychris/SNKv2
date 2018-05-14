import React, { Component } from 'react';
import './App.css';
import { Button } from 'semantic-ui-react'
import Home from './components/Home'
import Project from './components/Project'

import './semantic/dist/semantic.min.css'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          {/* <Home /> */}
          <Project/>
        </Router>
      </div>
    );
  }
}



export default App;
