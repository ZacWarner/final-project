<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import RegForm from './components/NewUserForm';
=======
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Registration';
>>>>>>> ba850862069a78fa4c954a49e7d0c04ddc923983

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
        </div>
      </Router>
    );
  }
}

export default App;
