import React from "react";
import "./DocProfile.css";

const DocProfile = props =>(
<div class="container profilePage">

  <div class="row">
      <a href="#" class="btn btn-primary">Go Back to the Results</a>
  </div>
<br>
  <div class="row docInfo">
    <div class="col-xs-4">


      <div class="card">
        <img class="card-img-left col-xs-6" src="https://images8.alphacoders.com/712/712496.jpg" alt="image" style="width:150px;height: 150px;">
        <div class="card-body pull-right align-right col-xs-6">
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <h5 class="card-title">Robert Ayala</h5>
          <h6 class="card-text">Cardiologist</h6>
          <h6 class="card-text">555 SW 40 Ave. 33197</h6>
          <h6 class="card-text">786-786-7867</h6>          
        </div>
      </div>


    </div>
    <div  class="col-xs-8" id="docDescription">
          <div class="row">
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
    </div>

  </div>

  <div class="row">
    <div class="container">
  <h2 class="text-center">Doctor's Availibility</h2>
  <p class="pull-right">Current Week: </p>            
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
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>                
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>                
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>                
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>                
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>                
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>                
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>                
      </tr>
      <tr>
        <td></td>
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

</div>

)



export default DocProfile;