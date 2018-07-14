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
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
          <a href="/">Home</a>
          <a href="/doctors">Doctors</a>
          <a href="#">Profile</a>
          <a href="/doctors/12312312323">Make Appointment</a>
        </div>
      </div>
      )
    };

};

export default Sidebar;