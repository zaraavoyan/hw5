var shades = [10, 20, 45, 25, 60, 75, 90, 30, 50];
var x=355;

function setup() {
	
	createCanvas(400, 400);

}

function draw() {
	  for (var i = 0; i < shades.length-1; i += 1) {
	colorMode(HSB);
	noStroke();
		
	fill(shades[i], 100, 100);
	rect(i * width / 9, 0, width / 9, height);

}
}

function mousePressed() {
	 colorMode(HSB);
		
	 noStroke();
	fill(random(255),random(100),random(200));
		 rect(x, 0, 5, height);
		 x= x+ 5;

	 }
