import React from "react";
import "./AppointmentCard.css";

const AppointmentCard = props =>


<div class="card col-xs-6 col-xs-offset-3" id="APC">
  <h3 class="card-header">July 14th, 2018</h3>
  <div class="card-body">
    <ul id="menu" className="pull-left">
          <li className="col-xs-3">Time: 2:00 PM</li>
          <li className="col-xs-3">Duration: 60 Minutes</li>
          <li className="col-xs-3">Location: 555 SW 40 Ave. 33197 </li>
          <li className="col-xs-3"><a className="btn btn-primary pull-right">Save Appointment</a></li>
          
    </ul>
  </div>
</div>



export default AppointmentCard;