import React from "react";
import "./DocBanner.css";

const DocBanner = props =>
<div className="container">
<div class="row" id="DocBannerHolder">

    <div class="col-xs-4">
          

      <div className="card">
        <img className="card-img-left col-xs-6" src="https://images8.alphacoders.com/712/712496.jpg" alt="image" style={{width: 150, height: 150}} />
          </div>
      <div className="card-body align-right col-xs-6">
          <span className="fa fa-star" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
          <h5 className="card-title">{props.docName} DUMMY TEXT</h5>
          <h6 className="card-text">{props.specialty} DUMMY TEXT</h6>
          <h6 className="card-text">{props.address} DUMMY TEXT</h6>
          <h6 className="card-text">{props.phoneNumber} DUMMY TEXT</h6>  
      </div>
    </div>        

        <div className="col-xs-8" id="docDescription">
          <div className="row">
            <p>{props.docDescription}  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
</div>
</div>

export default DocBanner;