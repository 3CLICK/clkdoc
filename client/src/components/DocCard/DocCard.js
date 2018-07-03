import React from "react";
import "./DocCard.css";

const Results = props =>(

<div class="card" style="width:20rem;margin:20px 0 24px 0">
	<img class="card-img-top" src="img_avatar3.png" alt="image" style="width:100%">
	<div class="card-body">
		<h6 class="card-title">{props.docName}</h6>
		<p class="card-text">{props.specialty}</p>
		<p class="card-text">{props.address}</p>
		<a href="#" class="btn btn-primary">Select</a>
	</div>
</div>
)



export default DocCard;
