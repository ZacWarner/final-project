import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Chat from '../../components/Chat';
import {
    Jumbotron,
    Container,

} from 'reactstrap';
import '../../components/styles/Landing/jumbotron.scss';
import '../../components/styles/variables.scss';


class Landing extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Jumbotron className="landing-jumbo">
                    <Container className="text-center">
                        <h1 className="display-3">Regulate</h1>
                        <a href="/signup" className="btn btn-outline-light m-3">Sign Up</a>
                        <a href="/login" className="btn btn-outline-light m-3">Login</a>
                    </Container>
                </Jumbotron>
            </>
        )
    }
}
export default Landing;
