class Maze8{
    constructor(){
        
        this.wall8Group = new Group();
        this.generateWalls8();

        this.goal8 = createSprite(375,0,550,100);
        this.goal8.shapeColor = "red";


    }

    generateWalls8(){
        var wall8L1 = createSprite(0,300,150,400);
        wall8L1.shapeColor = "grey";
        this.wall8Group.add(wall8L1);

        var wall8L2 = createSprite(150,300,50,400);
        this.wall8Group.add(this.wall8L2);

        var wall8R1 = createSprite(750,300,200,300);
        wall8R1.shapeColor = "grey";
        this.wall8Group.add(wall8R1);        
        
        var wall8R2 = createSprite(1000,350,250,600);
        wall8R2.shapeColor = "grey";
        this.wall8Group.add(wall8R2);
    }

    display(){
        if(gameState === "stage8Play" ){

            player.velocityY = -5;

            if(this.wall8Group.isTouching(player)){

                this.wall8Group.destroyEach();
                this.goal8.destroy();
                gameState = "stage8End";

            }

            if(this.goal8.isTouching(player)){
                this.wall8Group.destroyEach();
                this.goal8.destroy();
                gameState = "stage8Win";
            }

            if(player.y < 0){
                this.wall8Group.destroyEach();
                this.goal8.destroy();
                gameState = "stage8End";
            }
        }
        
        

        drawSprites();
        
        
    }
}