var game = new Phaser.Game(640,480, Phaser.AUTO, 'world', {
  preload: preload, create: create, update: update });

var Xvalue = 300;
var Yvalue = 300;
var BigBallXvalue= 100;
var BigBallYvalue= 100;
var BigBallDirX=5;
var BigBallDirY=5;
function preload() {

  game.load.image('myYellowAlien', 'sprite.png');
  game.load.image('ballImage', 'ball.png');
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = '#333';

    Player = game.add.sprite(Yvalue,Xvalue, 'myYellowAlien');
    BigBall = game.add.sprite(BigBallXvalue,BigBallYvalue, 'ballImage');

    Player.scale.setTo(.2,.2);
      //  scale sprites like this:
    game.physics.arcade.enable(Player);
    game.physics.arcade.enable(BigBall);

    Player.inputEnabled = true;
    Player.events.onInputDown.add(onDown, this);
}

function update () {
  ///////////////////////////////////////////////////////////////
  Player.x = Xvalue;
  Player.y = Yvalue;
  //Xvalue = Xvalue + 5;
  //Yvalue = Yvalue + 5;

    if (Xvalue > 550) {
      Xvalue = 550;
    }

    if (Yvalue > 400){
      Yvalue = 400;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
      {
          console.log('you clicked left');
          Xvalue = Xvalue - 5;
      }
      else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
      {
          console.log('you clicked right')
          Xvalue = Xvalue + 5;
      }

//////////////////////////////////////////////////////////////

  BigBallXvalue = BigBallXvalue + BigBallDirX;
  BigBallYvalue = BigBallYvalue + BigBallDirY;

  BigBall.x = BigBallXvalue;
  BigBall.y = BigBallYvalue;

    if (BigBallXvalue > 490) {
      BigBallDirX = - BigBallDirX;
    }
    if (BigBallXvalue < 0) {
      BigBallDirX = - BigBallDirX;
    }

    if (BigBallYvalue > 380){
        BigBallDirY = - BigBallDirY;
    }

    if (BigBallYvalue < 0){
        BigBallDirY = - BigBallDirY;
    }
}

function onDown(thing) {
  console.log('clicked');
  console.log(thing.x);
  console.log(thing.y);
}
