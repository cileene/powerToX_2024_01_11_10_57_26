// declare variables
var gylle;
var lastbil;
var gasflaske;
var diagram;
var lastbilX = 625;

// preload the images
function preload() {
  gylle = loadImage("gylle.png");
  lastbil = loadImage("lastbil.png");
  gasflaske = loadImage("gasflaske.png");
}

// setup the canvas
function setup() {
  createCanvas(800, 400);
  diagram = new Diagram();
}

// draw to the canvas each frame
function draw() {
  background(220);
  diagram.draw();

  // write my name as text to the bottom right of the canvas
  fill(120);
  textSize(15);
  strokeWeight(0.5);
  text("Nick Lee Jerlung", 687, 396);

  // draw the lastbil image to the bottom right of the canvas
  image(lastbil, lastbilX, 270);

  // if K is pressed, make the lastbil drive to the right
  if (keyIsPressed && key == "k") {

    // write "k is pressed" to the console
    console.log("k is pressed");

    // add 2 to the value of lastbilX each time draw is called
    lastbilX = lastbilX + 2;

    // if lastbilX is greater than the width of the canvas minus 20, reset lastbilX to 625
    if (lastbilX > width - 20) {
      lastbilX = 625;
    }
  }

  // when P is pressed, pump gylle
  if (keyIsPressed && key == "p") {

    // write "p is pressed" to the console
    console.log("p is pressed");

    // call the pumpGylle function from the diagram class
    diagram.pumpGylle();

    // show a smaller pile of gylle
    image(gylle, 110, 150, 50, 25);
  } else {

    // show a larger pile of gylle
    image(gylle, 75, 125, 83, 50);
  }

  // when mouseover
  if (mouseX > 7 && mouseX < 107 && mouseY > 205 && mouseY < 305) {

    // write "mouseOver" to the console
    console.log("mouseover");

    // call drejVinger function from the diagram class
    diagram.drejVinger();

    // draw 20 small gasflasker to the left of the lastbil
    for (var i = 0; i < 20; i++) {
      image(gasflaske, 634 - i * 8, 334, 13, 13);
    }
  }
}