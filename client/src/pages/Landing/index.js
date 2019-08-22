import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Chat from '../../components/Chat';
import { Jumbotron, Container } from 'reactstrap';
import './landing.scss';


class Landing extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Jumbotron className="landingJumbo">
                    <Container className="text-center profileCont">
                        <h1 className="display-3 profileHeader">Regulate</h1>
                        <a href="/signup" className="btn btn-outline-light m-3 profileBtn">Sign Up</a>
                        
                    </Container>
                </Jumbotron>
            </>
        )
    }
}
export default Landing;
