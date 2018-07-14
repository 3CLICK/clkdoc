import React, { Component } from "react";
import "./DocCard.css";

class DocCard extends Component {

  render() {
    return (
      <div className="card" style={{width: 150, height: 300}}>
        <img className="card-img-top" src="https://images8.alphacoders.com/712/712496.jpg" alt="Card image cap" style={{width: 128, height: 128}} />
        <div className="card-body text-center col-xs-12">
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
          <h5 className="card-title">Robert Ayala</h5>
          <h6 className="card-text">Cardiologist</h6>
          <h6 className="card-text">555 SW 40 Ave. 33197</h6>
          <a href="#" className="btn btn-primary">Select</a>
          {/*Need if/else function. Sign-in modal, view doc profile otherwise*/}
        </div>
      </div>
    );
  };
};



export default DocCard;
