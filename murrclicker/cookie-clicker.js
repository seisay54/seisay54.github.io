var score = 0;
var cookieButton = document.getElementById("cookie");

function incrementScore() {
	score += 1;
	document.getElementById("score").innerHTML = score;
}

// Add an event listener to the cookie button
cookieButton.addEventListener("click", function () {
	// Select the bonus image element
	var bonusImage = document.getElementById("bonus");

	// Set the position of the bonus image element to a random position
	bonusImage.style.display = "block";
	bonusImage.style.position = "absolute";
	bonusImage.style.left = Math.floor(Math.random() * 1500) + "px";
	bonusImage.style.top = Math.floor(Math.random() * 500) + "px";

	// Add the fade-in class to the bonus image element
	bonusImage.classList.add("animate__fadeInDown");

	// Remove the fade-in class and add the fade-out class after 1 second
	setTimeout(function () {
		bonusImage.classList.remove("animate__fadeInDown");
		bonusImage.classList.add("animate__fadeOutDown");
	}, 800);

	// Hide the bonus image element after 2 seconds
	setTimeout(function () {
		bonusImage.style.display = "none";
		bonusImage.classList.remove("animate__fadeOutDown");
	}, 2000);

});
