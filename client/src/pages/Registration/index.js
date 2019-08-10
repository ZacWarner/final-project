import React, { Component } from "react";
import Navbar from '../../components/Navbar';
import RegForm from '../../components/NewUserForm';





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
        return (
            <div>
                <Navbar />
                <RegForm details={this.state} />
            </div>
        )
    }
};

export default Signup;