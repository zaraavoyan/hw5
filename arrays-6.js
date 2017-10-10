var shades = [10, 20, 45, 25, 60, 75, 90, 30, 50];

function setup() {
	
	createCanvas(400, 400);
	background(255);
}

function draw() {
	  for (var i = 0; i < shades.length-1; i += 1) {
	colorMode(HSB);
	noStroke();
	fill(shades[i], 100, 100);
	rect( 0+ i * width / 9, 0, width / 9, height);

}
}

function mousePressed() {
	 for (var i = 8; i < 10; i += 1) {
		 colorMode(HSB);
		 noStroke();
		 fill(shades[i],mouseY,100);
		 rect( 0+ i * width / 9, 0, width / 9, height);
	 }
}
