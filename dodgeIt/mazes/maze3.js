class Maze3{
    constructor(){
        
        this.wall3Group = new Group();
        this.generateWalls3();

        this.goal3 = createSprite(475,0,350,100);
        this.goal3.shapeColor = "red";


    }

    generateWalls3(){
        var wall3L1 = createSprite(0,300,350,400);
        wall3L1.shapeColor = "grey";
        this.wall3Group.add(wall3L1);

        var wall3R1 = createSprite(950,500,500,200);
        wall3R1.shapeColor = "grey";
        this.wall3Group.add(wall3R1);        
        
        var wall3R2 = createSprite(950,200,350,200);
        wall3R2.shapeColor = "grey";
        this.wall3Group.add(wall3R2);

        var wall3M1 = createSprite(400,500,300,200);
        wall3M1.shapeColor = "grey";
        this.wall3Group.add(wall3M1);

        var wall3M2 = createSprite(590,200,250,200);
        wall3M2.shapeColor = "grey";
        this.wall3Group.add(wall3M2);
    }

    display(){
        if(gameState === "stage3Play" ){

            player.velocityY = -3.5;

            if(this.wall3Group.isTouching(player)){

                this.wall3Group.destroyEach();
                this.goal3.destroy();
                gameState = "stage3End";

            }

            if(this.goal3.isTouching(player)){
                this.wall3Group.destroyEach();
                this.goal3.destroy();
                gameState = "stage3Win";
            }

            if(player.y < 0){
                this.wall3Group.destroyEach();
                this.goal3.destroy();
                gameState = "stage3End";
            }
        }
        
        

        drawSprites();
        
        
    }
}