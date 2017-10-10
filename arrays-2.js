var shades = [10, 20, 45, 25, 60];

function setup() {
	
	createCanvas(400, 400);
	background(255);
}

function draw() {
	  for (var i = 0; i < shades.length; i += 1) {
	colorMode(HSB);
	noStroke();
	fill(shades[i], 100, 100);
	rect( 0+ i * width / 5, 0, width / 5, height);

}
}
