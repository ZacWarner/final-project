import React, { Component } from 'react';
import {
    Container, Row, Col, Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Navbar from '../../components/Navbar';

class Profile extends Component {

    state = {

    };

    render() {
        return (
            <>
                <Navbar />
                <Container>
                    <Row>
                        <Card className="my-3" style={{ width: '100%' }}>
                            <CardBody>
                                <CardTitle><h4>Developer Name</h4><hr />
                                    <Button color="primary" className="float-right">Edit</Button></CardTitle>
                                <CardSubtitle><h5>Developer Title</h5></CardSubtitle>
                                <CardText>
                                    <h6>Skill set:</h6>
                                    <ul style={{ 'list-style-type': 'none' }}>
                                        <li>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </li>
                                    </ul>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="m-0" style={{ width: '100%' }}>
                                <CardBody>
                                    <CardTitle><h4>Projects Involved</h4><hr /><Button color="success" className="float-right">Create New</Button></CardTitle>
                                    <CardText>
                                        <h6>My Projects:</h6>
                                        <ul style={{ 'list-style-type': 'square' }}>
                                            <li><a href='#'>Lorem ipsum</a></li>
                                        </ul>

                                        <h6>Projects I work on:</h6>
                                        <ul style={{ 'list-style-type': 'square' }}>
                                            <li><a href='#'>Regulate</a></li>
                                            <li><a href='#'>Lorem ipsum</a></li>
                                        </ul>
                                    </CardText>
                                </CardBody>
                            </Card></Col>
                        <Col>
                            <Card className="m-0" style={{ width: '100%' }}>
                                <CardBody>
                                    <CardTitle><h4>Contact Details</h4><hr /><Button color="primary" className="float-right">Edit</Button></CardTitle>
                                    <CardText>
                                        <h6>Ph: 9876543210</h6>
                                        <h6>Email: abc@gmail.com</h6>
                                        <h6>LinkedIn: <a href='#'>Lorem ipsum dolor sit amet</a></h6>
                                        <h6>GitHub: <a href='#'>Lorem ipsum dolor sit amet</a></h6>
                                    </CardText>
                                </CardBody>
                            </Card></Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Profile;
