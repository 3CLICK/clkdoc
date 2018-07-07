import React from "react";
import "./Availability.css";

const Availability = props =>
<div class="container">
  <div class="panel panel-default col-xs-8">
      <div class="panel-heading">
          <h3>{props.date}
            <a class="btn btn-primary save pull-right">Save Appointment</a>
          </h3>
      </div>
      <div class="panel-body pull-left">
        <ul id="menu" class="pull-left">
          <li class="col-xs-4">Time: {props.time}</li>
          <li class="col-xs-4">Duration: {props.duration}</li>
          <li class="col-xs-4">Location: {props.location}</li>
        </ul> 
      </div>
  </div>   
</div>

export default Availability;