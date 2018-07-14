import React, { Component } from "react";
import Footer from "../../components/Footer";
import Results from "../../components/Results";
import DocCard from "../../components/DocCard";


class DocResults extends Component {

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
