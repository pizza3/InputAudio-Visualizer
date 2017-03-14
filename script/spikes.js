var mic;
var easing;

function setup() {
  createCanvas(windowWidth,windowHeight);
  //angleMode(DEGREES);
  stroke(255);
  strokeWeight(2);
  mic = new p5.AudioIn();
  mic.start();
  mic.amp(2);
  }

function draw() {
  background(0);
  var r=100;
  var offx=0.01;
  translate(width/2,height/2);
  var n = map(noise(offx),0,1,0,125);
  var a=10*mic.getLevel();
  var b=a;
  var k=1;
  var l=1;
  for(i=-PI/2;i<PI/2;i+=0.1){
    a=a/k;
    var x=r*cos(i);
    var y=r*sin(i);
    var x2=(1.5+a)*(x);
    var y2=(1.5+a)*(y);
    line(x,y,x2,y2);
    offx+=0.01;
    k+=.01;
  }
  for(i=PI/2;i<3*PI/2;i+=0.1){
    b=b/k;
    var x=r*cos(i);
    var y=r*sin(i);
    var x2=(1.5+b)*(x);
    var y2=(1.5+b)*(y);
    line(x,y,x2,y2);
    offx+=0.01;
    l+=0.1;
  }
}
