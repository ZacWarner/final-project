import React, { Component } from 'react';
import {
    Container, Card, CardBody,
    CardTitle, CardSubtitle, Form, Row, Col, FormGroup, Label, Input, Button
} from 'reactstrap';
import Navbar from '../../components/Navbar';
import ProjectForm from '../../components/CreateProject/CreateProjectForm';
import AddModule from '../../components/CreateProject/AddModuleForm';
import ModuleCard from '../../components/CreateProject/ModuleCard';


class Project extends Component {
    state = {
        projName: "",
        projOwner: "",
        startDate: "",
        dueDate: "",
        projDesc: "",
        developers: [],
        modName: "",
        modDesc: "",
        modDev: "",
        modDueDate: "",
        modParent: "",
        level1: true
    };
    modules = [
        // {
        //     name: "chk",
        //     owner: "check",
        //     desc: "chk check",
        //     due: "date",
        //     dev: "developer"
        // }
    ];

    handleCheckBox = () => {
        this.setState({ level1: !this.state.level1 });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    };

    createProject = () => {
        //API
    }

    render() {
        return (
            <div className="page-body">
                <Navbar />
                <Container>
                    <Card className="my-3 card-props">
                        <CardBody>
                            <CardTitle><h5>Create New Project</h5><hr /></CardTitle>
                            <CardSubtitle><h6>Project owner: <i>LoggedIn User Name</i></h6></CardSubtitle>
                            <ProjectForm data={this.state} handleInputChange={this.handleInputChange} />
                        </CardBody>
                    </Card>
                    <Card className="my-3 card-props">
                        <CardBody>
                            <CardTitle><h5>Add Module</h5><hr /></CardTitle>
                            <AddModule data={this.state} handleInputChange={this.handleInputChange} handleCheckBox={this.handleCheckBox} />
                        </CardBody>
                    </Card>
                    <div className="modules">
                        {this.modules.map(module => (
                            <ModuleCard data={module} />
                        ))}
                    </div>
                </Container>
            </div>
        )
    }
};

export default Project;