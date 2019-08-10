import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../../components/Navbar';
import Pie from '../../components/Dashboard/Pie';
import Tree from '../../components/Dashboard/Tree';
import Projphase from '../../components/Dashboard/Stepprogress';
import Projsummary from '../../components/Dashboard/Projsummary';

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
                    <Row>
                        <Col md="3">
                            <Projsummary/>
                        </Col>
                        <Col>
                            <Projphase />
                        </Col>
                        <Col md="3">
                            <Pie
                                data={this.state.pieData}
                                width={200}
                                height={200}
                                innerRadius={60}
                                outerRadius={100}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Tree data={this.state.treeData} />
                        </Col>
                        <Col>
                            <h5 className="text-center">Module Progress</h5>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Dashboard;
