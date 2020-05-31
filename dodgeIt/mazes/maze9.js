class Maze9{
    constructor(){
        
        this.wall9Group = new Group();
        this.generateWalls9();

        this.goal9 = createSprite(375,0,550,100);
        this.goal9.shapeColor = "red";


    }

    generateWalls9(){
        var wall9L1 = createSprite(0,450,550,200);
        wall9L1.shapeColor = "grey";
        this.wall9Group.add(wall9L1);

        var wall9R1 = createSprite(750,450,300,200);
        wall9R1.shapeColor = "grey";
        this.wall9Group.add(wall9R1);        
        
        var wall9R2 = createSprite(750,200,850,200);
        wall9R2.shapeColor = "grey";
        this.wall9Group.add(wall9R2);
    }

    display(){
        if(gameState === "stage9Play" ){

            player.velocityY = -3.5;

            if(this.wall9Group.isTouching(player)){

                this.wall9Group.destroyEach();
                this.goal9.destroy();
                gameState = "stage9End";

            }

            if(this.goal9.isTouching(player)){
                this.wall9Group.destroyEach();
                this.goal9.destroy();
                gameState = "stage9Win";
            }

            if(player.y < 0){
                this.wall9Group.destroyEach();
                this.goal9.destroy();
                gameState = "stage9End";
            }
        }
        
        

        drawSprites();
        
        
    }
}