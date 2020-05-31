class Maze6{
    constructor(){
        
        this.wall6Group = new Group();
        this.generateWalls6();

        this.goal6 = createSprite(375,0,500,100);
        this.goal6.shapeColor = "red";


    }

    generateWalls6(){
        var wall6L1 = createSprite(0,350,300,550);
        wall6L1.shapeColor = "grey";
        this.wall6Group.add(wall6L1);

        var wall6L2 = createSprite(300,350,200,550);
        wall6L2.shapeColor = "grey";
        this.wall6Group.add(wall6L2);

        var wall6R1 = createSprite(1000,350,400,550);
        wall6R1.shapeColor = "grey";
        this.wall6Group.add(wall6R1); 
        
        var wall6R2 = createSprite(675,450,200,200);
        this.wall6Group.add(wall6R2);
        
        var wall6M1 = createSprite(725,250,100,100);
        this.wall6Group.add(wall6M1);
    }

    display(){
        if(gameState === "stage6Play" ){

            player.velocityY = -5.5;

            if(this.wall6Group.isTouching(player)){

                this.wall6Group.destroyEach();
                this.goal6.destroy();
                gameState = "stage6End";

            }

            if(this.goal6.isTouching(player)){
                this.wall6Group.destroyEach();
                this.goal6.destroy();
                gameState = "stage6Win";
            }

            if(player.y < 0){
                this.wall6Group.destroyEach();
                this.goal6.destroy();
                gameState = "stage6End";
            }
        }
        
        

        drawSprites();
        
        
    }
}