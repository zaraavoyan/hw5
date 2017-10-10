var sizes = [40, 60, 70, 30, 30, 10, 20, 30];

function setup() {
  createCanvas(600, 600);

  noStroke();
    
  for (var i = 0; i < sizes.length; i += 1) {
    fill(sizes[i]);
    ellipse(30+i*70, height/4, sizes[i], sizes[i]);
  }
}
