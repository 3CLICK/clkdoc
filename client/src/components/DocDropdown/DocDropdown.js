import React from "react";
import "./DocDropdown.css";

const DocDropdown = props => (

  <div class="btn-group pull-right">
    <button class="dropdown-toggle" data-toggle="dropdown">
      <h6>Melvin</h6>
    </button>
    <ul class="dropdown-menu" aria-label dby="dropdownMenuDivider">
      <li><a href="#">My Profile</a></li>
      <li><a href="#">My Availability</a></li>
      <li><a href="#">My Account</a></li>
      <li role="separator" class="divider"></li>
      <li><a href="#">Sign Out</a></li>
    </ul>
  </div>
);

export default DocDropdown;
