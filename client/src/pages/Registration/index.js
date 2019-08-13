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

    handleInputChange = event => {
        const { username, value } = event.target;
        this.setState({
            [username]: value,
        });
    };

    saveUser = event => {
        console.log("Saved Informaiton for User" + event.target.id);
        
        let userToSave = this.state.user.filter(user => user.id === event.target.id);
        let userDetails = {
            email: userToSave[0].userInfo.email,
            firstName: userToSave[0].userInfo.firstName,
            lastName: userToSave[0].userInfo.lastName,
            userName: userToSave[0].userInfo.userName,
            password: userToSave[0].userInfo.password,
            address1: userToSave[0].userInfo.address1,
            address2: userToSave[0].userInfo.address2,
            city: userToSave[0].userInfo.city,
            stateProvince: userToSave[0].userInfo.stateProvince,
            zip: userToSave[0].userInfo.zip,
        }
        //console.log(UserDetails);
        //API.saveUser(userDetails)
        //    .then(alert('user info saved'))
        //    .catch(err => console.log(err))
    }

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