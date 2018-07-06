import React from "react";
import "./Footer.css";


const Nav = props => (
<nav class="navbar" style="background-color: #ffffff;">
  <div class="container-fluid text-center">
  <h1>
       
  <a class="align-left">
      <span class="glyphicon glyphicon-th pull-left" aria-hidden="true"></span>
  </a>

      <strong>clkDoc</strong>

  <a class="align-right">
      <span class="glyphicon glyphicon-user pull-right" aria-hidden="true"></span>
  </a>
  
  </h1>
  </div>
</nav>

<div class="modal fade bs-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
        <br>
        <div class="bs-example bs-example-tabs">
            <ul id="myTab" class="nav nav-tabs">
              <li class="active"><a href="#signin" data-toggle="tab"><h5>Sign In</h5></a></li>
              <li class=""><a href="#signup" data-toggle="tab"><h5>Register</h5></a></li>
              <li class=""><a href="#why" data-toggle="tab"><h5>Why?</h5></a></li>
            </ul>
        </div>
      <div class="modal-body">
        <div id="myTabContent" class="tab-content">
        <div class="tab-pane fade in" id="why">
        <h6>We need this information so that you can receive access to the site and its content. Rest assured your information will not be sold, traded, or given to anyone.</h6>
        </div>
        <div class="tab-pane fade active in" id="signin">
            <form class="form-horizontal">
            <fieldset>
            <!-- Sign In Form -->
            <!-- Text input-->
            <div class="control-group">
              <h4 class="control-label" for="userid">UserName:</h4>
              <div class="controls">
                <input required="" id="userid" name="userid" type="text" class="form-control" placeholder="JoeSixpack" class="input-medium" required="">
              </div>
            </div>

            <!-- Password input-->
            <div class="control-group">
              <h4 class="control-label" for="passwordinput">Password:</h4>
              <div class="controls">
                <input required="" id="passwordinput" name="passwordinput" class="form-control" type="password" placeholder="********" class="input-medium">
              </div>
            </div>

            <!-- Multiple Checkboxes (inline) -->
            <div class="control-group">
              <label class="control-label" for="rememberme"></label>
              <div class="controls">
                <h5 class="checkbox inline" for="rememberme-0">
                  <input type="checkbox" name="rememberme" id="rememberme-0" value="Remember me">
                  Remember me
                </h5>
              </div>
            </div>

            <!-- Button -->
            <div class="control-group">
              <label class="control-label" for="signin"></label>
              <div class="controls">
                <button id="signin" name="signin" class="btn btn-success">Sign In</button>
              </div>
            </div>
            </fieldset>
            </form>
        </div>
        <div class="tab-pane fade" id="signup">
            <form class="form-horizontal">
            <fieldset>
            <!-- Sign Up Form -->
            <!-- Text input-->
            <div class="control-group">
              <h4 class="control-label" for="Email">Email:</h4>
              <div class="controls">
                <input id="Email" name="Email" class="form-control" type="text" placeholder="JoeSixpack@sixpacksrus.com" class="input-large" required="">
              </div>
            </div>
            
            <!-- Text input-->
            <div class="control-group">
              <h4 class="control-label" for="userid">Username:</h4>
              <div class="controls">
                <input id="userid" name="userid" class="form-control" type="text" placeholder="JoeSixpack" class="input-large" required="">
              </div>
            </div>
            
            <!-- Password input-->
            <div class="control-group">
              <h4 class="control-label" for="password">Password:</h4>
              <div class="controls">
                <input id="password" name="password" class="form-control" type="password" placeholder="********" class="input-large" required="">
                <em><h6 class="pull-left">1-8 Characters</h6></em>
              </div>
            </div>
            
            <!-- Text input-->
            <div class="control-group">
              <h4 class="control-label pull-right" for="reenterpassword">Re-Enter Password:</h4>
              <div class="controls">
                <input id="reenterpassword" class="form-control" name="reenterpassword" type="password" placeholder="********" class="input-large" required="">
              </div>
            </div>
            
            <!-- Multiple Radios (inline) -->
            <br>
            <div class="control-group">
              <h4 class="control-label pull-left" for="humancheck">Humanity Check:</h4>
              <div class="controls">
                <h5 class="radio inline" for="humancheck-0">
                  <input type="radio" name="humancheck" id="humancheck-0" value="robot" checked="checked">I'm a Robot</h5>
                <h5 class="radio inline" for="humancheck-1">
                  <input type="radio" name="humancheck" id="humancheck-1" value="human">I'm Human</h5>
              </div>
            </div>
            
            <!-- Button -->
            <div class="control-group">
              <label class="control-label" for="confirmsignup"></label>
              <div class="controls">
                <button id="confirmsignup" name="confirmsignup" class="btn btn-success">Sign Up</button>
              </div>
            </div>
            </fieldset>
            </form>
      </div>
    </div>
      </div>
      <div class="modal-footer">
      <center>
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </center>
      </div>
    </div>
  </div>
</div>

);



export default Nav;
