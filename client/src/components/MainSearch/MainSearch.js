import React from "react";
//currently static, pass throughs still being worked on
const MainSearch = props => (
<div class="container">
  <div class="jumbotron">
    <div class="row">  
      <h2 class="text-center"> Welcome to clkDoc! </h2>
        <form class="form-inline text-center" action="/action_page.php">
          <div class="form-group col-xs-3 col-xs-offset-1">
            <label for="zip">Zip Code:</label>
            <input type="zip" class="form-control" id="zip">
          </div>
          <div class="form-group col-xs-3">
            <label for="specialty">Specialty:</label>
            <input type="specialty" class="form-control" id="specialty">
          </div>
          <div class="form-group col-xs-3">
            <label for="insurance">Insurance:</label>
            <input type="insurance" class="form-control" id="insurance">
          </div>
          <button type="submit" class="btn btn-default col-xs-1 col-xs-offset-1 form-group">Submit</button>
        </form>
    </div>
    <div class="row">
      <p class="text-center col-xs-offset-2 col-xs-8">
        Start getting your medical appointmnet right now by selecting your zip code, insurance company (or pay option), and the specialist you need for , then click the Arrow to get the nearest specialist who accepts your insurance.
      </p>
    </div>
  </div>
</div>
);

export default MainSearch;
