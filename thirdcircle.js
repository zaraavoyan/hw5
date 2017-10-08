var circle = {
  x: 100, 
  y: 400,
  vx: 6,
  vy: -4,
  r: 10,
	h: 100
};

var circle2 = {
  x: 120, 
  y: 360,
  vx: 2,
  vy: -4,
  r: 10,
	h: 120
};

var circle3 = {
  x: 140, 
  y: 380,
  vx: 5,
  vy: -4,
  r: 10,
	h: 180
};


function setup() {
  createCanvas(400, 400);
	frameRate(70);
	
	circle.h = random(360);
	circle.h = random(360);
}

function draw() {
  background(255);
  paint(circle);
  paint(circle2);
	paint(circle3);
  
  move(circle);
  move(circle2);
	move(circle3);
  
  bounce(circle);
  bounce(circle2);
	bounce(circle3);
}

function paint(circle) {
	colorMode(HSB);
	fill(circle.h, 100, 100);
  ellipse(circle.x, circle.y, circle.r * 2, circle.r * 2);
}

function move(circle) {
  circle.x += circle.vx; // circle.x = circle.x + circle.vx
  circle.y += circle.vy;
}

function bounce(circle) {
  if (circle.x > width || circle.x < 0) {
    circle.vx = - circle.vx;
  }
  if (circle.y > height || circle.y < 0) {
    circle.vy = - circle.vy;
  }
}
