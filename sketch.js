let canvas1;
let canvas2;
let canvas3;


function setup(){
    canvas1 = createCanvas(windowWidth, windowHeight);
    canvas1.position(0,0);
    canvas1.style('z-index', '-1');
    
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    background(5);
    noStroke();
    var stars = {
        posX : random(windowWidth),
        posY : random(windowHeight),
        size : random(1,6)};
    ellipse(stars.posX, stars.posY, stars.size, stars.size);
    ellipse(mouseX, mouseY, stars.size, stars.size)
}


