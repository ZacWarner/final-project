import React, { Component } from "react";
import { Col, Row, Container } from 'reactstrap';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import "../../components/styles/variables.scss";


class AboutUs extends Component {


    render() {
        return (
            <div className="page-body">
                <Navbar />
                <br></br>
                <Container>
                <Row>
                    <Col md={4}>
                        <Card />
                    </Col>
                    <Col md={4}>
                        <Card />
                    </Col>
                    <Col md={4}>
                        <Card />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md={1}/>
                    <Col md={4}>
                        <Card />
                    </Col>
                    <Col md={1}/>
                    <Col md={4}>
                        <Card />
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default AboutUs
