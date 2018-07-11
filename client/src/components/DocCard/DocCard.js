import React from "react";
import "./DocCard.css";

const DocCard = props => (

<div className="card col-xs-3">
  <img className="card-img-top col-xs-8 col-xs-offset-2" src="https://images8.alphacoders.com/712/712496.jpg" alt="image" style={{width: 150, height: 150}} />
    <div className="card-body text-center col-xs-12">
      <span className="fa fa-star" />
      <span className="fa fa-star" />
      <span className="fa fa-star" />
      <span className="fa fa-star" />
      <span className="fa fa-star" />
      <h5 className="card-title">Robert Ayala</h5>
      <h6 className="card-text">Cardiologist</h6>
      <h6 className="card-text">555 SW 40 Ave. 33197</h6>
      <a href="#" className="btn btn-primary">Select</a>
    </div>
</div>
);



export default DocCard;
