class Maze10{
    constructor(){
        
        this.wall10Group = new Group();
        this.generateWalls10();

        this.goal10 = createSprite(375,0,550,100);
        this.goal10.shapeColor = "red";


    }

    generateWalls10(){
        var wall10L1 = createSprite(0,450,550,200);
        wall10L1.shapeColor = "grey";
        this.wall10Group.add(wall10L1);

        var wall10R1 = createSprite(750,450,300,200);
        wall10R1.shapeColor = "grey";
        this.wall10Group.add(wall10R1);        
        
        var wall10R2 = createSprite(750,200,850,200);
        wall10R2.shapeColor = "grey";
        this.wall10Group.add(wall10R2);
    }

    display(){
        if(gameState === "stage10Play" ){

            player.velocityY = -3.5;

            if(this.wall10Group.isTouching(player)){

                this.wall10Group.destroyEach();
                this.goal10.destroy();
                gameState = "stage10End";

            }

            if(this.goal10.isTouching(player)){
                this.wall10Group.destroyEach();
                this.goal10.destroy();
                gameState = "stage10Win";
            }

            if(player.y < 0){
                this.wall10Group.destroyEach();
                this.goal10.destroy();
                gameState = "stage10End";
            }
        }
        
        

        drawSprites();
        
        
    }
}