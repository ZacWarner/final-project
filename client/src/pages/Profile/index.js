import React, { Component } from 'react';
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, Button, CardImg } from 'reactstrap';
import Navbar from '../../components/Navbar';
import logo from '../../images/orangelady.jpeg';
import './profile.css';
import Form from '../../components/profileForm';
import API from '../../utils/API';




class Profile extends Component {

    state = {
        email: "",
        role: "",
        city: "",
        state: "",
        phoneNumber: "",
        linkedin: "",
        projects: ["as", "af"],
        skills: [],

        name: "",
        userName: ""


    };

    componentDidMount() {
        API.getUsr().then((res) => {
            const user = res.data.user;
            const fullName = user.firstName + " " + user.lastName;
            console.log("this");
            console.log(this);
            this.setState({
                email: user.email,
                city: user.city,
                userName: user.userName,
                name: fullName,
                state: user.stateProvince,
            })
        });
        API.getProfileData(this.props.match.params.usrname)
            .then((res) => {
                console.log("data from prof collection");
                console.log(res);
                console.log(this);
                // const profdata = res.data.pr;
                this.setState({
                    projects: res.data.projects,
                    skills: res.data.dev_skills
                });
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
                                <Card className="card-props" style={{ width: '100%' }}>
                                    <Row>
                                        <Col id="columnDetail">
                                            <CardImg className="profileImage" variant="top" src={logo} />
                                        </Col>
                                        <Col id="columnDetail" className="topTitle">

                                            <CardTitle><h3 className="mr-2">{this.state.userName}</h3></CardTitle>
                                            <CardTitle><h3 className="mr-2">{this.state.name}</h3></CardTitle>
                                        </Col>

                                    </Row><hr />



                                    <CardBody style={{ paddingTop: '2rem' }}>

                                        <p>Email: {this.state.email} </p>
                                        <p>Role: {this.state.role} </p>
                                    </CardBody>
                                    <CardTitle><h5 id="profileHeader">Location</h5></CardTitle>
                                    <CardBody>
                                        <p>City: {this.state.city} </p>
                                        <p>State: {this.state.state} </p>
                                    </CardBody>
                                    <CardTitle><h5 id="profileHeader">Personal Information</h5></CardTitle>
                                    <CardBody>
                                        <p>Phone Number: {this.state.phoneNumber} </p>
                                        <p>LinkedIn Profile: </p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Col-md-6>

                        <Col-md-6>
                            <Row>
                                <Col className="profileColumn">
                                    <Card className="m-0 card-props" style={{ width: '100%' }}>
                                        <CardBody>
                                            <CardTitle><h4>Projects</h4><hr /></CardTitle>
                                            <ul style={{ 'list-style-type': 'square' }}>
                                                {this.state.projects.map(proj => {
                                                    return (
                                                        <li>
                                                            {proj}
                                                        </li>
                                                    );
                                                })
                                                }
                                            </ul>
                                            <a href="/createProject">
                                                <Button color="primary" className="float-right">Create New</Button>
                                            </a>

                                        </CardBody>
                                    </Card></Col>

                                <Col className="profileColumn">
                                    <Card className="m-0 card-props" style={{ width: '100%' }}>
                                        <CardBody>
                                            <CardTitle><h4>Notes</h4><hr /></CardTitle>
                                            <p>Work on building a navbar for my project.</p>
                                            <p>Work on building a universal sidebar.</p>
                                            <p>Debug Agora</p>
                                            <Form />
                                        </CardBody>
                                    </Card></Col>
                            </Row>

                            <Row>
                                <Col className="profileColumn">
                                    <Card style={{ width: '100%' }} className="card-props">
                                        <CardBody>
                                            <CardTitle><h4>Skills</h4><hr /></CardTitle>
                                            <ul style={{ 'list-style-type': 'square' }}>
                                                {this.state.skills.map(skill => {
                                                    return (
                                                        <li>
                                                            {skill}
                                                        </li>
                                                    );
                                                })
                                                }
                                            </ul>
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
