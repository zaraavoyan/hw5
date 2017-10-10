var circles = [2, 6, 6, 3, 70, 58, 25, 24];
// var i = 0;
// var h = 30;
var i,h;
var y = 300;

// var x= 50+i*70;

function setup() {
	background(255);
	frameRate(9);
	createCanvas (600, 600);
	var i = 0;
	var h = 30;
	
}

function draw() {
	
	circles.forEach(drawCircles);
	circles.forEach(translateCircles);
	
} 

function drawCircles() {
	 background(255);
   for (var i = 0; i < 8; i += 1) {
  colorMode(HSB);
		 noStroke();
	
		fill(255,100,100);
	ellipse(50+i*70, y, circles[i], circles[i]);
		 
	 }
}

function translateCircles() {

	
 y +=10; 
	if (y > 350) {
	y = 300}
}

