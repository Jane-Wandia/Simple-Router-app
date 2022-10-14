import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const Stranger =({params}) => {
  return(<h1>Welcome Stranger {params.strangername}</h1>)
}

class App extends Component  {
  state = {
    loggedIn:false
  }
  loginHandle = () => {
    this.setState(prevState =>({
      loggedIn: !prevState.loggedIn
      }))
  }





  render() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
      <NavLink to="/" exact activeStyle={
        {color:'green'}
      }>Home</NavLink>
      </li>
        <li>
      <NavLink to="/greatings" exact activeStyle={
        {color:'green'}
      }>Greatings</NavLink>
      </li>
      <li>
      <NavLink to="/about" exact activeStyle={
        {color:'green'}
      }>About</NavLink>
      </li>
      <li>
      <NavLink to="/visit" exact activeStyle={
        {color:'green'}
      }>Visit</NavLink>
      </li>
      <li>
      <NavLink to="/adios" exact activeStyle={
        {color:'green'}
      }>Adios!</NavLink>
      </li>
  </ul> 

<input type="button" value={this.state.loggedIn ? 'log out': 'log in'} onClick={this.loginHandle.bind(this)}/>

<Route path="/" exact strict render={
  ()=>{
    return ( <h1>Welcome Home Stranger</h1>)
  }
}/>
<Route path="/greatings" exact strict render={
  ()=>{
    return ( <h1>Greatings, How are you Today?</h1>)
  }
}/>
<Route path="/about" exact strict render={
  ()=>{
    return ( <h1> Feel Free to Roam About</h1>)
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
 <Route path="/strager/:strangerName" exact strict render={({match})=>(
          this.state.loggedIn ? ( <stranger strangerName={match.params.strangerName}/>) : (<Redirect to='/greatings' />)
        )}/>
    </div>
    </Router>
  );
  }
}

export default App;