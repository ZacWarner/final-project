import React, { Component } from "react";
import Nav from '../../components/Navbar';
import { Jumbotron, Form, FormGroup, Input, Label, Button, Col, Row } from 'reactstrap';
import API from '../../utils/API'



class Login extends Component {
    state = {
        userName: "",
        password: ""
    };

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
            window.location.replace("/profile/" + usr.userName);
        })
    }

    render() {
        return (
            <>
                <Nav></Nav>
                <Jumbotron>
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
                                    <Button className="my-2" color="primary" onClick={this.handleFormSubmit}>Login!</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </Jumbotron>
            </>
        )
    }
};

export default Login;
