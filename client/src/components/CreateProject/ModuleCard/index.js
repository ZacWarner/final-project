import React from "react";
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const addModule = (props) => {
    return (

        <Card className="m-1 card-props">
            {console.log("module card")}
            {console.log(props.data)}
            <CardBody>
                <CardTitle><h5>Module Name: {props.data.mod_name}</h5><hr /></CardTitle>
                {/* <CardSubtitle><h6>Project Owner: {props.data.developer}</h6></CardSubtitle> */}
                <p>Description: {props.data.mod_description}</p>
                <p>Due Date: {props.data.mod_due}</p>
                <p>Assigned to: {props.data.developer}</p>
                <Button color="primary">Delete</Button>
            </CardBody>
        </Card>
    );
}

export default addModule;
