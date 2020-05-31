class Maze5{
    constructor(){
        
        this.wall5Group = new Group();
        this.generateWalls5();

        this.goal5 = createSprite(375,0,275,100);
        this.goal5.shapeColor = "red";

        this.goal52 = createSprite(1000,0,500,100);
        this.goal52.shapeColor = "red";

    }

    generateWalls5(){
        var wall5L1 = createSprite(0,400,400,350);
        wall5L1.shapeColor = "grey";
        this.wall5Group.add(wall5L1);

        var wall5L2 = createSprite(0,100,500,50);
        wall5L2.shapeColor = "grey";
        this.wall5Group.add(wall5L2);


        var wall5R1 = createSprite(1000,450,300,420);
        wall5R1.shapeColor = "grey";
        this.wall5Group.add(wall5R1);        
        
        var wall5R2 = createSprite(700,250,200,250);
        wall5R2.shapeColor = "grey";
        this.wall5Group.add(wall5R2);


        var wall5M1 = createSprite(400,480,250,250);
        wall5M1.shapeColor = "grey";
        this.wall5Group.add(wall5M1);

        var wall5M2 = createSprite(420,200,290,140);
        wall5M2.shapeColor = "grey";
        this.wall5Group.add(wall5M2);

        var wall5M3 = createSprite(570,480,50,50);
        wall5M3.shapeColor = "grey";
        this.wall5Group.add(wall5M3);

        var wall5M4 = createSprite(560,100,30,30);
        wall5M4.shapeColor = "grey";
        this.wall5Group.add(wall5M4);

        var wall5R3 = createSprite(800,140,100,30);
        this.wall5Group.add(wall5R3);

        var wall5R4 = createSprite(900,190,30,100);
        this.wall5Group.add(wall5R4);
    }

    display(){
        if(gameState === "stage5Play" ){

            player.velocityY = -4.5;

            if(this.wall5Group.isTouching(player)){

                this.wall5Group.destroyEach();
                this.goal5.destroy();
                this.goal52.destroy();
                gameState = "stage5End";

            }

            if(this.goal5.isTouching(player) || this.goal52.isTouching(player)){
                this.wall5Group.destroyEach();
                this.goal5.destroy();
                this.goal52.destroy();
                gameState = "stage5Win";
            }

            if(player.y < 0){
                this.wall5Group.destroyEach();
                this.goal5.destroy();
                this.goal52.destroy();
                gameState = "stage5End";
            }
        }
        
        

        drawSprites();
        
        
    }
}