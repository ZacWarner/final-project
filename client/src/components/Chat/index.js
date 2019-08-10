import React from 'react';
import socketIOClient from "socket.io-client";
import { Card, CardHeader, CardBody, CardFooter, Input, InputGroup, Button, FormGroup, InputGroupAddon } from 'reactstrap';


export default class Chat extends React.Component {
    constructor() {
        super();
        this.state = {
            search: "",
            response: 0,
            endpoint: "http://127.0.0.1:3001",

        };
    }



    componentDidMount() {
        const { endpoint } = this.state;
        //Very simply connect to the socket
        const socket = socketIOClient(endpoint);

    }
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.emit('chat message', this.state.search);
        console.log(this.state.search);
    };




    render() {
        return (
            <Card>
                <CardHeader>chat!</CardHeader>
                <CardBody>

                </CardBody>
                <CardFooter>
                    <InputGroup>
                        <Input
                            placeholder="Type to chat!"
                            value={this.search}
                            onChange={this.handleInputChange}
                        />
                        <InputGroupAddon addonType="append">
                            <Button
                                color="success"
                                onClick={this.handleFormSubmit}
                            >
                                Enter
                                </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </CardFooter>
            </Card>

        )
    }
}