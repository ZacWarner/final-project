import React, { Component } from 'react';
import {
    Container, Row, Col, Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Navbar from '../../components/Navbar';

class Dashboard extends Component {

    state = {
        pieData: {},
        treeData: {}
    };

    componentDidMount = () => {
        //Manipulate Data
    }

    render() {
        return (
            <>
                <Navbar />
                <Container>
                    <h1 style={{ color: 'white' }}>Project Page:
                    <ul>
                            <li>
                                Overview
                        </li>
                            <li>
                                update progress
                        </li>
                        </ul>
                    </h1>
                </Container>
            </>
        );
    }
}

export default Dashboard;
