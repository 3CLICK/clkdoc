import React from "react";
import "./DocProfile.css";

const DocProfile = props =>(
<div class="container profilePage">
  <div class="row docInfo">
    <div class="col-xs-6">
      <div class="card" style="width:20rem;margin:20px 0 24px 0">
        <img class="card-img-left" src="img_avatar3.png" alt="image" style="width:100%">
        <div class="card-body">
          <h6 class="card-title in-">{props.docName}</h6>
          <p class="card-rating">{props.rating}</p>
          <p class="card-text">{props.specialty}</p>
          <p class="card-text">{props.years}</p>          
          <p class="card-text">{props.address}</p>
          <p class="card-text">{props.phone}</p>
        </div>
      </div>
  </div>
    </div>
    <div  class="col-xs-6" id="docDescription">
      <div class="row">
      <p>{props.description}</p>
      </div>
    </div>
  </div>
  <div class="row schedule">
  </div>

</div>

)



export default DocProfile;