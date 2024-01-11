// declare variables
var gylle;
var diagram;
var hiNick = 0;

// preload the images
function preload() {
  gylle = loadImage("gylle.png");
  lastbil = loadImage("lastbil.png");
}

// setup the canvas
function setup() {
  createCanvas(800, 400);
  diagram = new Diagram();

/*   // test that the program is running by writing "Hi nick" to the console
  console.log("Hi nick"); */
}

// draw to the canvas each frame
function draw() {
  background(220);
  diagram.draw();

  // draw the lastbil image to the bottom right of the canvas
  image(lastbil, 500, 270);

/*   // add 1 to the value of hiNick each time draw is called
  hiNick = hiNick + 1;

  // write Hi Nick! + the value of hiNick to the console
  console.log("Hi Nick!", hiNick); */

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

  // draw an rectangle over the vindmølle to use as a collider for mouseOver
  //rect(7, 205, 100, 100);

  // when mouseover
  if (mouseX > 7 && mouseX < 107 && mouseY > 205 && mouseY < 305) {

    // write "mouseOver" to the console
    console.log("mouseover");

    // call drejVinger function from the diagram class
    diagram.drejVinger();
  }
}