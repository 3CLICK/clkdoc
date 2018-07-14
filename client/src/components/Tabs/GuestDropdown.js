import React from "react";
import "./GuestDropdown.css";

const GuestDropdown = props =>


<div className="pull-right">
        <a className="align-right" href="#signup" data-toggle="modal" data-target=".bs-modal-sm">
          <span className="glyphicon glyphicon-user" aria-hidden="true" />
        </a>
        <div className="modal fade bs-modal-sm" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <br />
              <div className="bs-example bs-example-tabs">
                <ul id="myTab" className="nav nav-tabs">
                  <li className="active"><a href="#signin" data-toggle="tab"><h5>Sign In</h5></a></li>
                  <li className><a href="#signup" data-toggle="tab"><h5>Register</h5></a></li>
                  <li className><a href="#why" data-toggle="tab"><h5>Why?</h5></a></li>
                </ul>
              </div>
              <div className="modal-body">
                <div id="myTabContent" className="tab-content">
                  <div className="tab-pane fade in" id="why">
                    <h6>We need this information so that you can receive access to the site and its content. Rest assured your information will not be sold, traded, or given to anyone.</h6>
                  </div>
                  <div className="tab-pane fade active in" id="signin">
                    <form className="form-horizontal">
                      <fieldset>
                        {/* Sign In Form */}
                        {/* Text input*/}
                        <div className="control-group">
                          <h4 className="control-label" htmlFor="userid">UserName:</h4>
                          <div className="controls">
                            <input required id="userid" name="userid" type="text" className="form-control" placeholder="JoeSixpack" />
                          </div>
                        </div>
                        {/* Password input*/}
                        <div className="control-group">
                          <h4 className="control-label" htmlFor="passwordinput">Password:</h4>
                          <div className="controls">
                            <input required id="passwordinput" name="passwordinput" className="form-control" type="password" placeholder="********" />
                          </div>
                        </div>
                        {/* Multiple Checkboxes (inline) */}
                        <div className="control-group">
                          <label className="control-label" htmlFor="rememberme" />
                          <div className="controls">
                            <h5 className="checkbox inline" htmlFor="rememberme-0">
                              <input type="checkbox" name="rememberme" id="rememberme-0" defaultValue="Remember me" />
                              Remember me
                            </h5>
                          </div>
                        </div>
                        {/* Button */}
                        <div className="control-group">
                          <label className="control-label" htmlFor="signin" />
                          <div className="controls">
                            <button id="signin" name="signin" className="btn btn-success">Sign In</button>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                  <div className="tab-pane fade" id="signup">
                    <form className="form-horizontal">
                      <fieldset>
                        {/* Sign Up Form */}
                        {/* Text input*/}
                        <div className="control-group">
                          <h4 className="control-label" htmlFor="Email">Email:</h4>
                          <div className="controls">
                            <input id="Email" name="Email" className="form-control" type="text" placeholder="JoeSixpack@sixpacksrus.com" required />
                          </div>
                        </div>
                        {/* Text input*/}
                        <div className="control-group">
                          <h4 className="control-label" htmlFor="userid">Username:</h4>
                          <div className="controls">
                            <input id="userid" name="userid" className="form-control" type="text" placeholder="JoeSixpack" required />
                          </div>
                        </div>
                        {/* Password input*/}
                        <div className="control-group">
                          <h4 className="control-label" htmlFor="password">Password:</h4>
                          <div className="controls">
                            <input id="password" name="password" className="form-control" type="password" placeholder="********" required />
                            <em><h6 className="pull-left">1-8 Characters</h6></em>
                          </div>
                        </div>
                        {/* Text input*/}
                        <div className="control-group">
                          <h4 className="control-label pull-right" htmlFor="reenterpassword">Re-Enter Password:</h4>
                          <div className="controls">
                            <input id="reenterpassword" className="form-control" name="reenterpassword" type="password" placeholder="********" required />
                          </div>
                        </div>
                        {/* Multiple Radios (inline) */}
                        <br />
                        <div className="control-group">
                          <h4 className="control-label pull-left" htmlFor="humancheck">Humanity Check:</h4>
                          <div className="controls">
                            <h5 className="radio inline" htmlFor="humancheck-0">
                              <input type="radio" name="humancheck" id="humancheck-0" defaultValue="robot" defaultChecked="checked" />I'm a Robot</h5>
                            <h5 className="radio inline" htmlFor="humancheck-1">
                              <input type="radio" name="humancheck" id="humancheck-1" defaultValue="human" />I'm Human</h5>
                          </div>
                        </div>
                        {/* Button */}
                        <div className="control-group">
                          <label className="control-label" htmlFor="confirmsignup" />
                          <div className="controls">
                            <button id="confirmsignup" name="confirmsignup" className="btn btn-success">Sign Up</button>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <center>
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>  



export default GuestDropdown;
