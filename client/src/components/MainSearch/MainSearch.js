import React, { Component } from "react";
import "./MainSearch.css";

// const MainSearch = props => (

class MainSearch extends Component {

  state = {
    zipCode: "",
    specialty: "",
    insurance: "",
  };

  handleInputChange = event => {

    //Updating the input's state
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFormSubmit = event => {
    //Preventing the defautl behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log(this.state);
    
    //I NEED A FUNCTION TO LOAD THE NEXT PAGE, USING THE SAME INFORMATION WE JUST PASSED INTO THE STATE
    
  };

  render() {
    return (

      <div className="container">
        
        <div className="jumbotron">
          <div className="row">  
            <img className="col-xs-offset-4" src={require(`./images/logo.png`)
            } />
          </div>
          
          <div className="row">
              <form className="form form-inline text-center">
                
                <div className="form-group">
                  <label>Zip Code:</label>
                  <input 
                    Value={this.state.zipCode}
                    name="zipCode"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="i.e. 33055" 
                    className="form-control">
                  </input>
                </div>
                
                <div className="form-group">
                  <label>Specialty:</label>
                  <input
                   Value={this.state.specialty}
                   name="specialty"
                   onChange={this.handleInputChange}
                   type="text"
                   placeholder="i.e. Cardiology"
                   className="form-control">
                   </input>
                </div>
                
                <div className="form-group">
                  <label>Insurance:</label>
                  <input
                    Value={this.state.insurance}
                    name="insurance" 
                    onChange={(e) => this.handleInputChange(e)} 
                    type="text"
                    placeholder="i.e Aetna"
                    className="form-control">
                    </input>
                </div>
                
                <button onClick={this.handleFormSubmit} className="btn btn-default form-group">Submit</button>
              </form>

          </div>

          <div className="row">
            <p className="text-center col-xs-offset-2 col-xs-8">
              Welcome to clkDoc. Start getting your medical appointment right now by selecting your zip code, insurance copmany (or pay option) and the specialist you need, then click the Submit button to get the nearest specialist who accepts your insurance.
            </p>
          </div>

        </div>
      </div>
    );
  };
};

export default MainSearch;
