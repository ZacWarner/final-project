import React from 'react';

import { Col, Row, Button, Form, FormGroup, Label, Input, Jumbotron, Container, CustomInput } from 'reactstrap';
import '../styles/createprojectform.scss';
import '../styles/variables.scss';


export default class ProjectForm extends React.Component {
    render() {
        return (
            <div className="page-body">
                <Jumbotron className="form-holder">
                    <Container fluid>
                        <Form>
                            <Row form>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="Project Name">Project Name</Label>
                                        <Input valid type="text" name="Project Name" placeholder="Project Name" value={this.props.projectName} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="exampleDate">Start</Label>
                                        <Input
                                            type="date"
                                            name="date"
                                            id="exampleDate"
                                            placeholder="date placeholder"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="exampleDate">End</Label>
                                        <Input
                                            type="date"
                                            name="date"
                                            id="exampleDate"
                                            placeholder="date placeholder"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <FormGroup>
                                    <Label for="exampleText">Text Area</Label>
                                    <Input type="textarea" name="text" id="exampleText" />
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup>
                                    <Label for="exampleCheckbox">Switches</Label>
                                    <div>
                                        <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on this custom switch" />
                                        <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Or this one" />
                                        <CustomInput type="switch" id="exampleCustomSwitch3" label="But not this disabled one" disabled />
                                        <CustomInput type="switch" id="exampleCustomSwitch4" label="Can't click this label to turn on!" htmlFor="exampleCustomSwitch4_X" disabled />
                                    </div>
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup>
                                    <Label for="exampleSelectMulti">Assigned Devs</Label>
                                    <Input
                                        type="select"
                                        name="selectMulti"
                                        id="exampleSelectMulti"
                                        multiple
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                            </Row>
                            <Button onClick={this.props.project}>Submit</Button>
                        </Form>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}