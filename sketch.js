/* 
TSA 48 timers eksamen
RUC januar 2024
Nick Lee Jerlung
 */

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

  // Opgave 7g
  // write my name as text to the bottom right of the canvas
  fill(120);
  textSize(15);
  strokeWeight(0.5);
  text("Nick Lee Jerlung", 687, 396);

  // Opgave 7a
  // draw the lastbil image to the bottom right of the canvas
  image(lastbil, lastbilX, 270);

  // Opgave 7f
  // if K is pressed, make the lastbil drive to the right
  if (keyIsPressed && key == "k") {

    // write "k is pressed" to the console
    console.log("k is pressed");

    // add 2 to the value of lastbilX each time draw is called
    lastbilX = lastbilX + 2;

    // if lastbilX is greater than the width of the canvas (- 20), move the lastbil back
    if (lastbilX > width - 20) {
      lastbilX = 625;
    }
  }
  // Opgave 7b
  // when P is pressed, pump gylle
  if (keyIsPressed && key == "p") {

    // write "p is pressed" to the console
    console.log("p is pressed");

    // call the pumpGylle function from the diagram class
    diagram.pumpGylle();

    // Opgave 7c
    // show a smaller pile of gylle
    image(gylle, 110, 150, 50, 25);
  } else {

    // show a larger pile of gylle
    image(gylle, 75, 125, 83, 50);
  }

  // Opgave 7d
  // when mouseOver
  if (mouseX > 7 && mouseX < 107 && mouseY > 205 && mouseY < 305) {

    // write "mouseOver" to the console
    console.log("mouseOver");

    // call drejVinger function from the diagram class
    diagram.drejVinger();

    // Opgave 7e
    // draw 20 * gasflaske to the left of the lastbil
    for (var i = 0; i < 20; i++) {
      image(gasflaske, 634 - i * 8, 334, 13, 13);
    }
  }
}