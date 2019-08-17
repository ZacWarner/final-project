import React, { Component } from 'react';
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle, Button, CardImg } from 'reactstrap';
import Navbar from '../../components/Navbar';
import logo from '../../images/orangelady.jpeg';
//import './profile.css';
//import UserForm from './UserForm';



class Profile extends Component {

    state = {

    };

    render() {
        return (
            <>
                <Navbar />
                <Container>

                    <Row>
                        <Col>
                            <Card style={{ width: '100%' }}>
                                <Row>
                                    <Col id="columnDetail">
                                        <CardImg className="profileImage" variant="top" src={logo} />
                                    </Col>
                                    <Col id="columnDetail" className="topTitle">

                                        <CardTitle><h3>D-Jane1234</h3></CardTitle>
                                        <CardTitle><h3>Jane Doe</h3></CardTitle>
                                    </Col>

                                </Row>

                                <CardBody> <hr />
                                    <CardText>
                                        <p>Email: JaneDoe@gmail.com</p>
                                        <p>Role: Developer</p>
                                        <p>Date Registered: 01/01/2019</p>
                                    </CardText>
                                </CardBody>
                                <CardTitle><h5 className="text-center">Location</h5></CardTitle>
                                <CardBody>
                                    <CardText>
                                        <p>Country: United States</p>
                                        <p>City: Sacramento</p>
                                        <p>State: CA</p>
                                    </CardText>
                                </CardBody>
                                <CardTitle><h5 className="text-center">Personal Information</h5></CardTitle>
                                <CardBody>
                                    <CardText>
                                        <p>Birth Date: 01/01/1900</p>
                                        <p>Phone Number: 000-000-0000</p>
                                        <p>Job Title: Web Developer</p>

                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="m-0" style={{ width: '100%' }}>
                                <CardBody>
                                    <CardTitle><h4>Projects</h4><hr /></CardTitle>
                                    <CardText>
                                        <h6>Current Projects:</h6>
                                        <ul style={{ 'list-style-type': 'square' }}>
                                            <li><a href='#'>Regulate</a></li>
                                        </ul>

                                        <h6>Pending Projects:</h6>
                                        <ul style={{ 'list-style-type': 'square' }}>
                                            <li><a href='#'>Debugging</a></li>
                                            <li><a href='#'>Internet Explorer Crashed</a></li>
                                        </ul>

                                        <h6>Finsished Project:</h6>
                                        <ul style={{ 'list-style-type': 'square' }}>
                                            <li><a href='#'>Agora</a></li>
                                            <li><a href='#'>Lorem</a></li>
                                        </ul>
                                    </CardText>
                                    <Button color="primary" className="float-right">Create New</Button>
                                </CardBody>
                            </Card></Col>
                        <Col>
                            <Card className="m-0" style={{ width: '100%' }}>
                                <CardBody>
                                    <CardTitle><h4>Notes</h4><hr /></CardTitle>
                                    <CardText>
                                        <p>Work on building a navbar for my project.</p>
                                        <p>Work on building a universal sidebar.</p>
                                        <p>Debug Agora</p>
                                    </CardText>
                                    <Button color="primary" className="float-right">Edit</Button>
                                </CardBody>
                            </Card></Col>
                    </Row>
                    <Col>
                        <Card className="ml-auto" style={{ width: '65%' }}>
                            <CardBody>
                                <CardTitle><h4>Skills</h4><hr /></CardTitle>
                                <CardText>
                                    <p>HTML 5</p>
                                    <p>CSS 3</p>
                                    <p>JavaScript</p>
                                    <p>React</p>
                                </CardText>
                                <Button color="primary" className="float-right">Edit</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Container>

            </>
        );
    }
}

export default Profile;
