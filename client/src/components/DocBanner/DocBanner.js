import React from "react";
import "./DocBanner.css";

const DocBanner = props =>
<div class="row" id="DocBannerHolder">
    <div class="col-xs-4">


      <div class="card">
        <img class="card-img-left col-xs-6" src="https://images8.alphacoders.com/712/712496.jpg" alt="image" style="width:150px;height: 150px;">
        <div class="card-body pull-right align-right col-xs-6">
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <h5 class="card-title">{props.docName}</h5>
          <h6 class="card-text">{props.specialty}</h6>
          <h6 class="card-text">{props.address}</h6>
          <h6 class="card-text">{props.phoneNumber}</h6>  
        </div>
      </div>


    </div>

    <div  class="col-xs-8" id="docDescription">
          <div class="row">
          <p>{props.docDescription}</p>
          </div>
        
    </div>

</div>

export default DocBanner;