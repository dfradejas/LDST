function showTravels(place){
	if (place == "Europe"){
		var modal = document.getElementById('myModal');
		var btn = document.getElementById("myBtn");
		var span = document.getElementsByClassName("close")[0];
		var selectedContinent = document.getElementById("selectedContinent").innerHTML = " \
		<center><h2>TOP 5 travels</h2></center> \
		<table class='table'> \
		<tr> \
		<th>Country</th> \
		<th>Options</th> \
		</tr> \
		<tr> \
		<td>Spain</td> \
		<td><a class='btn btn-info' href='order-it.html'>Order it</a></td> \
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
	}
}
