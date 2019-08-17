import React, { Component } from 'react';
import {
    Container, Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import Navbar from '../../components/Navbar';
import ProjectForm from '../../components/CreateProject/CreateProjectForm';
import AddModule from '../../components/CreateProject/AddModuleForm';
import ModuleCard from '../../components/CreateProject/ModuleCard';
import ProjectCard from '../../components/CreateProject/ProjectCard';
import API from '../../utils/API';


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
        level1: true,

        projCreated: "no",
        projId: "",
        modules: []
    };
    modules = [];

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
                        projId: res.data._id
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

    render() {
        return (
            <div className="page-body">
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
                    <Card className="my-3 card-props">
                        <CardBody>
                            <CardTitle><h5>Add Module</h5><hr /></CardTitle>
                            <AddModule data={this.state} handleInputChange={this.handleInputChange}
                                handleCheckBox={this.handleCheckBox} handleAddModule={this.addModule} />
                        </CardBody>
                    </Card>
                    <div className="modules">
                        {this.state.modules.map(module => (
                            <ModuleCard key={module.id} data={module} />
                        ))}
                    </div>
                </Container>
            </div>
        )
    }
};

export default Project;