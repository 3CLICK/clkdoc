import React from "react";
import "./DocCard.css";

const DocCard = props =>(

<div class="card col-xs-3">
  <img class="card-img-top col-xs-8 col-xs-offset-2" src="https://images8.alphacoders.com/712/712496.jpg" alt="image" style="width:150px;height: 150px;"/>
  <div class="card-body text-center col-xs-12">
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <h5 class="card-title">Robert Ayala</h5>
    <h6 class="card-text">Cardiologist</h6>
    <h6 class="card-text">555 SW 40 Ave. 33197</h6>
    <a href="#" class="btn btn-primary">Select</a>
      {/*Need if/else function. Sign-in modal, view doc profile otherwise*/}
  </div>
</div>
)



export default DocCard;
