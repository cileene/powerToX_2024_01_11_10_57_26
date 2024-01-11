var gylle;
var diagram;

function preload(){
  gylle = loadImage("gylle.png");
}

function setup() {
  createCanvas(800, 400);
  diagram = new Diagram();
}

function draw() {
  background(220);
  diagram.draw();
  image(gylle, 75, 125);   
}