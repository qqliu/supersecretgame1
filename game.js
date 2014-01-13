/* 
  The JS file manipulates HTML objects and is capable of making webpages interact with users.
 
  JS has two different kinds of comments - multiline and single-line. This is a multiline comment.
 */

// This is a single-line comment.

/* We want to make sure our code runs after everything has loaded, 
	so we wrap our code in a function that will be called when the 
	window loads using the following syntax:

	window.onload = function() {our code goes here};
*/
window.onload = function() {
	// grab canvas
	var canvas = document.getElementById("game-canvas");
	canvas.width = 500;
	canvas.height= 400;
	var ctx = canvas.getContext("2d");

	// bg image
	var bgReady = false;
	var bgImage = new Image();
	bgImage.onload = function () {
		bgReady = true;
	};
	// image source: http://www.classyartwork.com/images/landscapes/pond_illustration_l3.jpg
	bgImage.src = "images/background.jpg";

	// player image
	var playerReady = false;
	var playerImage = new Image();
	playerImage.onload = function () {
		playerReady = true;
	};
	// image source: http://4vector.com/i/free-vector-crosshairs-clip-art_105823_Crosshairs_clip_art_hight.png
	playerImage.src = "images/crosshair.png";

	// duck image
	var duckReady = false;
	var duckImage = new Image();
	duckImage.onload = function () {
		duckReady = true;
	}
	// image source: http://www.clker.com/cliparts/e/a/4/b/13419561141016031803Shaking%20Duck.svg.hi.png
	duckImage.src = "images/duck.png";	

	// OBJECTS

	var player = {
		score: 0,
		x: 0,
		y: 0
	};
	var duck = {
		x: Math.floor(Math.random()*(canvas.width-30)),
		y: Math.floor(Math.random()*(canvas.height-30))
	};

	// FUNCTIONS

	var render = function () {
		if (bgReady) {
			ctx.drawImage(bgImage, 0, 0);
		}
		if (playerReady) {
			ctx.drawImage(playerImage, player.x, player.y, 30, 30);
		}
		if (duckReady) {
			ctx.drawImage(duckImage, duck.x, duck.y, 60, 60);
		}

		// Score
		ctx.fillStyle = "black";
		ctx.font = "24px Helvetica";
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		ctx.fillText("Score: " + player.score, 32, 32);
	}

	// EVENT LISTENERS

	document.addEventListener("mousemove", function(e) {
		if (e.x < (canvas.width + 25) && e.x > 0) {
			player.x = e.x - 25;
		}
		if (e.y < (canvas.height + 25) && e.y > 0) {
			player.y = e.y - 25;
		}
	}, false);

	document.addEventListener("click", function(e) {
		if (e.x > (duck.x) && e.x < (duck.x + 60) &&
			e.y > (duck.y) && e.y < (duck.y + 60)) {
			// HIT!
			player.score += 1;
			duck.x = Math.floor(Math.random()*canvas.width);
			duck.y = Math.floor(Math.random()*canvas.height);
		}
	}, false);

	// MAIN

	var main = function () {
		render();
	}

	setInterval(main, 1);
};