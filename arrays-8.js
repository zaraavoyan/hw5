//bars animate with clicks

var shades = [10, 20, 45, 25, 60, 75, 90, 30, 50];
var y= 0;

function setup() {
	
	createCanvas(400, 400);
	background(255);
}

function draw() {
	  for (var i = 0; i < shades.length-1; i += 1) {
	colorMode(HSB);
	noStroke();
		
	fill(shades[i], 100, 100);
	rect( 0+ i * width / i, y, width / i, height);
			
		shades.forEach(moveShades);

}
}

function mousePressed() {
	 for (var i = 0; i < 100; i += 1) {
		 colorMode(HSB);
		 noStroke();
		 fill(shades[i],random(100),100);
		
		 rect( i+i * width / 9, y, width / 9, height);
			}
	 
}
function moveShades() {
 y +=5; 
	if (y > 400) {
	y = 0}
	
}
