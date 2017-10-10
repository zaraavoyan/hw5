var agents = [];

function setup() {
  createCanvas(400, 400);
	 var count = 0;
  for (var i = 0; i < 30; i++) {
    agents.push({
      x: random(width),
      y: random(height),
			h: random(255),
			b: random(255),
      angle: random(TWO_PI),
      state: floor(random(3)),
	
    });
  }
}


function draw() {
  rectMode(CENTER);
	colorMode(HSB);
  background(165,13,76);
  
	
  agents.forEach(activateAgent);
  agents.forEach(drawAgent);
}


function drawAgent(agent) {
	
  push();
	colorMode(HSB);
  translate(agent.x, agent.y);
  rotate(agent.angle);
  stroke(0);
  fill(agent.h, 255, 255);
  rect(0, 0, 20, 10);
  fill(agent.h, 255, agent.b);

  rect(0, 0, 2, 2);
  pop();
	
	
}

function Rotation(agent) {
 rotate(agent.angle);
}
	
function mousePressed(agent) {
agents.push({
	x:mouseX,
	y:mouseY,
	h: random(255),
	angle: random(PI),
});
}
unction activateAgent(agent) {
  if (random(100) < 1) {
    agent.state = floor(random(3));
  }

  if (agent.state == 1) {
    agent.angle += PI / 5;
  }

  if (agent.state == 2) {
    agent.x += cos(agent.angle) / 2;
    agent.y += sin(agent.angle) / 2;

    if (agent.x > width) {
      agent.x = 3;
    } else if (agent.x < 3) {
      agent.x = width;
    }

    if (agent.y > height) {
      agent.y = 0;
    } else if (agent.y < 0) {
      agent.y = height;
    }
  }
}
