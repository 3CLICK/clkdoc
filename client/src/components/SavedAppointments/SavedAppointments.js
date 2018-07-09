import React from "react";
import "./SavedAppointments.css";

const Availability = props =>
<div class="container">
  <div class="panel panel-default col-xs-8">
      <div class="panel-heading col-xs-12">
          <h3>{props.date}
            <a class="btn btn-danger save pull-right">Cancel Appointment</a>
          </h3>
      </div>
      <div class="panel-body">
        <div class="row col-xs-12">
          <p class="col-xs-4 pull-left">Time: {props.time}</p>
          <p class="col-xs-4">Duration: {props.duration}</p>
          <p class="col-xs-4 pull-right">Location: {props.location}</p>
        </div>
      </div>
  </div>   
</div>

export default SavedAppointments;