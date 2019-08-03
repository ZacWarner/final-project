import React, {Component} from "react";
import Navbar from '../../components/Navbar';
import NewUserForm from '../../components/NewUserForm';




class NewUserForm extends Component{
    User(){
    email= props.email,
    firstName= props.firstName,
    lastName= props.lastName,
    userName= props.userName,
    password= props.password,
    city= props.city,
    state= props.state
    }
}

function NewUserForm(props){
    return(
        <div>
        <Navbar />
        <NewUserForm />
        </div>
    )
}