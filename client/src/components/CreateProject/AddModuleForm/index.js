import React from 'react';

import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import '../../styles/createprojectform.scss';
import '../../styles/variables.scss';


const addModule = (props) => {
    return (
        <>
            <Container className="form-holder">
                <Form>
                    <Row form>
                        <Col>
                            <FormGroup>
                                <Label for="projName">Module Name: </Label>
                                <Input type="text" id="modName" name="modName" value={props.data.modName} placeholder="Module Name"
                                    onChange={props.handleInputChange}
                                    disabled={(props.data.projCreated === "no") ? true : false} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="modDueDate">Module Due Date: </Label>
                                <Input
                                    type="date"
                                    name="modDueDate"
                                    id="modDueDate"
                                    value={props.data.modDueDate}
                                    onChange={props.handleInputChange}
                                    disabled={(props.data.projCreated === "no") ? true : false}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col>
                            <FormGroup>
                                <Label for="projDesc">Module Description:</Label>
                                <Input type="textarea" name="modDesc" id="modDesc" value={props.data.modDesc}
                                    onChange={props.handleInputChange}
                                    disabled={(props.data.projCreated === "no") ? true : false} />
                            </FormGroup>
                            <Button color="primary" onClick={props.handleAddModule}
                                disabled={(props.data.projCreated === "no") ? true : false}>Add Module</Button>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="assignDev">Assign To:</Label>
                                <Input type="select" name="modDev" id="assignDev"
                                    value={props.data.modDev} onChange={props.handleInputChange}
                                    disabled={(props.data.projCreated === "no") ? true : false}>
                                    <option>-- select developer --</option>
                                    {/* To be loaded from profile collection */}
                                    <option>Meena</option>
                                    <option>Zac</option>
                                    <option>Patrick</option>
                                    <option>Adam</option>
                                    <option>Lucious</option>

                                </Input>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" defaultChecked={props.data.level1}
                                        onChange={props.handleCheckBox} disabled={(props.data.projCreated === "no") ? true : false} />{' '}
                                    Level 1 Module
                                    </Label>
                            </FormGroup>
                            <FormGroup>
                                <Input type="select" name="modParent" id="modParent"
                                    disabled={props.data.level1 === true ? true : false}
                                    value={props.data.modParent} onChange={props.handleInputChange}>
                                    <option>-- select parent --</option>
                                    {props.data.modules.map((e, key) => {
                                        if (e.level1module) {
                                            return <option key={key} value={e.mod_name}>{e.mod_name}</option>;
                                        }
                                    })}
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