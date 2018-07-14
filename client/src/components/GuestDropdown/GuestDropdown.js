import React, { Component } from "react";
import InputText from '../InputText'
import API from "../../utils/API";

class GuestDropdown extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  state = {
    username: "",
    password: ""
  };

  handleChange(target) {
    this.setState({ [target.id]: target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    let login = {
      username: this.state.username,
      pasaword: this.state.password
    }
    API.login(login)
      .then(data => {
        console.log("Loged In!")
        this.handleClose
      });
  }
  handleClose(e) {
    e.preventDefault();
    this.setState({
      username: "",
      password: ""
    });
  }

  render() {
    return (
      <div className="pull-right">
        <a className="align-right" data-toggle="modal" data-target=".bs-modal-sm">
          <span className="glyphicon glyphicon-user" aria-hidden="true" />
        </a>
        <div className="modal fade bs-modal-sm" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">

          <div className="modal-dialog modal-sm">
            <div className="modal-content">

              <div className="modal-header">
                <h4 className="modal-title">Sign In
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.handleClose}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </h4>
              </div>

              <div className="modal-body">
                <form className="form-horizontal">
                  <fieldset className="container-fluid">
                    <InputText
                      id="username"
                      type="text"
                      placeholder="Username"
                      label="Username"
                      val={this.state.username}
                      onTextChange={this.handleChange}
                    />
                    <InputText
                      id="password"
                      type="password"
                      placeholder="Password"
                      label="Password"
                      val={this.state.password}
                      onTextChange={this.handleChange}
                    />
                    {/* Button */}
                    <div className="control-group">
                      <label className="control-label" htmlFor="signin" />
                      <div className="controls">
                        <button 
                          id="signin" 
                          name="signin" 
                          className="btn btn-success"
                          onClick={this.handleSubmit}>
                          Sign In
                        </button>
                      </div>
                    </div>

                  </fieldset>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GuestDropdown;
