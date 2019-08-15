import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navabar from '../client/src/components/Navbar/Navbar';
import Home from '../client/src/pages/Home/Home';
import Staff from '../client/src/pages/Staff/Staff';
import Login from '../client/src/components/auth/Login';
import './App.css';


function onAuthRequired({ history }) {
  history.push('/login');
}
function App() {
  return (
    <Router>
      <Security issuer='https://dev-266895.okta.com/oauth2/default'
        client_id='0oa12ses9aFvhURdA357'
        redirect_uri={window.location.origin + '/implicit/callback'}
        onAuthRequired={onAuthRequired} >
        <div className="App">
          <Navabar />
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <SecureRoute path="/staff" exact={true} component={Staff} />
            <Route path='/login' render={() => <Login baseUrl='https://dev-266895.okta.com' />} />
            <Route path='/implicit/callback' component={ImplicitCallback} />
          </div>

        </div>
      </Security>


    </Router>
  );
}

export default App;
