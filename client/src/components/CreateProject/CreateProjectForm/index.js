import React from 'react';

import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import '../../styles/createprojectform.scss';
import '../../styles/variables.scss';


const createProj = (props) => {
    return (
        <>
            <Container className="form-holder">
                <Form>
                    <Row form>
                        <Col>
                            <FormGroup>
                                <Label for="projName">Project Name: </Label>
                                <Input type="text" id="projName" placeholder="Project Name" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="dueDate">ETA: </Label>
                                <Input
                                    type="date"
                                    name="date"
                                    id="dueDate"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col>
                            <FormGroup>
                                <Label for="projDesc">Project Description:</Label>
                                <Input type="textarea" name="text" id="projDesc" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Button color="primary" className="m-2">Create</Button>
                    </Row>
                </Form>
            </Container>
        </>
    );
}
export default createProj;