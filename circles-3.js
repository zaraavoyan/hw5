var sizes = [2, 6, 6, 3, 70, 58, 25, 24];

function setup() {
  createCanvas(600, 600);

  noStroke();
    
  for (var i = 0; i < sizes.length; i += 1) {
    colorMode(HSB);
		fill(random(255),random(255),random(255));
    ellipse(30+i*70, height/4, sizes[i], sizes[i]);
  }
}
