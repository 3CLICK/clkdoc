import React, { Component } from "react";
import "./Results.css";

class Results extends Component {
    state = {
    zipCode: "",
    specialty: "",
    insurance: "",
  };

  
      render() {
      return (
        <div class="container">
          <form className="form form-inline col-xs-12 pull-right" id="resultRow" >
                <div className="form-group">
                <h3 class="pull-left" id="resultLabel">RESULTS FOR:</h3>
                </div>
                <div className="form-group">
                  <label>Zip Code:</label>
                  <input 
                    Value={this.state.zipCode}
                    name="zipCode"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="i.e. 33055" 
                    className="form-control"/>
                </div>
                
                <div className="form-group">
                  <label>Specialty:</label>
                  <input
                   Value={this.state.specialty}
                   name="specialty"
                   onChange={this.handleInputChange}
                   type="text"
                   placeholder="i.e. Cardiology"
                   className="form-control"/>
                </div>
                
                <div className="form-group">
                  <label>Insurance:</label>
                  <input
                    Value={this.state.insurance}
                    name="insurance" 
                    onChange={(e) => this.handleInputChange(e)} 
                    type="text"
                    placeholder="i.e Aetna"
                    className="form-control"/>
                </div>

                  <button onClick={this.handleFormSubmit} className="btn btn-default form-inline ">Submit</button>
                  <button onClick="" className="btn btn-default form-inline ">Reset</button>
          </form>
     


            <div class="col-xs-3" id="filterLabel">
              <h2>Filter By:</h2>
            </div>

            <div class="col-xs-9">
              <form className="form form-inline col-xs-12 pull-right">
                <div class="form-group col-xs-3">
                  <label htmlFor="rating">Rating:</label>   
                  <select name="Rating">
                    <option value={1}>*</option>
                    <option value={2}>**</option>
                    <option value={3}>***</option>
                    <option value={4}>****</option>
                    <option value={5}>*****</option>
                  </select>
                </div>
                <div class="form-group col-xs-3">
                  <label htmlFor="distance">Distance:</label>   
                  <select name="distance">
                    <option value={5}>5 Miles</option>
                    <option value={10}>10 Miles</option>
                    <option value={15}>15 Miles</option>
                    <option value={20}>20 Miles</option>
                    <option value={25}>25 Miles</option>
                  </select>
                </div>
                <div class="form-group col-xs-3">
                  <label htmlFor="docName">Doctor's Name:</label>
                  <input type="docName" class="form-control" id="docName" />
                </div>
                <div class="form-group col-xs-offset-1 col-xs-1">
                  <label htmlFor="reset">Reset</label>
                  <button type="reset" class="btn btn-default">Reset</button>
                </div> 
              </form>
            </div>


          <div class="row">
            <div class="container text-center">
              <h2>Here Are The Doctors We Found</h2>
            </div>  
{/*            <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
              <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} class="active" />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
              </ol>
              <div class="carousel-inner jumbotron" width={460} height={345}>
                <div class="item active">
                  <p>ONE AND ONLY ONE div needs to have the class "item active". ALL slides need to have the class "item" AND be nested inside the div with class "carousel slide". Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div class="item">
                  Dummy text
                </div>
              </div>
              <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" />
                <span class="sr-only">Previous</span>
              </a>
              <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" />
                <span class="sr-only">Next</span>
              </a>
            </div>*/}
            <div class="row" id="found">
              <div className="container">
                <p className="text-center">Need to map out the DocCards here</p>
              </div>
            </div>
          </div>
        </div>
        );
      };

};

export default Results;

