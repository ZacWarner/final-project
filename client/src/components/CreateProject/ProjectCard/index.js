import React from "react";
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const addModule = (props) => {
    return (
        <Card className="m-1 card-props">
            <CardBody>
                <CardTitle><h5>Project Name: {props.data.projName}</h5><hr /></CardTitle>
                <CardSubtitle><h6>Project Owner: {props.data.projOwner}</h6></CardSubtitle>
                <Row>
                    <Col>
                        <p>Description: {props.data.projDesc}</p>
                    </Col>
                    <Col>
                        <p>Developers: {props.data.developers}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Start Date: {props.data.startDate}</p>
                    </Col>
                    <Col>
                        <p>Due Date: {props.data.dueDate}</p>
                    </Col>
                </Row>
                <Row>
                    <Button color="primary" className="mx-3" onClick={props.editProject}>Edit</Button>
                </Row>
            </CardBody>
        </Card>
    );
}

export default addModule;
