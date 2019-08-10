import React, { Component } from "react";
import { Jumbotron, Form, FormGroup, Input, Label, Button, Col, Row } from 'reactstrap';





class Login extends Component {
    render() {
        return (
            <>
                <Jumbotron>
                    <Form>
                        <FormGroup>
                            <Row>
                                <Col md="6">
                                    <Label>Username:</Label>
                                    <Input placeholder="your user name"></Input>
                                </Col>
                                <Col md="6">
                                    <Label>Password</Label>
                                    <Input placeholder="your password"></Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <Button className="my-2" color="primary">Login!</Button>
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