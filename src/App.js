import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
class App extends Component  {
  render() {
  return (
    <Router>
    <div className="App">

<Route path="/" render={
  ()=>{
    return ( <h1>Welcome Home</h1>)
  }
}/>
<Route path="/about" render={
  ()=>{
    return ( <h1> This is my About</h1>)
  }
}/>
    </div>
    </Router>
  );
  }
}

export default App;