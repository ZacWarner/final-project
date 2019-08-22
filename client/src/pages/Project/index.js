import React, { Component } from 'react';
import ProjectCard from '../../components/CreateProject/ProjectCard';
import StepProgress from '../../components/Dashboard/Stepprogress';
import Pie from '../../components/Dashboard/Pie';
import ModuleCard from '../../components/CreateProject/ModuleCard';
import {
    Container, Jumbotron, Row, Col, Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem
} from 'reactstrap';
import Navbar from '../../components/Navbar';
import API from '../../utils/API';
import ProjectForm from '../../components/CreateProject/CreateProjectForm';
import Chat from '../../components/Chat';
import AddModule from '../../components/CreateProject/AddModuleForm';

class Dashboard extends Component {

    state = {
        projName: "project 1",
        projOwner: "Zac",
        startDate: "8/17/2019",
        dueDate: "8/28/2019",
        projDesc: "It's this website",
        modName: "",
        modDesc: "",
        modDev: "",
        modDueDate: "",
        modParent: "",
        developers: [],
        level1: true,
        pieData: {},
        projCreated: "yes",
        projId: "1",
        modules: [],
        navigateTo: "",
        usrName: "Zac",
        dashBoardLink: "",
    };

    componentDidMount = () => {
        // const url = "/dashboard/" + this.props.match.params.id;
        // this.setState({ dashBoardLink: url });
        // console.log(this.state);
        console.log("ProjId: " + this.props.match.params.id);
        API.getProject(this.props.match.params.id)
            .then(res => {
                console.log(res);
                this.setState({
                    projName: res.data.proj_name,
                    projOwner: res.data.proj_owner,
                    startDate: res.data.start_date,
                    dueDate: res.data.due_date,
                    projDesc: res.data.proj_description,
                    projId: res.data._id,
                    modules: res.data.modules,
                    developers: res.data.developers,
                    dashBoardLink: "/dashboard/" + res.data._id
                });
            });
        console.log("new state:");
        console.log(this.state);
    }

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
        if (this.state.projId === "") {
            console.log("Calling createProject");
            API.addProject({
                proj_name: this.state.projName,
                proj_owner: "filler",
                proj_description: this.state.projDesc,
                start_date: this.state.startDate,
                due_date: this.state.dueDate
            })
                .then(res => {
                    console.log(res);
                    this.setState({
                        projCreated: "yes",
                        projId: res.data._id,
                        navigateTo: "/project/" + res.data._id
                    })
                    console.log(this.state);
                })
                .catch(err => console.log(err));
        } else {
            console.log("Calling updateProject");
            API.updateProject(this.state.projId, {
                proj_name: this.state.projName,
                proj_owner: "filler",
                proj_description: this.state.projDesc,
                start_date: this.state.startDate,
                due_date: this.state.dueDate
            })
                .then(res => {
                    console.log(res);
                    this.setState({
                        projCreated: "yes",
                        projId: res.data._id
                    })
                    console.log(this.state);
                })
                .catch(err => console.log(err));
        }
    }

    editProject = () => {
        console.log("Updating Project");
        this.setState({
            projCreated: "no"
        })
    }

    addModule = () => {
        API.addModule(this.state.projId, {
            mod_name: this.state.modName,
            mod_description: this.state.modDesc,
            developer: this.state.modDev,
            mod_due: this.state.modDueDate,
            parent: this.state.modParent,
            level1module: this.state.level1
        })
            .then(res => {
                console.log(res);
                this.setState({
                    modules: res.data.modules,
                    modName: "",
                    modDesc: "",
                    modDev: "",
                    modDueDate: "",
                    modParent: "",
                    level1: true
                })
                console.log(this.state);
            })
            .catch(err => console.log(err));
    }

    delModule = (modId) => {
        API.deleteModule(this.state.projId, modId)
            .then(res => {
                console.log(res);
                // To update this.state.modules
                API.getProject(this.state.projId)
                    .then(res => {
                        console.log(res);
                        this.setState({
                            modules: res.data.modules
                        })
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    markComplete = (modId) => {
        API.updateModule(this.state.projId, modId, {
            complete: true
        })
            .then(res => {
                console.log(res);
                // To update this.state.modules
                API.getProject(this.state.projId)
                    .then(res => {
                        console.log(res);
                        this.setState({
                            modules: res.data.modules
                        })
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <>
                <Navbar />
                <Container>
                    {this.state.projCreated === "no" ?
                        (<Card className="my-3 card-props">
                            <CardBody>
                                <CardTitle><h5>Create New Project</h5><hr /></CardTitle>
                                <CardSubtitle><h6>Project owner: <i>LoggedIn User Name</i></h6></CardSubtitle>
                                <ProjectForm data={this.state} handleInputChange={this.handleInputChange} createProject={this.createProject} />
                            </CardBody>
                        </Card>) :
                        (<ProjectCard data={this.state} editProject={this.editProject} />)
                    }
                    <Jumbotron className="bg-transparent text-center border-dark">
                        <Row>
                            <Col md="4">
                                <Pie data={this.state.pieData}
                                    width={140}
                                    height={140}
                                    innerRadius={35}
                                    outerRadius={70}> </Pie>
                            </Col>
                            <Col md="8">
                                <StepProgress></StepProgress>
                            </Col>
                        </Row>
                        <a href={this.state.dashBoardLink}>
                            <Button color="primary" onclick={this.dashBoardLink}>Project Dashboard</Button>
                        </a>
                    </Jumbotron>

                    <Chat projectid={this.state.projId} name={this.state.usrName} chatname={this.state.projName}></Chat>

                    <Row>
                        <div className="modules">
                            {this.state.modules.map(module => (
                                <ModuleCard key={module.id} data={module} delModule={this.delModule} markComplete={this.markComplete} />
                            ))}
                        </div>

                    </Row>
                    <Card className="my-3 card-props">
                        <CardBody>
                            <CardTitle><h5>Add Module</h5><hr /></CardTitle>
                            <AddModule data={this.state} handleInputChange={this.handleInputChange}
                                handleCheckBox={this.handleCheckBox} handleAddModule={this.addModule} />
                        </CardBody>
                    </Card>
                </Container>
            </>
        );
    }
}

export default Dashboard;
