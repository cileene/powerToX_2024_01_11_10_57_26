var gul, gylleGrøn;
var vindmølle, elektrolyse, metanisering, biogas;

class Diagram {
  constructor() {
    elektrolyse = new Elektrolyse();
    metanisering = new Metanisering();
    vindmølle = new Vindmølle();
    biogas = new Biogas();
    gul = color(247, 151, 82);
    gylleGrøn = color(98, 182, 88);
  }
  
  draw() {
    biogas.draw();
    vindmølle.draw();
    elektrolyse.draw();
    metanisering.draw();
    strokeWeight(7);
    stroke(0);
    line(155, 350, width, 350);
  }
  
  pumpGylle() {
    biogas.pumpGylle();
  }
  
  drejVinger() {
    vindmølle.drejVinger();
  }
} // end diagram


class Vindmølle {
  constructor() {
    this.taarnImg = loadImage("vindmølletaarn.png");
    this.vingerImg = loadImage("vinger.png");
    this.vinkel =0;
  } 
      
  draw() {
    image(this.taarnImg, 11, 200);
    push();
    translate(57, 257);
  
    rotate(this.vinkel);
    image(this.vingerImg, -46, -54.5);
    pop();
  }
  
  drejVinger() {
    this.vinkel = this.vinkel + 0.01;
  }
} // end vindmølle

class Elektrolyse {
  constructor() {
    this.img = loadImage("elektrolyse.png");
  }
  
  draw() {
    // elkabel fra vindmølle
    strokeWeight(2);
    line(60, 350, 140, 350);
    line(140, 350, 140, 320);
    line(140, 320, 170, 320);
   
    // rør fra elektrolyseanlæggett
    // til metaniseringsanlægget
    
    strokeWeight(10);
    line(257, 320, 319, 320);
    arc(322, 312, 15, 15, 0, PI/2);
    line(330, 308, 330, 175);
    arc(338, 175, 15, 15, PI, PI+PI/2);
    line(340, 167, 345, 167);
    
    
   // selve elektrolyseanlægget 
   image(this.img, 165, 248);
  }
} // end elektrolyse

class Metanisering {
  constructor() {
    this.img = loadImage("metanisering.png");
  }
  
  draw() {
    image(this.img, 340, 78);
  }
}

class Biogas {
  constructor() {
    this.biogas = loadImage("biogas.png");
  }
  
  draw() {
   // rør fra gylle til biogasanlæg
    strokeWeight(10);
    stroke(gul);
    noFill();
    line(214,37, 214, 47);
    arc(206, 37, 15, 15, - HALF_PI, 0);
    line(160, 29, 206, 29);
    arc(160, 37, 15, 15, PI, PI + HALF_PI);
    line(152, 38,152, 150);
        
    // rør fra biogasanlægget
    // til metaniseringsanlægget
    strokeCap(SQUARE);
    line(257, 145, 350, 145);
    strokeCap(ROUND);
 
    // selve biogasanlæggett
    image(this.biogas, 165, 38)
  }
  
  pumpGylle() {
    strokeWeight(5);
    stroke(gylleGrøn);
    noFill();
    line(152, 37, 152, 153);
    arc(160, 37, 15, 15, PI, PI + HALF_PI);
    line(160, 29, 206, 29);
    arc(206, 37, 15, 15, - HALF_PI, 0);         
    strokeCap(SQUARE);
    line(214,37, 214, 47);
    strokeCap(ROUND);
  }
}