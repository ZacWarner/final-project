import React from 'react';
import socketIOClient from "socket.io-client";
import API from "../../utils/API";
import { Card, CardHeader, CardBody, CardFooter, Input, InputGroup, Button, ListGroup, ListGroupItem, InputGroupAddon } from 'reactstrap';



export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            response: 0,
            endpoint: "http://127.0.0.1:3001",
            chatHistory: [],
            projectId: 0,
            name: "",
        };


    }



    componentDidMount() {
        const { endpoint } = this.state;
        //Very simply connect to the socket
        const socket = socketIOClient(endpoint);
        socket.on('chat message', data => this.onMessageReceived(data));

        const projectId = parseInt(this.props.projectid);

        const name = this.props.name;
        this.setState({ projectId: projectId });
        this.setState({ name: name });

        this.getChatHistory(projectId);

    }

    getChatHistory(id) {
        API.getChat(id)
            .then(res => {
                this.setState({ chatHistory: res.data });
                console.log(res.data);
            });

    };

    addChatHistory() {
        const msg = this.state.message;
        const projectId = this.state.projectId;
        const name = this.state.name;
        API.saveChat({
            projectId: projectId,
            message: msg,
            name: name,
        });
    }

    handleInputChange = event => {
        this.setState({ message: event.target.value })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.emit('chat message', this.state.message);
        this.addChatHistory();

    };

    onMessageReceived(msg) {
        const chatHistory = this.state.chatHistory;
        const projectId = this.state.projectId;
        const name = this.state.name;
        const chat = {
            projectId: projectId,
            message: msg,
            name: name
        }
        chatHistory.push(chat);
        this.setState(chatHistory);
    }



    render() {
        return (
            <Card projectid={this.props.projectid}>
                <CardHeader>{this.props.chatname}</CardHeader>
                <CardBody>
                    <ListGroup>
                        {this.state.chatHistory.map(msg => (
                            <ListGroupItem className="border-0" key={msg._id}>{msg.name}: {msg.message}</ListGroupItem>
                        )

                        )}
                    </ListGroup>
                </CardBody>
                <CardFooter>
                    <InputGroup>
                        <Input
                            placeholder="Type to chat!"
                            value={this.message}
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