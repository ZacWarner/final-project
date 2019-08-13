import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../../components/Navbar';
import Pie from '../../components/Dashboard/Pie';
import Tree from '../../components/Dashboard/Tree';
import Projphase from '../../components/Dashboard/Stepprogress';
import Projsummary from '../../components/Dashboard/Projsummary';
import Moduleprogress from '../../components/Dashboard/Moduleprogress';

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
                    <Row className="mt-3">
                        <Col md="3">
                            <Projsummary />
                        </Col>
                        <Col className="text-center">
                            <Projphase />
                        </Col>
                        <Col md="3" className="text-center">
                            <Pie
                                data={this.state.pieData}
                                width={140}
                                height={140}
                                innerRadius={35}
                                outerRadius={70}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6" className="text-center">
                            <Tree data={this.state.treeData} />
                        </Col>
                        <Col className="text-center">
                            <Moduleprogress />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Dashboard;
