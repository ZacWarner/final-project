import React from "react";
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const addModule = (props) => {
    return (
        <Card className="m-1 card-props">
            <CardBody>
                <CardTitle><h5>Module Name: {props.data.name}</h5><hr /></CardTitle>
                <CardSubtitle><h6>Project Owner: {props.data.owner}</h6></CardSubtitle>
                <p>Description: {props.data.desc}</p>
                <p>Due Date: {props.data.due}</p>
                <p>Assigned to: {props.data.dev}</p>
                <Button color="primary">Delete</Button>
            </CardBody>
        </Card>
    );
}

export default addModule;
