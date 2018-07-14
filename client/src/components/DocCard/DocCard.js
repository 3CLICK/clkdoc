import React, { Component } from "react";
import "./DocCard.css";

class DocCard extends Component {

  render() {
    return (
      <div className="card" id="Did" style={{width: 150, height: 300}}>
        <img className="card-img-top" src="https://image.flaticon.com/icons/svg/194/194915.svg" alt="Card image cap" style={{width: 128, height: 128}} />
        <div className="card-body text-center col-xs-12">
          {/*Each point of information needs to be passed through here*/}
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
          <h5 className="card-title">Robert Ayala</h5>
          <h6 className="card-text">Cardiologist</h6>
          <h6 className="card-text">555 SW 40 Ave. 33197</h6>
          <a href="#" className="btn btn-primary">Select</a>
          {/*Need if/else function. Sign-in modal if guest, view doc profile otherwise*/}
        </div>
      </div>
    );
  };
};



export default DocCard;
