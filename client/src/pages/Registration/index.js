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

<<<<<<< HEAD
render() {
    return(
        <div>
        <Navbar />
        <RegForm details={this.state}/>
        </div>
    )
=======
    render() {
        return (
            <div>
                <Navbar />
                <NewUserForm details={this.state} />
            </div>
        )
>>>>>>> ba850862069a78fa4c954a49e7d0c04ddc923983
    }
};

export default Signup;