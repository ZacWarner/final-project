import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Chat from '../../components/Chat';
import {
    Jumbotron,
    Container,

} from 'reactstrap';


class Landing extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Jumbotron>
                    <Container className="text-center">
                        <h1 className="display-3">Regulate</h1>
                        <a href="/signup" className="btn btn-primary m-3">Sign Up</a>
                        <a href="/login" className="btn btn-primary m-3">Login</a>
                    </Container>
                </Jumbotron>
                <Chat projectid="1" name="zac"></Chat>

            </>
        )
    }
}
export default Landing;
