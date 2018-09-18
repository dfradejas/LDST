
//JAVASCRIPT PROVISIONAL ANTES DE TENER PHP Y BASES DE DATOS, PUES PONEMOS LOS DATOS A MANUBRIO

function showTravels(place){
	switch (place) {
		case "Europe":
			var modal = document.getElementById('myModal');
			var btn = document.getElementById("myBtn");
			var span = document.getElementsByClassName("close")[0];
			var selectedContinent = document.getElementById("selectedContinent").innerHTML = " \
			<center><h2>TOP 5 travels</h2></center> \
			<table class='table'> \
			<tr> \
			<th>Country</th> \
			<th>Info</th> \
			<th>Options</th> \
			</tr> \
			<tr> \
			<td>Spain</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Spain' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>England</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/England' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>France</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/France' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>Belgium</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Belgium' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>Copenhague</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Copenhague' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			</tr></table>";
			modal.style.display = "block";
			span.onclick = function() {
			    modal.style.display = "none";
			}

			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
		 	   }
			}
			break;

		case "North-America":
			var modal = document.getElementById('myModal');
			var btn = document.getElementById("myBtn");
			var span = document.getElementsByClassName("close")[0];
			var selectedContinent = document.getElementById("selectedContinent").innerHTML = " \
			<center><h2>TOP 5 travels</h2></center> \
			<table class='table'> \
			<tr> \
			<th>Country</th> \
			<th>Info</th> \
			<th>Options</th> \
			</tr> \
			<tr> \
			<td>Chicago</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Chicago' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>Canada</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Canada' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>New Mexico</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/NewMexico' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>Mexico</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Mexico' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>Floreda</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Floreda' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			</table>";
			modal.style.display = "block";
			span.onclick = function() {
			    modal.style.display = "none";
			}

			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
		 	   }
			}
			break;

		case "South-America":
			var modal = document.getElementById('myModal');
			var btn = document.getElementById("myBtn");
			var span = document.getElementsByClassName("close")[0];
			var selectedContinent = document.getElementById("selectedContinent").innerHTML = " \
			<center><h2>TOP 5 travels</h2></center> \
			<table class='table'> \
			<tr> \
			<th>Country</th> \
			<th>Info</th> \
			<th>Options</th> \
			</tr> \
			<tr> \
			<td>Panama</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Panama' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>Cuba</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Cuba' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>Brasil</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Brasil' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>Hawaii</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Hawaii' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>Chile</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Chile' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			</table>";
			modal.style.display = "block";
			span.onclick = function() {
			    modal.style.display = "none";
			}

			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
		 	   }
			}
			break;

		case "Africa":
			var modal = document.getElementById('myModal');
			var btn = document.getElementById("myBtn");
			var span = document.getElementsByClassName("close")[0];
			var selectedContinent = document.getElementById("selectedContinent").innerHTML = " \
			<center><h2>TOP 5 travels</h2></center> \
			<table class='table'> \
			<tr> \
			<th>Country</th> \
			<th>Info</th> \
			<th>Options</th> \
			</tr> \
			<tr> \
			<td>Congo</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Congo' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>South-Africa</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/SouthAfrica' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>Morocco</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Morocco' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>Tanzania</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Tanzania' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>Kenya</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Kenya' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			</table>";
			modal.style.display = "block";
			span.onclick = function() {
			    modal.style.display = "none";
			}

			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
		 	   }
			}
			break;

		case "Asia":
			var modal = document.getElementById('myModal');
			var btn = document.getElementById("myBtn");
			var span = document.getElementsByClassName("close")[0];
			var selectedContinent = document.getElementById("selectedContinent").innerHTML = " \
			<center><h2>TOP 5 travels</h2></center> \
			<table class='table'> \
			<tr> \
			<th>Country</th> \
			<th>Info</th> \
			<th>Options</th> \
			</tr> \
			<tr> \
			<td>China</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/China' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>Japan</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Japan' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>Russia</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Russia' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>Egypt</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Egypt' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>Israel</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Israel' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			</table>";
			modal.style.display = "block";
			span.onclick = function() {
			    modal.style.display = "none";
			}

			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
		 	   }
			}
			break;

		case "Antarctica":
			var modal = document.getElementById('myModal');
			var btn = document.getElementById("myBtn");
			var span = document.getElementsByClassName("close")[0];
			var selectedContinent = document.getElementById("selectedContinent").innerHTML = " \
			<center><h2>TOP 5 travels</h2></center> \
			<table class='table'> \
			<tr> \
			<th>Country</th> \
			<th>Info</th> \
			<th>Options</th> \
			</tr> \
			<tr> \
			<td>In progress</td> \
			</table>";
			modal.style.display = "block";
			span.onclick = function() {
			    modal.style.display = "none";
			}

			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
		 	   }
			}
			break;

		case "Australia":
			var modal = document.getElementById('myModal');
			var btn = document.getElementById("myBtn");
			var span = document.getElementsByClassName("close")[0];
			var selectedContinent = document.getElementById("selectedContinent").innerHTML = " \
			<center><h2>TOP 5 travels</h2></center> \
			<table class='table'> \
			<tr> \
			<th>Country</th> \
			<th>Info</th> \
			<th>Options</th> \
			</tr> \
			<tr> \
			<td>Tasmania</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Tasmania' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>Melbourne</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Melbourne' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>Sydney</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Sydney' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>Kakadu</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Kakadu' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			<td>Brisbane</td> \
			<td><a class='btn btn-default' href='https://en.wikipedia.org/wiki/Brisbane' target='_blank'>Info</a></td> \
			<td><a class='btn btn-info' href='order-it.html'>Order it</a></td></tr> \
			</table>";
			modal.style.display = "block";
			span.onclick = function() {
			    modal.style.display = "none";
			}

			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
		 	   }
			}
			break;

		default:
			alert("Not valid continent");

	}
}
