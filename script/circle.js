var mic;
var easing=.125;
var sens=540;
var x=.0125;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  }

function draw() {
  background(0);
  noFill();
  stroke(255);
  for(var i=0;i<60;i+=6){
    x+=1;
    strokeWeight(x*i/100);
    ellipse(width/2,height/2,10*i,10*i);
  }
  var diff = sens*mic.getLevel()-x;
  x+=diff-easing;
}
