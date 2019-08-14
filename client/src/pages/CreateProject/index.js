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
        dueDate: "",
        projDesc: "",
        developers: [],
        modName: "",
        modDesc: "",
        modDev: "",
        modDueDate: "",
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
        console.log("logged!");
        console.log(this.state[name]);
    };
    handleDateChange = event => {
        var date = event.target.value;
        // date = new Date();
        console.log(date);
        this.setState({
            dueDate: date.toString()
        });
        console.log(this.state.dueDate);
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
                            {/* <ProjectForm data={this.state} name={this.state.projName} handleInputChange={this.handleInputChange} /> */}
                            <Form>
                                <Row form>
                                    <Col>
                                        <FormGroup>
                                            <Label for="projName">Project Name: </Label>
                                            <Input type="text" id="projName" name="projName" value={this.state.projName}
                                                placeholder="Project Name" onChange={this.handleInputChange} />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label for="dueDate">ETA: </Label>
                                            <Input
                                                type="date"
                                                name="dueDate"
                                                id="dueDate"
                                                value={this.state.dueDate}
                                                onChange={this.handleDateChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col>
                                        <FormGroup>
                                            <Label for="projDesc">Project Description:</Label>
                                            <Input type="textarea" name="projDesc" value={this.state.projDesc}
                                                id="projDesc" onChange={this.handleInputChange} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Button color="primary" className="m-2" onClick={this.createProject}>Create</Button>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                    <Card className="my-3 card-props">
                        <CardBody>
                            <CardTitle><h5>Add Module</h5><hr /></CardTitle>
                            <AddModule data={this.state} handleCheckBox={this.handleCheckBox} />
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