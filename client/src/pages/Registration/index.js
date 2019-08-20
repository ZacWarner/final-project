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

    CheckPassword(inputtxt) {
        var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if (inputtxt.match(paswd)) {

            return true;
        }
        else {
            alert('passwords must be between 7 and 15 characters, containing at least one numeric digit & one special character')
            return false;
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        //console.log(name, value);
        this.setState({
            [name]: value,
        });

    };

    saveUser = event => {
        event.preventDefault();
        console.log("Saved Information for User" + event.target.id);

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
        let profileData = {
            dev_name: this.state.userName
        }
        console.log(userDetails);

        this.CheckPassword(this.state.password);



        API.createUser(userDetails)
            .then(function (data) {
                API.createDevProfile(profileData)
                    .then(function (res) {
                        window.location.replace("/profile/" + res.data._id);
                    });
            });

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