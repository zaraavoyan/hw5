strokeWeight(40);
var x = 25;
 
function XWhite() { 
 stroke(0);
 line(0, x, width, x);
 x = x + 25;
}

function XBlack() {

stroke(255);
line(0, x, width, x);
x = x + 25;
}

XWhite();
XBlack();
XWhite();
XBlack();
XWhite();
XBlack();
XWhite();
XBlack();
var m = 0;

function WhiteRect() {
  noStroke();
  fill (255);
  rect(m, 170, 30, 170);
  m = m + 30;
}


function BlackRect() {
  noStroke();
  fill (0);
  rect(m, 170, 30, 170);
  m = m + 30;
}

BlackRect();
WhiteRect();
BlackRect();
WhiteRect();
BlackRect();
WhiteRect();
BlackRect();
WhiteRect();
BlackRect();
WhiteRect();
BlackRect();
WhiteRect();
BlackRect();
WhiteRect();
BlackRect();
WhiteRect();
