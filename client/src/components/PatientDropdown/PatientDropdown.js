import React from "react";
import "./PatientDropdown.css";

const PatientDropdown = props => (

  <div class="btn-group pull-right">
    <a class="dropdown-toggle" data-toggle="dropdown">
      <h6>Melvin</h6>
    </a>
    <ul class="dropdown-menu" aria-labelle dby="dropdownMenuDivider">
      <li><a href="#">My Appointments</a></li>
      <li><a href="#">My Account</a></li>
      <li role="separator" class="divider"></li>
      <li><a href="#">Sign Out</a></li>
    </ul>
  </div>
);

export default PatientDropdown;
