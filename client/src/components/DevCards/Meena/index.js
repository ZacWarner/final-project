import React from 'react';
import '../../styles/AboutUs/devcard.scss'
import '../../styles/variables.scss';



function Meena() {

    return (
        <div>
            <div className="card dev-card">
                <img src="https://media.licdn.com/dms/image/C5603AQG51vY3J2NrMg/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=5J70va6sfQZhCKHSqaQw_--pnbKOT8gDhnE4rpPkG-c" className="card-img-top"></img>
                <div className="card-body">
                    <h3>Meena</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h4>Skillset:</h4>
                    <ul>
                        <li>Skill</li>
                        <li>Skill</li>
                        <li>Skill</li>
                        <li>Skill</li>
                        <li>Skill</li>
                    </ul>
                    <a href="http://www.linkedin.com/in/selvameena-s">LinkedIn Profile</a>
                </div>
            </div>
        </div>
    )
}



export default Meena;