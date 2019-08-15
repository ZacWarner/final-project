import React, { Component } from "react";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

class Projsummary extends Component {

    componentDidMount() {
        //Manipulate Data
    }

    render() {
        return (
            <Card className="m-1 card-props">
                <CardBody>
                    <CardTitle><h5>Project Name</h5><hr /></CardTitle>
                    <CardSubtitle><h6>Project Owner</h6></CardSubtitle>
                    <CardText>
                        <p>Start Date: ***</p>
                        <p>End Date: ***</p>
                        <p>Overall Status: ** %</p>
                    </CardText>
                </CardBody>
            </Card>
        );
    }
}

export default Projsummary;
