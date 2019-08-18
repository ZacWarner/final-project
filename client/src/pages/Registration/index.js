import React, { Component } from "react";
import Navbar from '../../components/Navbar';
import RegForm from '../../components/NewUserForm';
import '../../components/styles/registrationPage.scss';
import API from '../../utils/API';




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


    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    saveUser = event => {
        event.preventDefault();
        console.log("Saved Informaiton for User" + event.target.id);

        // let userToSave = this.state.user.filter(user => user.id === event.target.id);
        let userDetails = {
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName,
            password: this.state.password,
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            stateProvince: this.state.stateProvince,
            zip: this.state.zip,
        }

        API.createUser(userDetails)
            .then(function (data) {
                window.location.replace("/profile");
            });
        //API.saveUser(userDetails)
        //    .then(alert('user info saved'))
        //    .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="page-body">
                <Navbar />
                <RegForm user={this.saveUser} handleInputChange={this.handleInputChange} details={this.state} />
            </div>
        )
    }
};

export default Signup;