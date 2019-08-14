import React from 'react';

import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import '../../styles/createprojectform.scss';
import '../../styles/variables.scss';


const addModule = (props) => {
    return (
        <>
            {console.log(props.data)}
            <Container className="form-holder">
                <Form>
                    <Row form>
                        <Col>
                            <FormGroup>
                                <Label for="projName">Module Name: </Label>
                                <Input type="text" id="modName" value={props.data.modName} placeholder="Module Name"
                                    onChange={props.handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="modDueDate">Module ETA: </Label>
                                <Input
                                    type="date"
                                    name="date"
                                    id="dueDate"
                                    onChange={props.handleInputChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col>
                            <FormGroup>
                                <Label for="projDesc">Module Description:</Label>
                                <Input type="textarea" name="text" id="projDesc" onChange={props.handleInputChange} />
                            </FormGroup>
                            <Button color="primary">Add Module</Button>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="assignDev">Assign To:</Label>
                                <Input type="select" name="select" id="assignDev" onChange={props.handleInputChange}>
                                    <option>-- select developer --</option>
                                </Input>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" defaultChecked={props.data.level1} onChange={props.handleCheckBox} />{' '}
                                    Level 1 Module
                                    </Label>
                            </FormGroup>
                            <FormGroup>
                                <Input type="select" name="select" id="modParent" disabled={props.data.level1 === true ? true : false}>
                                    <option>-- select parent --</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
}

export default addModule;