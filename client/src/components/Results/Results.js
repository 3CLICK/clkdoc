import React from "react";
import "./Results.css";

const Results = props => (
<div class="container">

	<div class="row">
		<div class="col-xs-3" id="resultLabel">
			<h2>Results For:</h2>
		</div>
	{/*pass the children of the form from the previous page here, placeholder for now*/}
		<div class="col-xs-9">
			<form class="form-inline text-center" action="/action_page.php">
	          <div class="form-group col-xs-4">
	            <label for="zip">Zip Code:</label>
	            <input type="zip" class="form-control" id="zip">
	          </div>
	          <div class="form-group col-xs-4">
	            <label for="specialty">Specialty:</label>
	            <input type="specialty" class="form-control" id="specialty">
	          </div>
	          <div class="form-group col-xs-4">
	            <label for="insurance">Insurance:</label>
	            <input type="insurance" class="form-control" id="insurance">
	          	<button type="reset" class="btn btn-default col-xs-1 col-xs-offset-1 form-group">Reset</button>	            
	          </div>

	        </form>
		</div>
	</div>

	<div class="row">
		<div class="col-xs-3" id="filterLabel">
			<h2>Filter By:</h2>
		</div>
		<div class="col-xs-9">
			<form>
				<div class="form-group col-xs-4">
				  <label for="rating">Rating:</label>		
					  <select name="Rating">
					    <option value="1">1</option>
					    <option value="2">2</option>
					    <option value="3">3</option>
					    <option value="4">4</option>
					    <option value="5">5</option>
					  </select>
				</div>
				<div class="form-group col-xs-4">
				  <label for="distance">Distance:</label>		
					  <select name="distance">
					    <option value="5">5 Miles</option>
					    <option value="10">10 Miles</option>
					    <option value="15">15 Miles</option>
					    <option value="20">20 Miles</option>
					    <option value="25">25 Miles</option>
					  </select>
				</div>
				<div class="form-group col-xs-4">
	            	<label for="docName">Doctor's Name:</label>
	            	<input type="docName" class="form-control" id="docName">
	          	</div>

			</form>
		</div>
	</div>
	<div class="row">
	</div>
</div>


)
