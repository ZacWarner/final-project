import React, { Component } from 'react';
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle, Button, CardImg } from 'reactstrap';
import Navbar from '../../components/Navbar';
import logo from '../../images/orangelady.jpeg';
import './profile.css';
import Form from './Form';
import API from '../../utils/API';




class Profile extends Component {

    state = {
        email: "",
        role: "",
        dateReg: "",
        country: "",
        city: "",
        state: "",
        birthDate: "",
        phoneNumber: "",
        jobTitle: "",
        name: "",
        userName: "",
        loggedIn: false,
    };

    componentDidMount() {
        API.getUsr().then((res) => {
            const user = res.data.user;
            const fullName = user.firstName + " " + user.lastName;
            this.setState({
                email: user.email,
                city: user.city,
                userName: user.userName,
                name: fullName,
                state: user.stateProvince,
                loggedIn: true,
            })
        })

    }

    render() {

        return (
            <>
                <Navbar />
                <Container>

                    <Row>
                        <Col-md-6>
                            <Col className="profileColumn">
                                <Card style={{ width: '100%' }}>
                                    <Row>
                                        <Col id="columnDetail">
                                            <CardImg className="profileImage" variant="top" src={logo} />
                                        </Col>
                                        <Col id="columnDetail" className="topTitle">

                                            <CardTitle><h3>{this.state.userName}</h3></CardTitle>
                                            <CardTitle><h3>{this.state.name}</h3></CardTitle>
                                        </Col>

                                    </Row><hr />



                                    <CardBody>

                                        <CardText style={{ paddingTop: '2rem' }}>

                                            <p>Email: {this.state.email} </p>
                                            <p>Role: {this.state.role} </p>
                                            <p>Date Registered: {this.state.dateReg} </p>
                                        </CardText>
                                    </CardBody>
                                    <CardTitle><h5 id="profileHeader">Location</h5></CardTitle>
                                    <CardBody>
                                        <CardText>
                                            <p>Country: {this.state.country} </p>
                                            <p>City: {this.state.city} </p>
                                            <p>State: {this.state.state} </p>
                                        </CardText>
                                    </CardBody>
                                    <CardTitle><h5 id="profileHeader">Personal Information</h5></CardTitle>
                                    <CardBody>
                                        <CardText>
                                            <p>Birth Date: {this.state.birthDate} </p>
                                            <p>Phone Number: {this.state.phoneNumber} </p>
                                            <p>Job Title: {this.state.jobTitle} </p>

                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Col-md-6>

                        <Col-md-6>
                            <Row>
                                <Col className="profileColumn">
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

                                <Col className="profileColumn">
                                    <Card className="m-0" style={{ width: '100%' }}>
                                        <CardBody>
                                            <CardTitle><h4>Notes</h4><hr /></CardTitle>
                                            <CardText>
                                                <p>Work on building a navbar for my project.</p>
                                                <p>Work on building a universal sidebar.</p>
                                                <p>Debug Agora</p>
                                            </CardText>
                                            <Form />
                                        </CardBody>
                                    </Card></Col>
                            </Row>

                            <Row>
                                <Col className="profileColumn">
                                    <Card style={{ width: '100%' }}>
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
                                    </Card></Col>
                            </Row>
                        </Col-md-6>
                    </Row>
                </Container>

            </>

        );
    }
}

export default Profile;
