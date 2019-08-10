import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input } from 'reactstrap';


export default class Chat extends React.Component {



    render() {
        return (
            <Card>
                <CardHeader>{this.props.title}</CardHeader>
                <CardBody>

                </CardBody>
                <CardFooter>
                    <Input></Input>
                </CardFooter>

            </Card>

        )
    }
}