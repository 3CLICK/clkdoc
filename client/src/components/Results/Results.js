import React from "react";
import "./Results.css";

const Results = props => (
<div class="container">

  <div class="row col-xs-12">

    <div class="col-xs-3" id="resultLabel">
      <h2>Results For:</h2>
    </div>

    <div class="col-xs-9">
      
      <form class="form-inline text-center" action="/action_page.php">
        <div class="form-group col-xs-2">
          <label for="zip">Zip Code:</label>
          <input type="zip" class="form-control" id="zip"/>
        </div>
        <div class="form-group col-xs-2 col-xs-offset-1">
          <label for="specialty">Specialty:</label>
          <input type="specialty" class="form-control" id="specialty"/>
        </div>
        <div class="form-group col-xs-3 col-xs-offset-1">
          <label for="insurance">Insurance:</label>
          <input type="insurance" class="form-control" id="insurance"/>        
        </div>
        <div class="form-group col-xs-offset-1 col-xs-1">
          <label for="reset">Reset</label>
          <button type="reset" class="btn btn-default">Reset</button>
        </div> 
      </form>
    </div>
  </div>

  <div class="row col-xs-12">

    <div class="col-xs-3" id="filterLabel">
      <h2>Filter By:</h2>
    </div>

    <div class="col-xs-9">
      <form class="form-inline text-center" action="/action_page.php">
        <div class="form-group col-xs-3">
          <label for="rating">Rating:</label>   
            <select name="Rating">
              <option value="1">*</option>
              <option value="2">**</option>
              <option value="3">***</option>
              <option value="4">****</option>
              <option value="5">*****</option>
            </select>
        </div>
        <div class="form-group col-xs-3">
          <label for="distance">Distance:</label>   
            <select name="distance">
              <option value="5">5 Miles</option>
              <option value="10">10 Miles</option>
              <option value="15">15 Miles</option>
              <option value="20">20 Miles</option>
              <option value="25">25 Miles</option>
            </select>
        </div>
        <div class="form-group col-xs-3">
          <label for="docName">Doctor's Name:</label>
          <input type="docName" class="form-control" id="docName"/>
        </div>
        <div class="form-group col-xs-offset-1 col-xs-1">
          <label for="reset">Reset</label>
          <button type="reset" class="btn btn-default">Reset</button>
        </div> 
    </form>
  </div>

  <div class="row" id="found">

    <div class="container text-center">
      <h2>Here Are The Doctors We Found</h2>
    </div>  
    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
        
        {/* <!-- Indicators --> */}
         <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        {/* <!-- Wrapper for slides --> */}
        <div class="carousel-inner jumbotron" width="460" height="345">

          <div class="item active">
            <p>ONE AND ONLY ONE div needs to have the class "item active". ALL slides need to have the class "item" AND be nested inside the div with class "carousel slide". Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        
          <div class="item">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>

        {/* <!-- Left and right controls --> */}

        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

  </div>
  
</div>


)

export default Results;
