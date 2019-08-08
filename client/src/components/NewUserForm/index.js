import React from 'react';
// import '../styles/variables';



function NewUserForm(props) {
    return (
        <div>
            <form className="needs-validation" novalidate>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label for="validationTooltip01">First name</label>
                        <input type="text" className="form-control" id="validationTooltip01" placeholder="First name" value={props.details.firstname} required></input>

                        <div class="valid-tooltip">
                            Looks good!
      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="validationTooltip02">Last name</label>
                        <input type="text" className="form-control" id="validationTooltip02" placeholder="Last name" value={props.details.lastname} required></input>
                        <div className="valid-tooltip">
                            Looks good!
      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="validationTooltipUsername">Username</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                            </div>
                            <input type="text" className="form-control" id="validationTooltipUsername" placeholder="Username" value={props.details.username} aria-describedby="validationTooltipUsernamePrepend" required></input>
                            <div className="invalid-tooltip">
                                Please choose a unique and valid username.
        </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" value={props.details.email}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={props.details.password}></input>
                        </div>
                    </div>

                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="validationTooltip03">City</label>
                        <input type="text" className="form-control" id="validationTooltip03" placeholder="City" value={props.details.city} required></input>
                        <div className="invalid-tooltip">
                            Please provide a valid city.
      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label for="validationTooltip04">State</label>
                        <input type="text" class="form-control" id="validationTooltip04" placeholder="State" value={props.details.stateProvince} required></input>
                        <div className="invalid-tooltip">
                            Please provide a valid state.
      </div>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit" onClick={props.details.submit}>Submit</button>
            </form>
        </div>
    )
}

export default NewUserForm