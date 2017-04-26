var puppy0;
var puppy1;
var puppy2;
var puppy3;
var puppy4;
var puppyArray = [];

function setup() {    
    createCanvas(640, 480);    
    puppyArray.push(loadImage("Icecream/imgres.jpg"));    
    puppyArray.push(loadImage("Icecream/images.jpg"));    
    puppyArray.push(loadImage("Icecream/imgres-1.jpg"));    
    puppyArray.push(loadImage("Icecream/imgres-2.jpg"));    
    puppyArray.push(loadImage("Icecream/imgres-3.jpg"));
}

function draw() {    // image(puppy0, 0,0);
            
    image(puppyArray[3], 0, 0);
}
//test