import React from "react";
import "./DocDropdown.css";

const DocDropdown = props => (

  <div className="btn-group pull-right">
    <button className="dropdown-toggle" data-toggle="dropdown">
      <h6>Melvin</h6>
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuDivider">
      <li><a href="#">My Profile</a></li>
      <li><a href="#">My Availability</a></li>
      <li><a href="#">My Account</a></li>
      <li role="separator" className="divider"></li>
      <li><a href="#">Sign Out</a></li>
    </ul>
  </div>
);

export default DocDropdown;
