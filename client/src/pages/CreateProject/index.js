import React, { Component } from 'react';
import {
    Container, Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import Navbar from '../../components/Navbar';
import ProjectForm from '../../components/CreateProject/CreateProjectForm';
import AddModule from '../../components/CreateProject/AddModuleForm';
import ModuleCard from '../../components/CreateProject/ModuleCard';
import ProjectCard from '../../components/CreateProject/projectCard';
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
        modules: [
            {
                name: "chk",
                owner: "check",
                desc: "chk check",
                due: "date",
                dev: "developer"
            }
        ]
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
            }
            )
            .catch(err => console.log(err));
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
                    modules: res.data.modules
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
                        (<ProjectCard data={this.state} />)
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