import React from "react";
import {
    Card, CardBody,
    CardTitle, Button, Row, Col
} from 'reactstrap';
import Moment from 'moment';

const addModule = (props) => {
    return (

        <Card className="m-1 card-props">
            {console.log("module card")}
            {console.log(props.data)}
            <CardBody>
                <CardTitle><h5>Module Name: {props.data.mod_name}</h5><hr /></CardTitle>
                <Row>
                    <Col>
                        <p>Assigned to: {props.data.developer}</p>
                    </Col>
                    <Col>
                        <p>Due Date: {Moment(props.data.mod_due).format('YYYY-MM-DD')}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Description: {props.data.mod_description}</p>
                    </Col>
                </Row>

                <Button color="primary">Delete</Button>
            </CardBody>
        </Card>
    );
}

export default addModule;
