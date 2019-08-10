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
                        <Col md="3" className='bordered'>
                            <Projsummary/>
                        </Col>
                        <Col className='bordered'>
                            <Projphase />
                        </Col>
                        <Col md="3" className='bordered'>
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
                        <Col className='bordered'>
                            <Tree data={this.state.treeData} />
                        </Col>
                        <Col className='bordered'>
                            <h5>Module Progress</h5>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Dashboard;
