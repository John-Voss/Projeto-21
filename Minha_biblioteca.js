function isTouching(object1, object2) {
    if(object1.y - object2.y < object2.height/2 + object1.height/2) {
        }
        else{
            return false;
        }
}
function bounceOff(object1, object2) {
    if(object1.y - object2.y < object2.height/2 + object1.height/2) {
            object1.velocityY = object1.velocityY* -1;
            object1.velocityX = object1.velocityX* -1;
            object1.shapeColor = object2.color;
            object2.shapeColor = object1.color;
    }
}