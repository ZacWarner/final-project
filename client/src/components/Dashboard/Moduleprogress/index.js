import React, { createRef, Component } from "react";
import Progressbar from "../Progressbar";
import './style.css';

class ProjPhase extends Component {
    constructor(props) {
        super(props);
        this.ref = createRef();
        this.state = {
            //Temporary Hard Coded Data
            dataRecords: [
                { id: "_id", name: "Dashboard", owner: "Meena", due: "date", subcount: 5, progress: 3 },
                { id: "_id", name: "Chat", owner: "Zac", due: "date", subcount: 2, progress: 1 },
                { id: "_id", name: "User", owner: "Patrick", due: "date", subcount: 3, progress: 2 },
                { id: "_id", name: "Authentication", owner: "Lucious", due: "date", subcount: 2, progress: 1 },
                { id: "_id", name: "Profile", owner: "Adam", due: "date", subcount: 3, progress: 1 },
            ]
        }
    }
    componentDidMount() {
        //Manipulate Data
        //set them on state
    }

    renderTableData() {
        return this.state.dataRecords.map((data, index) => {
            const { id, name, owner, due, subcount, progress } = data
            return (
                <tr key={id}>
                    <td>{name}</td>
                    <td>{owner}</td>
                    <td>{due}</td>
                    <td>{<Progressbar count={subcount} complete={progress} />}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h5>Table</h5>
                <table id='module_progress' className="m-1">
                    <tbody>
                        <tr>
                            <th>Module Name</th>
                            <th>Module Owner</th>
                            <th>Due Date</th>
                            <th>Progress</th>
                        </tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProjPhase;
