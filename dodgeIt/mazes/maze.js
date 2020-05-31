class Maze1{
    constructor(){
        
        this.wallGroup = new Group();
        this.generateObs();

        this.goal = createSprite(500,0,1000,100);
        this.goal.shapeColor = "red";


    }

    generateObs(){
        var wallL1 = createSprite(0,400,700,200);
        wallL1.shapeColor = "grey";
        this.wallGroup.add(wallL1);

           
        
        var wallR2 = createSprite(800,150,900,200);
        wallR2.shapeColor = "grey";
        this.wallGroup.add(wallR2);

        
    }

    display(){
        if(gameState === "stage1Play" ){

            player.velocityY = -3;

            if(this.wallGroup.isTouching(player)){
                
                this.wallGroup.destroyEach();
                this.goal.destroy();
                gameState = "stage1End";

            }
            
            if(this.goal.isTouching(player)){
                this.wallGroup.destroyEach();
                this.goal.destroy();
                gameState = "stage1Win";
            }
            
        }

        

        drawSprites();
        
        
    }
}