class Maze4{
    constructor(){
        
        this.wall4Group = new Group();
        this.generateWalls4();

        this.goal4 = createSprite(850,0,300,100);
        this.goal4.shapeColor = "red";


    }

    generateWalls4(){
        var wall4L1 = createSprite(150,450,200,200);
        wall4L1.shapeColor = "grey";
        this.wall4Group.add(wall4L1);

        var wall4R1 = createSprite(800,450,200,200);
        wall4R1.shapeColor = "grey";
        this.wall4Group.add(wall4R1); 
        
        var wall4M1 = createSprite(475,450,200,200);
        wall4M1.shapeColor = "grey";
        this.wall4Group.add(wall4M1);

       
        var wall4R2 = createSprite(950,150,720,75);
        wall4R2.shapeColor = "grey";
        this.wall4Group.add(wall4R2);

        var wall4L2 = createSprite(0,150,720,75);
        wall4L2.shapeColor = "grey";
        this.wall4Group.add(wall4L2);
    }

    display(){
        if(gameState === "stage4Play" ){

            player.velocityY = -3.5;

            if(this.wall4Group.isTouching(player)){

                this.wall4Group.destroyEach();
                this.goal4.destroy();
                gameState = "stage4End";

            }

            if(this.goal4.isTouching(player)){
                this.wall4Group.destroyEach();
                this.goal4.destroy();
                gameState = "stage4Win";
            }

            if(player.y < 0){
                this.wall4Group.destroyEach();
                this.goal4.destroy();
                gameState = "stage4End";
            }
        }
        
        

        drawSprites();
        
        
    }
}