import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const Stranger =({match}) => {
  return(<h1>Welcome Stranger {match.params.strangername}</h1>)
}

class App extends Component  {
  render() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
      <Link to="/">Home</Link>
      <Link to="/">About</Link>
      <Link to="/">Visit</Link>
      <Link to="/">Adios!</Link>
      </li>
  </ul>   
<Route path="/" exact strict render={
  ()=>{
    return ( <h1>Welcome Home Stranger</h1>)
  }
}/>
<Route path="/about" exact strict render={
  ()=>{
    return ( <h1> This is my About</h1>)
  }
}/>
<Route path="/visit" exact strict render={
  ()=>{
    return ( <h1>Enjoy your Visit</h1>)
  }
}/>
<Route path="/adios" exact strict render={
  ()=>{
    return ( <h1>Leaving? Adios!</h1>)
  }
}/>
<Route path= "/stranger/:strangername" exact strict component={Stranger}/>
    </div>
    </Router>
  );
  }
}

export default App;