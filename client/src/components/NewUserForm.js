import React from 'react';

function NewUserForm(props) {
    return (
        <div>
            <form className="needs-validation" novalidate>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label for="validationTooltip01">First name</label>
                        <input type="text" className="form-control" id="validationTooltip01" placeholder="First name" value={this.state.firstname} required></input>
                        <div class="valid-tooltip">
                            Looks good!
      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="validationTooltip02">Last name</label>
                        <input type="text" className="form-control" id="validationTooltip02" placeholder="Last name" value={this.state.lastname} required></input>
                        <div className="valid-tooltip">
                            Looks good!
      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="validationTooltipUsername">Username</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="validationTooltipUsernamePrepend">@{this.state.username}</span>
                            </div>
                            <input type="text" className="form-control" id="validationTooltipUsername"  placeholder="Username" value={this.state.username} aria-describedby="validationTooltipUsernamePrepend" required></input>
                            <div className="invalid-tooltip">
                                Please choose a unique and valid username.
        </div>
                        </div>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <p>Will you be managing projects?</p>
                        <input type="checkbox" className="custom-control-input" id="customCheck1"></input>
                        <label className="custom-control-label" for="customCheck1">Yes</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="validationTooltip03">City</label>
                        <input type="text" className="form-control" id="validationTooltip03" placeholder="City" value= {this.state.city} required></input>
                        <div className="invalid-tooltip">
                            Please provide a valid city.
      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label for="validationTooltip04">State</label>
                        <input type="text" class="form-control" id="validationTooltip04" placeholder="State" value={this.state.state} required></input>
                        <div className="invalid-tooltip">
                            Please provide a valid state.
      </div>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewUserForm