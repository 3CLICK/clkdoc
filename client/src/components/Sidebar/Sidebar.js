import React, { Component } from "react";
import "./Sidebar.css"

class Sidebar extends Component {

    openNav () {
        document.getElementById("mySidenav").style.width = "250px";
    };

    closeNav () {
        document.getElementById("mySidenav").style.width = "0px";
    };


    render() {
      return (
      <div>
        <a className="align-left">
          <span className="glyphicon glyphicon-th pull-left" aria-hidden="true" onClick={this.openNav}  />
        </a>
        <div id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>
      )
    };

};

export default Sidebar;