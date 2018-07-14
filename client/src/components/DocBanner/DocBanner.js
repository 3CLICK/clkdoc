import React, { Component } from "react";
import API from '../../utils/API';
import "./DocBanner.css";

class DocBanner extends Component { 
  constructor(props) {
    super(props);
    API.getDoctors("5b492f4d61b99e3b02aff8a4").then(data => this.setState({doctor:data}))
  };

  state = {
    doctor:{}
  };

  componentDidMount() {

  }

  render() {
    return (
      <div className="container">

        <div class="row">

          <div class="col-xs-4 col-xs-offset-1">
              
            <div className="card" id="Did" style={{width: 300, height: 150}}>
              <img className="card-img-left" src="https://image.flaticon.com/icons/svg/194/194915.svg" alt="Card image cap" style={{width: 128, height: 128}} />
              <div className="card-body pull-right">
                {/*Each point of information needs to be passed through here*/}
                <span className="glyphicon glyphicon-star" />
                <span className="glyphicon glyphicon-star" />
                <span className="glyphicon glyphicon-star" />
                <span className="glyphicon glyphicon-star" />
                <span className="glyphicon glyphicon-star" />
                <h5 className="card-title">Robert Ayala</h5>
                <h6 className="card-text">Cardiologist</h6>
                <h6 className="card-text">555 SW 40 Ave. 33197</h6>
                <h6 className="card-text">788-788-7878</h6>
              </div>
            </div>

          </div>        

              <div className="col-xs-6" id="docDescription">
                <div className="row">
                  <p> test</p>
                </div>
              </div>
      </div>
          <div class="row col-xs-offset-2">
            <a href="#" class="btn btn-primary">Go Back to the Results</a>
        </div>
      </div>
    );
  };

};
export default DocBanner;