import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = (params) => {
  return ( <h1> Welcome User {params.username} </h1>)
}

class App extends Component {
  state = {
    loggedIn:false
  }
  loginHandle = () => {
    this.setState(prevState => ({
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
              { color:'green' }
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeStyle={
              { color:'green' }
            }>About</NavLink>
          </li>
          <li>
            <NavLink to="/greetings" exact activeStyle={
              { color:'green' }
            }>Greetings</NavLink>
          </li>
          <li>
             <li>
            <NavLink to="/adios" exact activeStyle={
              { color:'green' }
            }>Adios</NavLink>
          </li>
           <li>
            <NavLink to="/user/john" exact activeStyle={
              { color:'green' }
            }>User John</NavLink>
          </li>
            <NavLink to="/user/peter" exact activeStyle={
              { color:'green' }
            }>User Peter</NavLink>
          </li>
          </ul>
          <Prompt
            when={!this.state.loggedIn}
            message={(location)=>{
               return location.pathname.startsWith('/user') ? 'Are you sure?' : true
             }}
          />

        <input type="button" value={this.state.loggedIn ? 'log out': 'log in'} onClick={this.loginHandle.bind(this)}/>

        <Route path="/" exact strict render={
          () => {
            return ( <h1>Welcome Home Stranger</h1>);
          }
        }/>
        <Route path="/about" exact strict render={
          () => {
            return ( <h1>Feel Free to Roam  About</h1>);
          }
        }/>
         <Route path="/greetings" exact strict render={
          () => {
            return ( <h1>Greetings? How are you Today</h1>);
          }
        }/>
         <Route path="/adios" exact strict render={
          () => {
            return ( <h1>leaving So Soon? Adios!</h1>);
          }
        }/>
        <Route path="/user/:username" exact strict render={({match})=>(
          this.state.loggedIn ? ( <User username={match.params.username}/>) : (<Redirect to='/' />)
        )}/>
        </div>
      </Router>
    );
  }
}

export default App;