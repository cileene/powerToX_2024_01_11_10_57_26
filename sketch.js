var gylle;
var diagram;
var hiNick = 0;

function preload(){
  gylle = loadImage("gylle.png");
}

function setup() {
  createCanvas(800, 400);
  diagram = new Diagram();

  // test that the program is running by writing "Hi nick" to the console
  console.log("Hi nick");
}

function draw() {
  background(220);
  diagram.draw();
  image(gylle, 75, 125);   
  
  // add 1 to the value of hiNick each time draw is called
  hiNick = hiNick + 1;
  // write Hi Nick! + the value of hiNick to the console
  console.log("Hi Nick!", hiNick);
}