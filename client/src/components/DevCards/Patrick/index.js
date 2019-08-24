import React from 'react';
import '../../styles/AboutUs/devcard.scss'
import '../../styles/variables.scss';
import { FaLinkedin } from 'react-icons/fa';



function Patrick() {

    return (
        <div>
            <div className="card dev-card">
            
                <img src="https://avatars2.githubusercontent.com/u/48222005?s=460&v=4" className="card-img-top"></img>
                    <div className="card-body">
                    <h3>Patrick Owens</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h4>Skillset:</h4>
                    <ul>
                        <li>Skill</li>
                        <li>Skill</li>
                        <li>Skill</li>
                        <li>Skill</li>
                        <li>Skill</li>
                    </ul>
                    

                    <a href='https://www.linkedin.com/in/patrick-owens-9a99b7163/'><FaLinkedin className="aboutIcon" /></a>
                    
                    
                        
                </div>
            </div>
        </div>
    )
}



export default Patrick;