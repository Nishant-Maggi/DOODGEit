var gameState = "mainMenu";

var player;

var dodgeIt;

var lev1,lev2,lev3,lev4,lev5,lev6,lev7,lev8,lev9,level0,endlessLev;

var maze1,maze2,maze3,maze4,maze5,maze6,maze7,maze8,maze9,maze10;

var edgeL,edgeR;

function setup() {

  createCanvas(1000,700);

  //createing the title for the game
  dodgeIt = createElement('h1');


  //creating the level 1 button
  lev1 = createButton('Level  1');

  //creating the level 2 button
  lev2 = createButton('Level   2');

  //creating the level 3 button
  lev3 = createButton('Level   3');

  //creating the level 4 button
  lev4 = createButton('Level   4');

  //creating the level 5 button
  lev5 = createButton('Level   5');

  //creating the level 6 button
  lev6 = createButton('Level   6');
    
  //creating the level 7 button
  lev7 = createButton('Level   7');
  
  //creating the level 8 button
  lev8 = createButton('Level   8');
  
  //creating the level 9 button
  lev9 = createButton('Level   9');

  //creating the level 10 button
  lev10 = createButton('Level   10');

  endlessMaze = createButton('Endless');


  //creating the sprite for the player
  player = createSprite(475,600,20,20);
  player.visible = false;
  player.shapeColor = "white";


  edgeL = createSprite(0,350,10,700);
  edgeL.visible = false;

  edgeR = createSprite(1000,350,10,750);
  edgeR.visible = false;
}

