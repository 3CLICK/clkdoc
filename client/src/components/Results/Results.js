import React, { Component } from "react";
import DocCard from "../DocCard/DocCard.js";
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
          <div class="row">
          <form className="form form-inline col-xs-12 pull-right" id="resultRow">
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
          </div>
    
          <div class="row">
          <form className="form-inline col-xs-12 pull-right" id="filterRow">

            <div className="form-group">
              <h3 class="pull-left" id="filterLabel">FILTER BY:</h3>
            </div>

            <div class="form-group" id="rate">
              <label for="Rating">Rating:</label>   
                <select nameClass="form-control">
                  <option value={1}>*</option>
                  <option value={2}>**</option>
                  <option value={3}>***</option>
                  <option value={4}>****</option>
                  <option value={5}>*****</option>
                </select>
            </div>

            <div class="form-group" id="radius">
              <label>Distance:</label>   
                <select nameClass="form-control">
                  <option value={5}>5 Miles</option>
                  <option value={10}>10 Miles</option>
                  <option value={15}>15 Miles</option>
                  <option value={20}>20 Miles</option>
                  <option value={25}>25 Miles</option>
                </select>
            </div>

            <div className="form-group" id="dName">
              <label>Doctor's Name:</label>
                <input 
                  type="docName" 
                  className="form-control" 
                  id="docName" />
            </div>

            <div class="form-group" id="filterReset">
                <button type="reset" class="btn btn-default pull-right">Reset</button>
            </div>

          </form>
          </div>

          <div id="cardHolder" class="container">
            <DocCard/>
            <DocCard/>
            <DocCard/>
            <DocCard/>
                        <DocCard/>

            <DocCard/>

          </div>


        </div>



        );
      };

};

export default Results;

