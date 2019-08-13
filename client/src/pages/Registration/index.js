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
        address1: "",
        address2: "",
        city: "",
        stateProvince: "",
        zip: "",

        //user=()=>{
            //api stuff to validate & save or throw err & display invalid fields as red
        //}
    };
   

    render() {
        return (
            <div className="page-body">
                <Navbar />
                <RegForm user={this.state.user} details={this.state} />
            </div>
        )
    }
};

export default Signup;