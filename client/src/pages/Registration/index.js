import React, {Component} from "react";
import Navbar from '../../components/Navbar';
import NewUserForm from '../../components/NewUserForm';




class User extends Component{
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
        <div>
        <Navbar />
        <NewUserForm details={this.state}/>
        </div>
    )
    }
};

export default User