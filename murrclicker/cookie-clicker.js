var score = 0;
var cookieButton = document.getElementById("murrMain");

cookieButton.addEventListener("click", function() {
	incrementScore();
	dropPic();
  });

function incrementScore() {
	score += 1;
	document.getElementById("score").innerHTML = score;
	
	// Change the image when score over 211
	if (score >= 211) {

		document.getElementById("murrPic").src="img/murr_smart.png";
	}
};

function dropPic() {
	var bonusImage = document.createElement("img");
	bonusImage.src = "img/murr_button.png";
	bonusImage.style.width = "50px";
	bonusImage.style.height = "50px";
	bonusImage.style.display = "block";
	document.body.appendChild(bonusImage);

	// random place
	bonusImage.style.position = "absolute";
	bonusImage.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
	bonusImage.style.top = Math.floor(Math.random() * window.innerHeight) -300 + "px";

	// fade-in-out
	bonusImage.classList.add("fadeinout");
	bonusImage.addEventListener("animationend", function() {
	bonusImage.classList.remove("bonus-animation");
	bonusImage.style.display = "none";
	
	});
};
