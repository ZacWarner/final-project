import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Home from './pages/Login/home.js';
import Profile from './pages/Profile';
import Login from './components/auth/Login';
import Signup from './pages/Registration';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import Project from './pages/CreateProject';
import NewApp from './newApp';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navabar from './components/Navbar/Navbar';

import Staff from './pages/Staff/Staff';



import './App.scss';

class App extends Component {

  onAuthRequired({ history }) {
    history.push('/login');
  }

  render() {
    return (
      <Router>
        <div>
          <Security issuer='https://dev-266895.okta.com/oauth2/default'
            client_id='0oa12ses9aFvhURdA357'
            redirect_uri={window.location.origin + '/implicit/callback'}
            onAuthRequired={this.onAuthRequired} >
            <div className="App">
              <Navabar />
              <div className="container">
                {/* <Route path="/" exact={true} component={Home} />
                <SecureRoute path="/staff" exact={true} component={Staff} />
                <Route path='/login' render={() => <Login baseUrl='https://dev-266895.okta.com' />} />
                <Route path='/implicit/callback' component={ImplicitCallback} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/dashboard/:id' component={Dashboard} />
                <Route exact path='/newApp' component={NewApp} />
                <Route exact path='/AboutUs' component={AboutUs} />
                <Route exact path='/createProject' component={Project} /> */}
                <Route path="/" exact={true} component={Home} />
                <SecureRoute path="/staff" exact={true} component={Staff} />
                <Route path='/login' render={() => <Login baseUrl='https://dev-266895.okta.com' />} />
                <Route path='/implicit/callback' component={ImplicitCallback} />
              </div>

            </div>
          </Security>
        </div>
      </Router>
    );
  }
}

export default App;
