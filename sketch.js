var background, bgImage;
var cat, cat1, cat2, cat3;
var mouse, mouse1, mouse2, mouse3;

function preload() {
    //load the images here
    backgroundImage = loadImage("garden.png");
    cat1 = loadAnimation("cat1.png");
    cat2 = loadAnimation("cat2.png", "cat3.png");
    cat3 = loadAnimation("cat4.png");
    mouse1 = loadAnimation("mouse1.png");
    mouse2 = loadAnimation("mouse2.png", "mouse3.png");
    mouse3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    background = createSprite(500,400,20,20);
    background.addImage(backgroundImage);

    cat = createSprite(845,600,20,20);
    cat.addAnimation("cat1", cat1);
    cat.addAnimation("cat2", cat2);
    cat.addAnimation("cat3", cat3);
    cat.scale = 0.2;

    mouse = createSprite(200,600,20,20);
    mouse.addAnimation("mouse1", mouse1);
    mouse.addAnimation("mouse2", mouse2);
    mouse.addAnimation("mouse3", mouse3);
    mouse.scale = 0.15;

    //cat.debug = true;
    //mouse.debug = true;

    cat.setCollider("rectangle", 0, 0, 900, 1000);
    mouse.setCollider("rectangle", 0, 0, 700, 900);
}

function draw() {

    if(keyDown("LEFT_ARROW")) {
        mouse.changeAnimation("mouse2",mouse2);
        cat.changeAnimation("cat2",cat2);
        cat.velocityX = -5;
        cat.scale = 0.25;
    }
 
    if(keyDown("RIGHT_ARROW")) {
     mouse.changeAnimation("mouse2", mouse2);
     cat.changeAnimation("cat2", cat2);
     cat.velocityX = 5;
     cat.scale = 0.25;
    }

   if(cat.x - mouse.x <= cat.width/2 - mouse.width/2) {
     cat.velocityX = 0;
     cat.changeAnimation("cat3", cat3);
     mouse.changeAnimation("mouse3",mouse3);
     mouse.scale = 0.15;
     cat.scale = 0.22;
     cat.x = cat.x+40;
    }

    drawSprites();
}