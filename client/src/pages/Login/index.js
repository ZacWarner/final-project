import React, { Component } from "react";
import Nav from '../../components/Navbar';
import { Jumbotron, Form, FormGroup, Input, Label, Button, Col, Row, Container } from 'reactstrap';
import API from '../../utils/API'



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            wasRedirected: "",
            page: "",

        };
    }

    componentDidMount() {
        console.log(this.props);
        console.log(this.props.wasRedirected);
        console.log(this.props.page);
        if (this.props.wasRedirected) {
            this.setState({
                wasRedirected: "true",
                page: this.props.page
            })
        }
    }





    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const usr = {
            userName: this.state.userName,
            password: this.state.password
        }
        API.login(usr).then(function (data) {
            if (data.data) {
                sessionStorage.setItem("signedIn", true);
            }

            window.location.replace("/profile");
        })

    }

    render() {
        const wasRedirected = this.state.wasRedirected;
        return (
            <>

                <Nav></Nav>
                <Container>
                    <Jumbotron className="p-2 my-5">
                        {wasRedirected ? (
                            <Form>
                                <Container className="text-center text-warning">
                                    <h3>Login in to view the {this.state.page} page</h3>
                                </Container>
                                <FormGroup>
                                    <Row>
                                        <Col md="6">
                                            <Label>Username:</Label>
                                            <Input placeholder="your user name" name="userName" value={this.state.userName} onChange={this.handleInputChange}></Input>
                                        </Col>
                                        <Col md="6">
                                            <Label>Password</Label>
                                            <Input type="password" placeholder="your password" name="password" value={this.state.password} onChange={this.handleInputChange}></Input>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <Button className="my-2" color="primary" onClick={this.handleFormSubmit}>Login!</Button>
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </Form>
                        ) : (
                                <Form>
                                    <FormGroup>
                                        <Row>
                                            <Col md="6">
                                                <Label>Username:</Label>
                                                <Input placeholder="your user name" name="userName" value={this.state.userName} onChange={this.handleInputChange}></Input>
                                            </Col>
                                            <Col md="6">
                                                <Label>Password</Label>
                                                <Input type="password" placeholder="your password" name="password" value={this.state.password} onChange={this.handleInputChange}></Input>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <Button className="my-2" color="primary" type="submit" onClick={this.handleFormSubmit}>Login!</Button>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Form>
                            )}
                    </Jumbotron>
                </Container>
            </>
        )
    }
};

export default Login;
