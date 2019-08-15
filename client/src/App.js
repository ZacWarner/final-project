import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Registration';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import CreateProject from './pages/CreateProject';
import Project from './pages/Project';

import './App.scss';


<<<<<<< HEAD
=======
class App extends Component {


>>>>>>> 91c3bcdf65e67b355a3143c7852d456d5164f99b
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/dashboard/:id' component={Dashboard} />
          <Route exact path='/project/:id' component={Project} />
          <Route exact path='/AboutUs' component={AboutUs} />
          <Route exact path='/createProject' component={CreateProject} />
        </div>
      </Router>
    );
  }
}

export default App;