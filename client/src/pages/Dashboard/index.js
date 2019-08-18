import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Navbar from '../../components/Navbar';
import Pie from '../../components/Dashboard/Pie';
import Tree from '../../components/Dashboard/Tree';
import Projphase from '../../components/Dashboard/Stepprogress';
import Projsummary from '../../components/Dashboard/Projsummary';
import Moduleprogress from '../../components/Dashboard/Moduleprogress';
import API from '../../utils/API';

class Dashboard extends Component {

    state = {
        pieData: {},
        treeData: {},
        projSum: {},
        overallPercentage: 0
    };

    componentDidMount = () => {
        //Grab Data from db
        console.log("Proj id: " + this.props.match.params.id);
        API.getProject(this.props.match.params.id)
            .then(res => {
                console.log(res);
                this.overallstatus(res);
                this.setState({
                    projSum: this.dataSummary(res)
                });
                console.log(this.state.projSum);

            })
            .catch(err => console.log(err));
    }

    overallstatus(res) {

    }

    dataSummary(res) {
        let summary = {};
        summary.projName = res.data.proj_name;
        summary.projOwner = res.data.proj_owner;
        summary.start_date = res.data.start_date;
        summary.due_date = res.data.due_date;

        return summary;
    }

    render() {
        return (
            <>
                <Navbar />
                <Container>
                    <Row className="mt-3">
                        <Col md="3">
                            <Projsummary

                            />
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