import React, { Component } from "react";
import Results from "../../components/Results";
import API from '../../utils/API';



class DocResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: []
    };
    API.getDoctors().then(response => this.setState({ doctors: response.data }))
  };


  render() {
    return (
      <div>
        <Results />
        <DocCard />

      </div>
    );
  };


};

export default DocResults;
