class EndlessMaze{
    constructor(){
        
      this.obstaclesGroup = new Group();
      
      this.velocity = 5;  
    }
        
    display(){
    
        
        
        var leftOrRight = Math.round(random (1,4));
        var x = 100;
        var wall;
        var score = 0;

        
        if(leftOrRight === 2){
            x = 900;
        }

        if(leftOrRight === 3){
            x = 350;
        }

        if(leftOrRight === 4){
            x = 225;
        }
        if(frameCount % 50 === 0){
            wall = createSprite(x,0,Math.round(random(500,550)),Math.round(random(100,150)));
            wall.shapeColor = rgb(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)));
            wall.velocityY = this.velocity;

            this.obstaclesGroup.add(wall);
        }

        this.velocity += 0.002;

        

       

        if(this.obstaclesGroup.isTouching(player)){
            gameState = "endlessMazeEnd";

            this.obstaclesGroup.destroyEach();

            this.velocity = 5;

        }
        drawSprites();
    }

    

}