function draw() {
  textSize(30);
    fill ("white");

  //console.log(gameState);
  console.log(player.velocityY);

  background("black");

  player.collide(edgeL);
  player.collide(edgeR);

  if(gameState === "mainMenu"){

    player.visible = false;    
    
    //positioning the title
    fill ("yellow");
    textSize(40);
    dodgeIt.html("Dodge the Wall");
    dodgeIt.position(350,50);
    dodgeIt.show();

    text ("Dodge It",400,50);
    

    //positioning the level 1 button
    lev1.position(75,150);
    lev1.show();
   
    lev1.mousePressed(()=>{
      
      gameState = "stage1";

      maze1 = new Maze1();
      maze1.display();

      player.x = 250;
      player.y = 680;

    })


    //positioning the level 2 button
    lev2.position(325,150);
    lev2.show();

    lev2.mousePressed(()=>{

      gameState = "stage2";

      maze2 = new Maze2();
      maze2.display();

      player.x = 750;
      player.y = 680;
    })


    //positioning the level 3 button 
    lev3.position(575,150);
    lev3.show();

    lev3.mousePressed(()=>{
      gameState = "stage3";

      maze3 = new Maze3();
      maze3.display();

      player.x = 495;
      player.y = 680;
    })


    //positioning the level 4 button
    lev4.position(800,150);
    lev4.show();

    lev4.mousePressed(()=>{
      gameState = "stage4";

      maze4 = new Maze4();
      maze4.display();

      player.x = 475;
      player.y = 680;
    })


    //positioning the level 5 button
    lev5.position(200,275);
    lev5.show();

    lev5.mousePressed(()=>{
      gameState = "stage5";

      maze5 = new Maze5();
      maze5.display();

      player.x = 475;
      player.y = 680;
    })
  
    
    //positioning the level 6 button
    lev6.position(450,275);
    lev6.show();

    lev6.mousePressed(()=>{
      gameState = "stage6";

      maze6 = new Maze6();
      maze6.display();

      player.x = 705;
      player.y = 680;
    })

    //positioning the level 7 button
    lev7.position(675,275);
    lev7.show();

    lev7.mousePressed(()=>{
      gameState = "stage7";

      maze7 = new Maze7();
      maze7.display();

      player.x = 375;
      player.y = 680;
    })

    //positioning the level 8 button
    lev8.position(325,400);
    lev8.show();

    lev8.mousePressed(()=>{
      gameState = "stage8";

      maze8 = new Maze8();
      maze8.display();

      player.x = 375;
      player.y = 680;
    })

    //positioning the level 9 button
    lev9.position(550,400);
    lev9.show();

    lev9.mousePressed(()=>{
      gameState = "stage9";

      maze9 = new Maze9();
      maze9.display();

      player.x = 375;
      player.y = 680;
    })

    //positioning the level 10 button
    lev10.position(425,500);
    lev10.show();

    lev10.mousePressed(()=>{
      gameState = "stage10";

      maze10 = new Maze10();
      maze10.display();

      player.x = 375;
      player.y = 680;
    })
    
    endlessMaze.position(425,600);
    endlessMaze.show();

    endlessMaze.mousePressed(()=>{
      endlessLev = new EndlessMaze();
      gameState = "endlessMaze";
    })
  }


  if(gameState !== "mainMenu"){
    player.visible = true;
  }

  //giving the if statement for endless

  if(gameState === "endlessMaze"){
    
    buttonHide(); 

    textSize(30);
    fill ("white");
    text("Press Space to Start",250,380);

    player.visible = true;

  }


  if(gameState === "endlessMazePlay"){
    
    
    endlessLev.display();

    text ("Endless",500,100);
  }

  if(gameState === "endlessMazeEnd"){

    player.velocityY = 0;

    fill ("white");
    stroke ("black");
    textSize (20);
    text("Game Over",500,400);
    textSize (15);
    text("Press E to exit to Main Menu",500,415);
    text("Press R to Retry",500,430);
    
    
  }


  //giving the if statement for the stage 1 game state
  if(gameState === "stage1"){
       
    buttonHide(); 

    fill ("white");
    textSize(25);
    text("Press Space to Start",400,380);
    
  }

  
  if(gameState === "stage1End"){

    player.velocityY = 0;

    fill ("white");
    stroke ("black");
    textSize (20);
    text("Game Over",500,400);
    textSize (15);
    text("Press E to exit to Main Menu",500,415);
    text("Press R to Retry",500,430);
    
    
  }

  if(gameState === "stage1Win"){
    player.velocityY = 0;

    textSize (20);
    text(" You Win ",500,400);
    textSize (15);
    text(" Press E to exit to Main Menu ",500,415);
    text(" Press  Q to go to Next Level",500,430);
    text(" Press R to replay",500,445);
  }


  //giving the if statement for the stage 2
  if(gameState === "stage2"){
    
    buttonHide(); 

    textSize(20);
    text("Press Space to Start",300,380);
    
  }


  if(gameState === "stage2End"){

    player.velocityY = 0;

    fill ("white");
    stroke ("black");
    textSize (20);
    text("Game Over",500,400);
    textSize (15);
    text("Press E to exit to Main Menu",500,415);
    text("Press R to Retry",500,430);
    
    
  }

  if(gameState === "stage2Win"){
    player.velocityY = 0;

    textSize (20);
    text(" You Win ",500,400);
    textSize (15);
    text(" Press E to exit to Main Menu ",500,415);
    text(" Press  Q to go to Next Level",500,430);
    text(" Press R to replay",500,445);
  }



  //giving the if statement for stage 3

  if(gameState === "stage3"){
    buttonHide();

    textSize(20);
    text("Press Space to Start",300,380);
  }

  if(gameState === "stage3End"){

    player.velocityY = 0;

    fill ("white");
    stroke ("black");
    textSize (20);
    text("Game Over",500,400);
    textSize (15);
    text("Press E to exit to Main Menu",500,415);
    text("Press R to Retry",500,430);
    
    
  }

  if(gameState === "stage3Win"){
    player.velocityY = 0;

    textSize (20);
    text(" You Win ",500,400);
    textSize (15);
    text(" Press E to exit to Main Menu ",500,415);
    text(" Press  Q to go to Next Level",500,430);
    text(" Press R to replay",500,445);
  }



  //giving the if statement for stage 4

  if(gameState === "stage4"){
    buttonHide();

    textSize(20);
    text("Press Space to Start",300,380);
  }

  if(gameState === "stage4End"){

    player.velocityY = 0;

    fill ("white");
    stroke ("black");
    textSize (20);
    text("Game Over",500,400);
    textSize (15);
    text("Press E to exit to Main Menu",500,415);
    text("Press R to Retry",500,430);
    
    
  }

  if(gameState === "stage4Win"){
    player.velocityY = 0;

    textSize (20);
    text(" You Win ",500,400);
    textSize (15);
    text(" Press E to exit to Main Menu ",500,415);
    text(" Press  Q to go to Next Level",500,430);
    text(" Press R to replay",500,445);
  }


  //giving the if statement for stage 5

  if(gameState === "stage5"){
    buttonHide();

    textSize(20);
    text("Press Space to Start",300,380);
  }

  if(gameState === "stage5End"){

    player.velocityY = 0;

    fill ("white");
    stroke ("black");
    textSize (20);
    text("Game Over",500,400);
    textSize (15);
    text("Press E to exit to Main Menu",500,415);
    text("Press R to Retry",500,430);
    
    
  }

  if(gameState === "stage5Win"){
    player.velocityY = 0;

    textSize (20);
    text(" You Win ",500,400);
    textSize (15);
    text(" Press E to exit to Main Menu ",500,415);
    text(" Press  Q to go to Next Level",500,430);
    text(" Press R to replay",500,445);
  }


  //giving the if statement for stage 6

  if(gameState === "stage6"){
    buttonHide();

    textSize(20);
    text("Press Space to Start",300,380);
  }

  if(gameState === "stage6End"){

    player.velocityY = 0;

    fill ("white");
    stroke ("black");
    textSize (20);
    text("Game Over",500,400);
    textSize (15);
    text("Press E to exit to Main Menu",500,415);
    text("Press R to Retry",500,430);
    
    
  }

  if(gameState === "stage6Win"){
    player.velocityY = 0;

    textSize (20);
    text(" You Win ",500,400);
    textSize (15);
    text(" Press E to exit to Main Menu ",500,415);
    text(" Press  Q to go to Next Level",500,430);
    text(" Press R to replay",500,445);
  }



  //giving the if statements for stage 7

  if(gameState === "stage7"){
    buttonHide();

    textSize(20);
    text("Press Space to Start",300,380);
  }

  if(gameState === "stage7End"){

    player.velocityY = 0;

    fill ("white");
    stroke ("black");
    textSize (20);
    text("Game Over",500,400);
    textSize (15);
    text("Press E to exit to Main Menu",500,415);
    text("Press R to Retry",500,430);
    
    
  }

  if(gameState === "stage7Win"){
    player.velocityY = 0;

    textSize (20);
    text(" You Win ",500,400);
    textSize (15);
    text(" Press E to exit to Main Menu ",500,415);
    text(" Press  Q to go to Next Level",500,430);
    text(" Press R to replay",500,445);
  }


  //giving the if statement for stage 8

  if(gameState === "stage8"){
    buttonHide();

    textSize(20);
    text("Press Space to Start",300,380);
  }

  if(gameState === "stage8End"){

    player.velocityY = 0;

    fill ("white");
    stroke ("black");
    textSize (20);
    text("Game Over",500,400);
    textSize (15);
    text("Press E to exit to Main Menu",500,415);
    text("Press R to Retry",500,430);
    
    
  }

  if(gameState === "stage8Win"){
    player.velocityY = 0;

    textSize (20);
    text(" You Win ",500,400);
    textSize (15);
    text(" Press E to exit to Main Menu ",500,415);
    text(" Press  Q to go to Next Level",500,430);
    text(" Press R to replay",500,445);
  }

  //giving the if statement for stage 9

  if(gameState === "stage9"){
    buttonHide();

    textSize(20);
    text("Press Space to Start",300,380);
  }

  if(gameState === "stage9End"){

    player.velocityY = 0;

    fill ("white");
    stroke ("black");
    textSize (20);
    text("Game Over",500,400);
    textSize (15);
    text("Press E to exit to Main Menu",500,415);
    text("Press R to Retry",500,430);
    
    
  }

  if(gameState === "stage9Win"){
    player.velocityY = 0;

    textSize (20);
    text(" You Win ",500,400);
    textSize (15);
    text(" Press E to exit to Main Menu ",500,415);
    text(" Press  Q to go to Next Level",500,430);
    text(" Press R to replay",500,445);
  }

  //giving the if statement for stage 10

  if(gameState === "stage10"){
    buttonHide();

    textSize(20);
    text("Press Space to Start",300,380);
  }

  if(gameState === "stage10End"){

    player.velocityY = 0;

    fill ("white");
    stroke ("black");
    textSize (20);
    text("Game Over",500,400);
    textSize (15);
    text("Press E to exit to Main Menu",500,415);
    text("Press R to Retry",500,430);
    
    
  }

  if(gameState === "stage10Win"){
    player.velocityY = 0;

    textSize (20);
    text(" You Win ",500,400);
    textSize (15);
    text(" Press E to exit to Main Menu ",500,415);
    text(" Press  Q to go to Next Level",500,430);
    text(" Press R to replay",500,445);
  }

  //giving the if statements for displaying the mazes 

  if(maze1){
    maze1.display();
  }

  if(maze2){
    maze2.display();
  }

  if(maze3){
    maze3.display();
  }

  if(maze4){
    maze4.display();
  }

  if(maze5){
    maze5.display();
  }

  if(maze6){
    maze6.display();
  }

  if(maze7){
    maze7.display();
  }

  if(maze8){
    maze8.display();
  }

  if(maze9){
    maze9.display();
  }

  if(maze10){
    maze10.display();
  }
  
}

