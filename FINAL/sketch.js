var bg;
var fish1X = -200;
var fish1Y = -200;
var fish2X = 0;
var fish2Y = 200;
var fish3X = 200;
var fish3Y = 0;
var fish4X = -100;
var fish4Y = 100;
var fish5X = 200;
var fish5Y = 300;
var fish6X = -100;
var fish6Y = 0;
var fish7X = 0;
var fish7Y = 500;
var waveCounter = 0;
var foodX;
var foodY;
var release = false;
var value = "";
var bubbleX;
var bubbleY;
//var song;
//function preload() {
//    song = loadSound('Bubbles.mp3'), loaded;
//}
function setup() {
    bg = loadImage("Underwater-Aquarium-Background.jpg");
    createCanvas(1000, 500);
    //song.loop();
    noStroke();
    img = loadImage("fish1.png");
    img2 = loadImage("fish4.png");
    img3 = loadImage("fish3.png");
    img4 = loadImage("fish5.png");
    img5 = loadImage("fish8.png");
    img6 = loadImage("inhabitants-npc-crab.png");
    img7 = loadImage("jelly.png");
}

function draw() {
    //water background color
    imageMode(CORNERS);
    background(bg);
    imageMode(CENTER);
    //fish1
    fish1X++;
    fish1Y++;
    if (fish1X > width && fish1Y > height) {
        fish1X = -100;
        fish1Y = -300;
    }
    image(img, fish1X, fish1Y, img.width / 6, img.height / 6);
    //fish2
    fish2X++;
    // -10, 10 controls hieght of wave
    fish2Y = 200 + map(sin(waveCounter), -1, 1, -10, 10);
    //speed
    waveCounter = waveCounter + 0.03;
    if (fish2X > width || fish2Y > height) {
        fish2X = -500;
        fish2Y = 200;
    }
    image(img2, fish2X, fish2Y, img.width / 6, img.height / 6);
    //fish 3
    fish3X++;
    fish3Y++;
    if (fish3X > width && fish3Y > height) {
        fish3X = 400;
        fish3Y = -900;
    }
    image(img3, fish3X, fish3Y, img.width / 6, img.height / 6);
    //fish 4
    fish4X++;
    // -10, 10 controls hieght of wave
    fish4Y = 300 + map(sin(waveCounter), -1, 1, -10, 50);
    //speed
    waveCounter = waveCounter + 0.04;
    if (fish4X > width || fish4Y > height) {
        fish4X = -600;
        fish4Y = 200;
    }
    image(img4, fish4X, fish4Y, img.width / 6, img.height / 6);
    //fish 5
    fish5X++;
    // -10, 10 controls hieght of wave
    fish5Y = 300 + map(sin(waveCounter), -1, 1, 40, 10);
    //speed
    waveCounter = waveCounter + 0.02;
    if (fish5X > width || fish5Y > height) {
        fish5X = -400;
        fish5Y = 300;
    }
    image(img5, fish5X, fish5Y, img.width / 6, img.height / 6);
    //fish6
    fish6X++;
    // -10, 10 controls hieght of wave
    fish6Y = 450 + map(sin(waveCounter), -10, 0, -10, 0);
    //speed
    waveCounter = waveCounter + 0.0;
    if (fish6X > width || fish6Y > height) {
        fish6X = 0;
        fish6Y = 0;
    }
    image(img6, fish6X, fish6Y, img.width / 6, img.height / 6);
    //fish 7
    fish7Y--;
    // -10, 10 controls hieght of wave
    fish7X = 600 + map(sin(waveCounter), -10, 10, 10, 0);
    //speed
    waveCounter = waveCounter + 0.00;
    if (fish7X > width || fish7Y > height) {
        fish7X = 10;
        fish7Y = 10;
    }
    image(img7, fish7X, fish7Y, img.width / 6, img.height / 6);
    //FOOD STUFF
    if (release == false) {
        //if release is false
        // follow my mouse
        foodX = mouseX;
        foodY = mouseY;
        // bubbleX = mouseX;
        // bubbleY = mouseY;
    }
    else {
        // if release is true
        // make food drop
        //if value == f
        //if value == b
        //food goes up negative
        //foodY--;
        if (value == "f") {
            foodY++;
        }
        else if (value == "b") {
            foodY--;
        }
        var fish1Food = dist(foodX, foodY, fish1X, fish1Y);
        //console.log(fish1Food);
        if (fish1Food < 80) {
            release = false;
        }
        var fish2Food = dist(foodX, foodY, fish2X, fish2Y);
        //console.log(fish2Food);
        if (fish2Food < 80) {
            release = false;
        }
        var fish3Food = dist(foodX, foodY, fish3X, fish3Y);
        //console.log(fish3Food);
        if (fish3Food < 80) {
            release = false;
        }
        var fish4Food = dist(foodX, foodY, fish4X, fish4Y);
        //console.log(fish4Food);
        if (fish4Food < 80) {
            release = false;
        }
        var fish5Food = dist(foodX, foodY, fish5X, fish5Y);
        //console.log(fish5Food);
        if (fish5Food < 80) {
            release = false;
        }
        var fish6Food = dist(foodX, foodY, fish6X, fish6Y);
        //console.log(fish6Food);
        if (fish6Food < 80) {
            release = false;
        }
        var fish7Food = dist(foodX, foodY, fish7X, fish7Y);
        //console.log(fish7Food);
        if (fish7Food < 80) {
            release = false;
        }
    }
    if (foodY > height || foodY < 0) {
        release = false;
    }
    //food and bubbles
    //if value ==f
    // var value == "f";
    // console.log();
    if (value == "f") {
        fill(139, 69, 19);
        ellipse(foodX, foodY, 10, 10);
    }
    else if (value == "b") {
        fill(255, 100);
        ellipse(foodX, foodY, 50, 50);
    }
    //fill
    //ellipse
}

function mousePressed() {
    release = true;
}

function keyPressed() {
    if (keyCode == 32) {
        value = "space"
    }
    else if (keyCode === 66) {
        value = "b"
    }
    else if (keyCode === 70) {
        value = "f"
    }
}