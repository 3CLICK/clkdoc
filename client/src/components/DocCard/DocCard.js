import React, { Component } from "react";
import "./DocCard.css";

class DocCard extends Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }

  render() {
    var doctor = this.props.doctor;
    return (
      <div className="card" id="Did" style={{width: 150, height: 300}}>
        <img className="card-img-top" src={doctor.image} alt="Card image cap" style={{width: 128, height: 128}} />
        <div className="card-body text-center col-xs-12">
          {/*Each point of information needs to be passed through here*/}
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
          <h5 className="card-title">{`${doctor.firstName} ${doctor.lastName}`}</h5>
          <h6 className="card-text">{doctor.specialty}</h6>
          <h6 className="card-text">{`${doctor.address} ${doctor.city} ${doctor.zipCode}`}</h6>
          <a href="#" className="btn btn-primary">Select</a>
          {/*Need if/else function. Sign-in modal if guest, view doc profile otherwise*/}
        </div>
      </div>
    );
  };
};



export default DocCard;
