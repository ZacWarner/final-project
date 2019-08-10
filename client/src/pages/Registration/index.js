import React, { Component } from "react";
import Navbar from '../../components/Navbar';
import RegForm from '../../components/NewUserForm';
import '../../components/styles/registrationPage.scss';





class Signup extends Component {
    state = {
        email: "",
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        city: "",
        stateProvince: ""
    }

render() {
    return(
        <div className="page-body">
        <Navbar />
        <RegForm details={this.state}/>
        </div>
    )
    }
};

export default Signup;