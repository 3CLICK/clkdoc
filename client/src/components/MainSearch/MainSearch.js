import React, { Component } from "react";
import "./MainSearch.css";

// const MainSearch = props => (

class MainSearch extends Component {

  state = {
    zipCode: "",
    specialty: "",
    insurance: "",
  };

    componentDidMount() {
    console.log('I was triggered during componentDidMount');
    console.log(`${this.state}`)
  }
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    
    //Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    //Preventing the defautl behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.setState({
      zipCode: "",
      specialty: "",
      insurance: "",
    });
    console.log(`${this.state}`)
    //I NEED A FUNCTION TO LOAD THE NEXT PAGE, USING THE SAME INFORMATION WE JUST PASSED INTO THE STATE
    alert(`The information you entered is as follows: ${this.state.zipCode} ${this.state.specialty} ${this.state.insurance}`);
  };

  render() {
    return (

      <div className="container">
        
        <div className="jumbotron">
          <div className="row">  
            <h2 className="text-center"> Welcome to clkDoc! </h2>
          </div>
          
          <div className="row">
              <form className="form form-inline text-center" action="/action_page.php">
                
                <div className="form-group col-xs-3 col-xs-offset-1">
                  <label>Zip Code:</label>
                  <input 
                    Value={this.state.zipCode}
                    name="zipCode"
                    onChange={this.state.handleInputChange}
                    placeholder="i.e. 33055" 
                    className="form-control">
                  </input>
                </div>
                
                <div className="form-group col-xs-3">
                  <label>Specialty:</label>
                  <input
                   Value={this.state.specialty}
                   name="specialty"
                   onChange={this.state.handleInputChange}
                   placeholder="i.e. Cardiology"
                   className="form-control">
                   </input>
                </div>
                
                <div className="form-group col-xs-3">
                  <label>Insurance:</label>
                  <input
                    Value={this.state.insurance}
                    name="insurance" 
                    onChange={this.state.handleInputChange} 
                    placeholder="i.e Aetna"
                    className="form-control">
                    </input>
                </div>
                
                <button type="submit" onClick={this.handleFormSubmit} className="btn btn-default col-xs-1 col-xs-offset-1 form-group">Submit</button>
              </form>

          </div>

          <div className="row">
            <p className="text-center col-xs-offset-2 col-xs-8">
              Start getting your medical appointmnet right now by selecting your zip code, insurance company (or pay option), and the specialist you need for , then click the Arrow to get the nearest specialist who accepts your insurance.
            </p>
          </div>

        </div>
      </div>
    );
  };
};

export default MainSearch;
