import React from "react";
import "../../images.JSON";
import "./style.css";



function Card(props) {

    return (
        <div>
            <div className="card">
                <img src={props.imageURL} class="card-img-top" alt={props.name} clicked={props.clicked}></img>
                <div className="card-body">
                    <p className="card-text">{props.name}</p>
                </div>
            </div>
        </div>
    )
}



export default Card;