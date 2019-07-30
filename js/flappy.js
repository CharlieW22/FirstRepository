// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);
var score = 0;
var labelScore = score
var player;
var gravity = 200;
var gamespeed = 200
var jumpPower = 200
var pipes = [];
var pipeInterval = 1.75
var pipeGap = 100
player.body.velocity.x = 100;
player.body.velocity.y = 100;
/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
  game.load.image("playerImg", "../assets/Incognito2.png");
  game.load.audio("score", "..assets/point.ogg");
  game.load.image("pipeBlock","../assets/pipe.png");
  game.load.image("pipeEnd","../assets/pipe-end.png")
}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    game.stage.setBackgroundColor("#668cff");
  labelScore = game.add.text(20, 20, "0");
  player = game.add.sprite(20, 170, "playerImg");
  game.time.events.loop(pipeInterval * Phaser.Timer.SECOND, generatePipe);
  game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(playerJump);
  player.anchor.setTo(0.5, 0.5);
  //game.Physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.enable(player);
  player.body.gravity.y = 200
  game.time.events.loop(pipeInterval * Phaser.Timer.SECOND, generatePipe);

    // set the background colour of the scene
}

/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {

}

/*function clickhandler(event) {
  game.add.sprite(event.x, event.y, "playerImg");
  game.sound.play("score")

}*/

//function spaceHandler() {
 //game.sound.play()

//}
  function generatePipe(){
 var gapStart = game.rnd.integerInRange(1, 5 );
 for (var count=0; count < 8; count++) {
 if(count != gapStart && count != gapStart + 1) {
 addPipeBlock (750, count * 50)
 }
 }
 changeScore();
}

  function playerJump() {
     player.body.velocity.y= -200;
   }
  function addPipeBlock(x, y) {
    var block = game.add.sprite(x, y, "pipeBlock");
    pipes.push(block);
    game.physics.arcade.enable(block);
    block.body.velocity.x = -200
  }
  function changeScore() {
    score+=1
    labelScore.setText(score.toString());
  }
