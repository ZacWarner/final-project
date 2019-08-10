import React, { Component } from "react";
import Navbar from '../../components/Navbar';
<<<<<<< HEAD
import NewUserForm from '../../components/NewUserForm';
=======
import RegForm from '../../components/NewUserForm';
import '../../components/styles/registrationPage.scss';
>>>>>>> a356833b5853f66536db32e727261627922e64b6





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
        return (
            <div>
                <Navbar />
                <NewUserForm details={this.state} />
            </div>
        )
=======
render() {
    return(
        <div className="page-body">
        <Navbar />
        <RegForm details={this.state}/>
        </div>
    )
>>>>>>> a356833b5853f66536db32e727261627922e64b6
    }
};

export default Signup;