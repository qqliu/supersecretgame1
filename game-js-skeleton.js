window.onload = function() {
	// SETUP

	// grab canvas
	// TODO: FILL IN CODE FOR GRABBING CANVAS
	canvas.width = 500;
	canvas.height= 400;
	var ctx = canvas.getContext("2d");

	// bg image
	var bgReady = false;
	var bgImage = new Image();
	bgImage.onload = function () {
		bgReady = true;
	};
	bgImage.src = "http://www.classyartwork.com/images/landscapes/pond_illustration_l3.jpg";

	// player image
	var playerReady = false;
	var playerImage = new Image();
	// TODO: FILL IN PLAYER IMAGE ONLOAD FUNCTION
    playerImage.src = "http://4vector.com/i/free-vector-crosshairs-clip-art_105823_Crosshairs_clip_art_hight.png";

	// duck image
	var duckReady = false;
	var duckImage = new Image();
	// TODO: FILL IN DUCK IMAGE ONLOAD FUNCTION
    duckImage.src = "http://www.clker.com/cliparts/e/a/4/b/13419561141016031803Shaking%20Duck.svg.hi.png";

	// OBJECTS
    /* TODO:
     * Create a player object (i.e. var player) with
     * attributes: score = 0, x = 0, y = 0
     */

    var duck = {
		x: Math.floor(Math.random()*(canvas.width-30)),
		y: Math.floor(Math.random()*(canvas.height-30))
	};

	// FUNCTIONS

	var render = function () {
        /* TODO:
         * If the bg image is ready, draw the image
         * at coordinates (0,0).
         * If the player image is ready, draw the image
         * at (player.x, player.y) with (30, 30) width and
         * height values.
         * If the duck image is ready, draw the image with width and
         * height (60,60) at position (duck.x, duck.y)
         *
         * To help you, the function for drawing the image on the canvas are:
         * Position the image on the canvas call: ctx.drawImage(img,x,y);
         * Position the image on the canvas and specify width and height:
         * ctx.drawImage(img,x,y,width,height);
         *
         */

		// Score
        /* TODO:
         * Using JavaScript object properties, assign
         * ctx's fillStyle to "black".
         * ctx's font to "24px Helvetica"
         * ctx's textAlign to "left";
         */
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
            // TODO: Increment the player's score and assign the
            // duck's location to a random location within the canvas
		}
	}, false);

	// MAIN

	var main = function () {
		render();
	}

	setInterval(main, 1);
}
