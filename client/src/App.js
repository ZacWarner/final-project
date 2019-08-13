import React, { Component } from 'react';
import { UserForm } from './pages/Profile/UserForm';
import './pages/Profile/profile.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserForm />
      </div>
    );
  }
}

export default App;
