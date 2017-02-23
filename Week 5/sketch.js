var message = "hello";

function setup() {}

function draw() {
    background(255);
    //fill(0);
    textSize(32);
    text(message, 10, 10, 100, 100);
}

function mousePressed() {
    message = "goodbye";
}

function mouseReleased() {
    message = "";
}
//for Loop:
function setup() {
  createCanvas(200, 200);

   //For loop
    for(var i = 0; i< numberOfEllipse; i++{
    randomPositionX=random(width);
    randomPositionY=random(height);
    ellipse(randomPositionX, randomPositionY,10,10);
    })
}

function draw() {

  background(255);
  for (var i = 0; i < width; i++) {
    ellipse(i, height / 2, 10, 10);
      
  }
}

function draw() {
  for(var i = 0; i < randomHello.length; i++){
    text(randomHello[i], random(width), random(height));
  }
