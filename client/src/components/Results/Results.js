import React, { Component } from "react";
import "./Results.css";

class Results extends Component {

      render() {
      return (
        <div className="container">
          <div className="row col-xs-12">
            <div className="col-xs-3" id="resultLabel">
              <h2>Results For:</h2>
            </div>
            <div className="col-xs-9">
              <form className="form-inline text-center" action="/action_page.php">
                <div className="form-group col-xs-2">
                  <label htmlFor="zip">Zip Code:</label>
                  <input type="zip" className="form-control" id="zip" />
                </div>
                <div className="form-group col-xs-2 col-xs-offset-1">
                  <label htmlFor="specialty">Specialty:</label>
                  <input type="specialty" className="form-control" id="specialty" />
                </div>
                <div className="form-group col-xs-3 col-xs-offset-1">
                  <label htmlFor="insurance">Insurance:</label>
                  <input type="insurance" className="form-control" id="insurance" />        
                </div>
                <div className="form-group col-xs-offset-1 col-xs-1">
                  <label htmlFor="reset">Reset</label>
                  <button type="reset" className="btn btn-default">Reset</button>
                </div> 
              </form>
            </div>
          </div>
          <div className="row col-xs-12">
            <div className="col-xs-3" id="filterLabel">
              <h2>Filter By:</h2>
            </div>
            <div className="col-xs-9">
              <form className="form-inline text-center" action="/action_page.php">
                <div className="form-group col-xs-3">
                  <label htmlFor="rating">Rating:</label>   
                  <select name="Rating">
                    <option value={1}>*</option>
                    <option value={2}>**</option>
                    <option value={3}>***</option>
                    <option value={4}>****</option>
                    <option value={5}>*****</option>
                  </select>
                </div>
                <div className="form-group col-xs-3">
                  <label htmlFor="distance">Distance:</label>   
                  <select name="distance">
                    <option value={5}>5 Miles</option>
                    <option value={10}>10 Miles</option>
                    <option value={15}>15 Miles</option>
                    <option value={20}>20 Miles</option>
                    <option value={25}>25 Miles</option>
                  </select>
                </div>
                <div className="form-group col-xs-3">
                  <label htmlFor="docName">Doctor's Name:</label>
                  <input type="docName" className="form-control" id="docName" />
                </div>
                <div className="form-group col-xs-offset-1 col-xs-1">
                  <label htmlFor="reset">Reset</label>
                  <button type="reset" className="btn btn-default">Reset</button>
                </div> 
              </form>
            </div>
          </div>
          <div className="row" id="found">
            <div className="container text-center">
              <h2>Here Are The Doctors We Found</h2>
            </div>  
            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="false">
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
              </ol>
              <div className="carousel-inner jumbotron" width={460} height={345}>
                <div className="item active">
                  <p>ONE AND ONLY ONE div needs to have the class "item active". ALL slides need to have the class "item" AND be nested inside the div with class "carousel slide". Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="item">
                  Dummy text
                </div>
              </div>
              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        );
      };

};

export default Results;

