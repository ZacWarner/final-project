import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import Navbar from '../../components/Navbar';
import ProjectForm from '../../components/CreateProjectForm';
import Card from '../../components/Card';


class Project extends Component {
    state = {
        projectName: "",
        startDate: "",
        endDate: "",

        //project=()=>{
            //api stuff to validate & save or throw err & display invalid fields as red
        //}
    };
   

    render() {
        return (
            <div className="page-body">
                <Navbar />
                <br></br>
                <Row>
                <Col md={8}>
                <ProjectForm />
                </ Col>
                <Col md={3}>
                <Card />
                </Col>
                </Row>
            </div>
        )
    }
};

export default Project;