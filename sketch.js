var rect1, rect2, rect3, rect4;
var ball, edges;
var music;

function preload(){
    music = loadSound('music.mp3');
}

function setup(){
createCanvas(800, 800);
rect1 = createSprite(100, 750, 200, 20);
rect1.shapeColor = 'red';
rect2 = createSprite(300, 750, 200, 20);
rect2.shapeColor = 'green';
rect3 = createSprite(500, 750, 200, 20);
rect3.shapeColor = 'yellow';
rect4 = createSprite(700, 750, 200, 20);
rect4.shapeColor = 'blue';

ball = createSprite(400, 400, 20, 20);
ball.shapeColor = 'red';

bordas = createEdgeSprites();
}

function draw() {
    background('orange');
    ball.bounceOff(bordas);
    if(keyDown('space')) {
        ball.velocityY = 5;
        ball.velocityX = 5;
    }
    if(rect1.isTouching(ball)) {
        ball.bounceOff(rect1);
        ball.shapeColor = 'red';
        //music.play();
    }
    if(rect2.isTouching(ball)) {
        ball.bounceOff(rect2);
        ball.shapeColor = 'green';
        //music.play();
    }
    if(rect3.isTouching(ball)) {
        ball.bounceOff(rect3);
        ball.shapeColor = 'yellow';
        //music.play();
    }
    if(rect4.isTouching(ball)) {
        ball.bounceOff(rect4);
        ball.shapeColor = 'blue';
        //music.play();
    }
    drawSprites();
}