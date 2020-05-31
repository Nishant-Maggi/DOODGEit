class Maze7{
    constructor(){
        
        this.wall7Group = new Group();
        this.generateWalls7();

        this.goal7 = createSprite(375,0,50,100);
        this.goal7.shapeColor = "red";

        this.goal72 = createSprite(710,0,20,100);
        this.goal72.shapeColor = "red";
    }

    generateWalls7(){
        var wall7L1 = createSprite(150,450,250,250);
        wall7L1.shapeColor = "grey";
        this.wall7Group.add(wall7L1);

        var wall7L2 = createSprite(420,350,250,250);
        wall7L2.shapeColor = "grey";
        this.wall7Group.add(wall7L2);        
        
        var wall7R2 = createSprite(690,270,250,100);
        wall7R2.shapeColor = "grey";
        this.wall7Group.add(wall7R2);

        var wall7R1 = createSprite(1000,350,300,600);
        this.wall7Group.add(wall7R1);

        var wall7M1 = createSprite(550,150,30,50);
        this.wall7Group.add(wall7M1);

        var wall7M2 = createSprite(300,250,60,50);
        this.wall7Group.add(wall7M2);
    }

    display(){
        if(gameState === "stage7Play" ){

            player.velocityY = -5;

            if(this.wall7Group.isTouching(player)){

                this.wall7Group.destroyEach();
                this.goal7.destroy();
                this.goal72.destroy();
                gameState = "stage7End";

            }

            if(this.goal7.isTouching(player) || this.goal72.isTouching(player)){
                this.wall7Group.destroyEach();
                this.goal7.destroy();
                this.goal72.destroy();
                gameState = "stage7Win";
            }

            if(player.y < 0){
                this.wall7Group.destroyEach();
                this.goal7.destroy();
                this.goal72.destroy();
                gameState = "stage7End";
            }

            if(player.y <350){
                player.velocityY = -7;
            }
        }
        
        

        drawSprites();
        
        
    }
}