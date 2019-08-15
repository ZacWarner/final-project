import React, { Component } from 'react'
import theImage from './regulate_1.png'

export default class Staff extends Component {
    state = {
        currentUserName: '',
        currentUserEmail: ''
    }

    componentDidMount() {
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            currentUserEmail: idToken.idToken.claims.email,
            currentUserName: idToken.idToken.claims.name
        })
    }
    render() {
        const {currentUserEmail, currentUserName } = this.state;
        return (
            <div>
              <h1>Welcome {currentUserName }</h1> 
              <p> Email: { currentUserEmail}</p>
              <img src={theImage} className="img" />
              <p>You have reached this Admin area of the Portal</p>
            </div>
        )
    }
}
