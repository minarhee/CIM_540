var backgroundColor = 'gray';

var randNUM = 0;

var mapX = 0;

function setup() {
createCanvas(500,500);
    randNUM= random(254); 
    console.log(randNUM);

}

function draw() {
;
    background(backgroundColor)
//snowman
    mapX= map(mouseX,0, width,-2,2);
    fill(175,100,220);
    ellipse(200+ mapX,215,25,25);
    ellipse(200,250,50,50);
    ellipse(200,310,80,80);
 //arms
    fill(255,170,238);
    rect(225,240,50,10);
    rect(125,240,50,10);
    
    //nose
    fill(255,170,220);
    triangle(195,215,205,215,200,216)
}

function mousePressed(){
    //background(gray)
    backgroundColor='gray'
    
}

function mouseReleased(){
backgroundcolor='white'
    
}
