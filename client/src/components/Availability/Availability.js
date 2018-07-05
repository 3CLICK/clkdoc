import React from "react";
import "./Availability.css";

const DocProfile = props =>
<div class="row" id="scheduleHolder">
  <div class="container">
    <h2 class="text-center">Doctor's Availability</h2>
    <p class="pull-right">Current Week: <span>{props.currentWeek}</span> </p>            
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Time Slot</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>8 AM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>                
        </tr>
        <tr>
          <td>9 AM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>                
        </tr>
        <tr>
          <td>10 AM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>                
        </tr>
        <tr>
          <td>11 AM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>                
        </tr>
        <tr>
          <td>1 PM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>                
        </tr>
        <tr>
          <td>2 PM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>                
        </tr>
        <tr>
          <td>3 PM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>                
        </tr>
        <tr>
          <td>4 PM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>                
        </tr>                  
      </tbody>
    </table>
  </div>
</div>
export default DocProfile;