//creating a function for hiding all the button
function buttonHide(){
  lev1.hide();
  lev2.hide();
  lev3.hide();
  lev4.hide();
  lev5.hide();
  lev6.hide();
  lev7.hide();
  lev8.hide();
  lev9.hide();
  lev10.hide();
  dodgeIt.hide();
  endlessMaze.hide();
}

function keyPressed(){
  if(keyCode === 32){
    if(gameState==="stage1" || gameState==="stage2" || gameState==="stage3" || gameState==="stage4" || gameState==="stage5" || gameState==="stage6" || gameState==="stage7" || gameState==="stage8" || gameState==="stage9" || gameState==="stage10" || gameState==="endlessMaze" ){
      gameState = gameState + "Play"
      
      switch (gameState){
        case "stage1Play": 
        player.velocityY = -3;
        break;
        case "stage2Play":
        player.velocityY = -3;
        break;
        case "stage3Play":
        player.velocityY = -3.5;   
        break;
        case "stage4Play":
        player.velocityY = -3.5;
        break; 
        case "stage5Play":
        player.velocityY = -1;
        break;
        case "stage6Play":
        player.velocityY = -5;
        break;
        case "stage7Play":
        player.velocityY = -5;
        break;
        case "stage8Play":
        player.velocityY = -5; 
        break;
        case "stage9Play":
        player.velocityY = -5;
        break;
        case "stage10Play":
        player.velocityY = -5;
        break;          
        default:
        break;
        
      }
      if(gameState === "endlessMaze"){
        gamestate = "endlessMazePlay";
      }
    }
  }

  if(keyCode === 37 || keyCode === 39 || keyCode === 65 || keyCode === 68){
    if(gameState === "stage1Play" || gameState === "stage2Play" || gameState === "stage3Play" || gameState === "stage4Play" ){
      if(keyCode === 37 || keyCode === 65){
        player.velocityX = -4;
      }else if(keyCode === 39 || keyCode === 68){
        player.velocityX = 4;
      }

    }

    if(gameState === "stage5Play" ){
      if(keyCode === 37 || keyCode === 65){
        player.velocityX = -4.5;
      }else if(keyCode === 39 || keyCode === 68){
        player.velocityX = 4.5;
      }

    }

    if(gameState === "stage6Play" || gameState === "stage7Play" || gameState === "stage8Play"){
      if(keyCode === 37 || keyCode === 65){
        player.velocityX = -5;
      }else if(keyCode === 39 || keyCode === 68){
        player.velocityX = 5;
      }

    }

    if(gameState === "stage9Play" || gameState === "stage10Play" ||  gameState ==="endlessMazePlay"){
      if(keyCode === 37 || keyCode === 65){
        player.velocityX = -5.5;
      }else if(keyCode === 39 || keyCode === 68){
        player.velocityX = 5.5;
      }

    }
    
  }

  //stage 1 
  if(gameState === "stage1End"){
    if(keyCode === 69){
      gameState = "mainMenu";
    }
    if(keyCode === 82){
      
      maze1 = new Maze1();
      maze1.display();

      gameState = "stage1";

      player.x = 250;
      player.y = 680;
    }
  }

  if(gameState === "stage1Win"){
    if(keyCode === 69){
      gameState = "mainMenu";
    }
    if(keyCode === 82){
      gameState = "stage1";

      maze1 = new Maze1();
      maze1.display();

      player.x = 250;
      player.y = 680;
    }

    if(keyCode === 81){
      gameState = "stage2";

      maze2 = new Maze2();
      maze2.display();

      player.x = 730;
      player.y = 680;
    }
  }


  //stage 2
  if(gameState === "stage2End"){
    if(keyCode === 69 ){
      gameState = "mainMenu";
    }

      if(keyCode === 82){
       gameState = "stage2";

        maze2 = new Maze2();

        player.x = 730;
        player.y = 680;
      }
    
    }

    if(gameState === "stage2Win"){
      if(keyCode === 69){
        gameState = "mainMenu";
      }

      if(keyCode === 82){
        gameState = "stage2";

        maze2 = new Maze2();

        player.x = 730;
        player.y = 680;
      }

      if(keyCode === 81){
        gameState = "stage3";
  
        maze3 = new Maze3();
        maze3.display();
  
        player.x = 500;
        player.y = 680;
      }
    }
    


  //stage 3  
  if(gameState === "stage3End"){
    if(keyCode === 69 ){
      gameState = "mainMenu";
    }

      if(keyCode === 82){
       gameState = "stage3";

        maze3 = new Maze3();

        player.x = 500;
        player.y = 680;
      }
    
    }

    if(gameState === "stage3Win"){
      if(keyCode === 69){
        gameState = "mainMenu";
      }

      if(keyCode === 82){
        gameState = "stage3";

        maze3 = new Maze3();

        player.x = 500;
        player.y = 680;
      }

      if(keyCode === 81){
        gameState = "stage4";
  
        maze4 = new Maze4();
        maze4.display();
  
        player.x = 730;
        player.y = 680;
      }
    }


  //stage 4 
  if(gameState === "stage4End"){
    if(keyCode === 69 ){
      gameState = "mainMenu";
    }
  
    if(keyCode === 82){
      gameState = "stage4";
  
      maze4 = new Maze4();
  
      player.x = 475;
      player.y = 680;
    }       
      
  }
  
  if(gameState === "stage4Win"){
    if(keyCode === 69){
      gameState = "mainMenu";
    }
  
    if(keyCode === 82){
      gameState = "stage4";
  
      maze4 = new Maze4();
  
      player.x = 475;
      player.y = 680;
    }

    if(keyCode === 81){
      gameState = "stage5";
    
      maze5 = new Maze5();
      maze5.display();
    
      player.x = 475;
      player.y = 680;
    }
  }

  //stage5

  if(gameState === "stage5End"){
    if(keyCode === 69 ){
      gameState = "mainMenu";
    }
    
    if(keyCode === 82){
      gameState = "stage5";
    
      maze5 = new Maze5();
    
      player.x = 475;
      player.y = 680;
    }
        
  }
    
  if(gameState === "stage5Win"){
    if(keyCode === 69){
      gameState = "mainMenu";
    }
    
    if(keyCode === 82){
      gameState = "stage5";
    
      maze5 = new Maze5();
    
      player.x = 475;
      player.y = 680;
    }

    if(keyCode === 81){
      gameState = "stage6";
      
      maze6 = new Maze6();
      maze6.display();
      
      player.x = 705;
      player.y = 680;
    }
          
  }

        

  //stage 6

  if(gameState === "stage6End"){
    if(keyCode === 69 ){
      gameState = "mainMenu";
    }
      
    if(keyCode === 82){
      gameState = "stage6";
      
      maze6 = new Maze6();
      
      player.x = 705;
      player.y = 680;
    }
          
  }
      
  if(gameState === "stage6Win"){
    if(keyCode === 69){
       gameState = "mainMenu";
    }
      
    if(keyCode === 82){
      gameState = "stage6";
      
      maze6 = new Maze6();
      
      player.x = 705;
      player.y = 680;
    }    
            
    if(keyCode === 81){
      gameState = "stage7";
        
      maze7 = new Maze7();
      maze7.display();
        
      player.x = 730;
      player.y = 680;
    }
            
  }

  //stage 7
  if(gameState === "stage7End"){
    if(keyCode === 69 ){
      gameState = "mainMenu";
    }
        
    if(keyCode === 82){
      gameState = "stage7";
        
      maze7 = new Maze7();
        
      player.x = 375;
      player.y = 680;
    }
            
  }
        
  if(gameState === "stage7Win"){
    if(keyCode === 69){
      gameState = "mainMenu";
    }
        
    if(keyCode === 82){
      gameState = "stage7";
        
      maze7 = new Maze7();
        
      player.x = 375;
      player.y = 680;
    }
    
    if(keyCode === 81){
      gameState = "stage8";
        
      maze8 = new Maze8();
      maze8.display();
        
      player.x = 730;
      player.y = 680;
    }
  }

  //stage 8

  if(gameState === "stage8End"){
    if(keyCode === 69 ){
      gameState = "mainMenu";
    }
        
    if(keyCode === 82){
      gameState = "stage8";
        
      maze8 = new Maze8();
        
      player.x = 375;
      player.y = 680;
    }

    if(keyCode === 81){
      gameState = "stage9";
        
      maze9 = new Maze9();
      maze9.display();
        
      player.x = 730;
      player.y = 680;
    }
            
  }
        
  if(gameState === "stage8Win"){
    if(keyCode === 69){
      gameState = "mainMenu";
    }
        
    if(keyCode === 82){
      gameState = "stage8";
        
      maze8 = new Maze8();
        
      player.x = 375;
      player.y = 680;
    }            
  }

  //stage 9

  if(gameState === "stage9End"){
    if(keyCode === 69 ){
      gameState = "mainMenu";
    }
        
    if(keyCode === 82){
      gameState = "stage9";
        
      maze9 = new Maze9();
        
      player.x = 375;
      player.y = 680;
    }
            
  }
        
  if(gameState === "stage9Win"){
    if(keyCode === 69){
      gameState = "mainMenu";
    }
        
    if(keyCode === 82){
      gameState = "stage9";
        
      maze9 = new Maze9();
        
      player.x = 375;
      player.y = 680;
    }            
  }

  //stage 10
  if(gameState === "stage10End"){
    if(keyCode === 69 ){
      gameState = "mainMenu";
    }
        
    if(keyCode === 82){
      gameState = "stage10";
        
      maze10 = new Maze10();
        
      player.x = 375;
      player.y = 680;
    }
            
  }
        
  if(gameState === "stage10Win"){
    if(keyCode === 69){
      gameState = "mainMenu";
    }
        
    if(keyCode === 82){
      gameState = "stage10";
        
      maze10 = new Maze10();
        
      player.x = 375;
      player.y = 680;
    }            
  }

  if(gameState === "endlessMazeEnd"){
    if(keyCode === 82){
      gameState = "endlessMaze";
    }

    if(keyCode === 69){
      gameState = "mainMenu";
    }
  }
 }
  
function keyReleased(){
  if(keyCode === 37 || keyCode === 39 || keyCode === 65 || keyCode === 68){
    player.velocityX = 0;
  }
}