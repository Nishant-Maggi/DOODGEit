class Maze2{
    constructor(){
        
        this.wall2Group = new Group();
        this.generateWalls();

        this.goal2 = createSprite(500,0,750,100);
        this.goal2.shapeColor = "red";


    }

    generateWalls(){
        var wall2L1 = createSprite(0,450,550,200);
        wall2L1.shapeColor = "grey";
        this.wall2Group.add(wall2L1);

        var wall2R1 = createSprite(800,450,400,200);
        wall2R1.shapeColor = "grey";
        this.wall2Group.add(wall2R1);        
        
        var wall2R2 = createSprite(800,200,950,200);
        wall2R1.shapeColor = "grey";
        this.wall2Group.add(wall2R2);
    }

    display(){
        if(gameState === "stage2Play" ){

            player.velocityY = -3;

            if(this.wall2Group.isTouching(player)){

                this.wall2Group.destroyEach();
                this.goal2.destroy();
                gameState = "stage2End";

            }

            if(this.goal2.isTouching(player)){
                this.wall2Group.destroyEach();
                this.goal2.destroy();
                gameState = "stage2Win";
            }

            if(player.y < 0){
                this.wall2Group.destroyEach();
                this.goal2.destroy();
                gameState = "stage2End";
            }
        }
        
        

        drawSprites();
        
        
    }
}