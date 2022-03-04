var game = new Phaser.Game(800, 600, Phaser.AUTO , 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.image('space', 'https://labs.phaser.io/assets/skies/deep-space.jpg');
    game.load.image('asteroid', 'https://labs.phaser.io/assets/games/asteroids/asteroid2.png');
    game.load.image('bullet', 'https://examples.phaser.io/assets/games/snotattack/bullet.png');
    game.load.spritesheet('explosion', 'https://examples.phaser.io/assets/games/tanks/explosion.png', 64, 64);
    game.load.image('ufo', 'https://examples.phaser.io/assets/sprites/ufo.png');
    game.load.image('bulletUfo', 'https://examples.phaser.io/assets/bullets/bullet187.png');
    game.load.spritesheet('ship', 'https://examples.phaser.io/assets/misc/plane-sheet.png', 64, 64);

  ////////  game.load.image('boss', 'https://labs.phaser.io/assets/pics/DOG.png');

    game.load.crossOrigin = 'anonymous';
        
}

var bg;
var ship ;
var cursors;

var fireButton;
var bulletTime = 0;
var bullets;
var asteroids;
var explosions;
var ufos;
var bulletUfos;
var livingEnemies = [];
var firingTimer = 0;
var score = 0;
var lives = 3;
var scoreText;
var gameOverText;
var gameOverTextScore;
var scoreBoss= 0;
var left
var right;
var up;
var down;
var livesText;

////////////var boss;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    

    bg= game.add.tileSprite(0, 0, game.width, game.height, 'space');
    cursors = game.input.keyboard.createCursorKeys();
    

    //asteroids
    asteroids = game.add.group();
    asteroids.createMultiple(250, 'asteroid', 0, false);
             


    //ship
    ship = game.add.sprite(100, 450, 'ship',4);
    game.physics.arcade.enable(ship);
    ship.body.collideWorldBounds = true;

    left = ship.animations.add('up', [5], 10, false);
    left = ship.animations.add('left', [3], 10, true);
    left = ship.animations.add('down', [4], 10, false);
    left = ship.animations.add('right', [7], 10, false);



    //bullet
    bullets = game.add.physicsGroup();
    bullets.createMultiple(999, 'bullet', false);
    
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    bulletUfos = game.add.physicsGroup();
    bulletUfos.createMultiple(999, 'bulletUfo', false);


    


    //explosion
    explosions = game.add.group();
    explosions.createMultiple(30, 'explosion');
    explosions.forEach(setupInvader, this);

    //ufo
    ufos = game.add.group();
    ufos.createMultiple(250, 'ufo', 0, false);
    

    //text
    scoreText = game.add.text(10, 10, "Score: " + score, { font: '34px Georgia', fill: '#fff' });

    //lives
    livesText = game.add.text(675, 10, "Lives: " + lives, { font: '34px Georgia', fill: '#fff' });



    game.physics.arcade.enable(game.world, true); //fizyka na cała gre 
    game.time.events.loop(2500, generateAsteroids, this);
    game.time.events.loop(1500, generateUfo, this);
}

function update() {
    
    bg.tilePosition.y += 0.2;
  //////  if(scoreBoss >100)
  ///////////////  {
 ///////////////////       scoreBoss=0;
 /////////////////       boss = game.add.sprite(100, -100, 'boss');
  ///////////  }
   
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
      ship.y -= 1.5;
      ship.play('up');
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
      ship.y += 1.5;
      ship.play('down');
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        ship.x -= 2;
        ship.play('left');
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        ship.x += 2;
        ship.play('right');
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
      ship.y += 1.5;
      ship.play('down');
    }
    else
    {
        ship.play('up');
    }
 

    if (fireButton.isDown)
    {
        fireBullet();
    }

    
  game.physics.arcade.overlap(bullets, asteroids, collisionHandler, null, this);
  game.physics.arcade.overlap(ship, asteroids, collisionHandler2, null, this);
  game.physics.arcade.overlap(bullets, ufos, collisionHandler3, null, this);
  game.physics.arcade.overlap(bulletUfos, ship, collisionHandler4, null, this);
  game.physics.arcade.overlap(ufos, ship, collisionHandler5, null, this);

  
  
    if (game.time.now > firingTimer)
    {
        fireBulletUfo();
    }

}

function GameOverMessage(){

    scoreText.visible = false;
    livesText.visible = false;
    gameOverText = game.add.text(250,230,'Game Over' , { font: '60px Georgia', fill: '#fff' });
    gameOverTextScore = game.add.text(300,290,'Your score: ' + score , { font: '30px Georgia', fill: '#fff' });
    fireButton = game.input.keyboard.addKey(null);
    firingTimer = 100000;
    
}
function setupInvader (invader) {

    invader.anchor.x = 0.5;
    invader.anchor.y = 0.5;
    invader.animations.add('explosion');

}

function generateAsteroids() {
    var asteroid = asteroids.getFirstExists(false);

    asteroid.scale.set(game.rnd.realInRange(0.5, 1.5));
    
    var speed = game.rnd.between(7000, 12000);

    if (asteroid)
    {        
        asteroid.alpha = 0;
        asteroid.reset(game.world.randomX,-50);
       
        asteroid.frame = game.rnd.integerInRange(0,6);
        asteroid.exists = true;
        

        asteroid.body.bounce.y = 0.8;
    }
    game.add.tween(asteroid).to( { alpha: 1 }, 1000, "Linear", true); // przechdozenie z przezroczystości asteroid
    game.add.tween(asteroid).to({ y:650},speed,Phaser.Easing.Sinusoidal.InOut, true, 0, 1000, false);    
}

function generateUfo() {
    var ufo = ufos.getFirstExists(false);
    
    var speed = game.rnd.between(25000, 35000);

    if (ufo)
    {        
        ufo.alpha = 0;
       ufo.reset(game.world.randomX,-50);
       
       ufo.frame = game.rnd.integerInRange(0,6);
       ufo.exists = true;
        

       ufo.body.bounce.y = 0.8;
    }
    game.add.tween(ufo).to( { alpha: 1 }, 1000, "Linear", true); 
    game.add.tween(ufo).to({ y:650},speed,Phaser.Easing.Sinusoidal.InOut, true, 0, 1000, false);    

}



function fireBulletUfo () {

    var bulletUfo = bulletUfos.getFirstExists(false);

    
    livingEnemies.length=0;

    ufos.forEachAlive(function(ufos){

        livingEnemies.push(ufos);
    });

    if (bulletUfo && livingEnemies.length > 0)
    {
        
        var random=game.rnd.integerInRange(0,livingEnemies.length-1);

        var shooter=livingEnemies[random];
  
        bulletUfo.reset(shooter.body.x, shooter.body.y);

        game.physics.arcade.moveToObject(bulletUfo,ship,120);
        firingTimer = game.time.now + 2000;
    }
}

var explosion;
function collisionHandler (bullet, asteroid) {

    bullet.kill();
    asteroid.kill();

    score += 10;
 ////////////   scoreBoss +=10;
    scoreText.text = "Score: " + score;

    explosion = explosions.getFirstExists(false);
    explosion.reset(asteroid.body.x, asteroid.body.y);
    explosion.play('explosion', 30, false, true);
}

function collisionHandler2 (ship, asteroid) {


    asteroid.kill();
    lives-=1;

    if(lives==0)
    {
        
        
        ship.kill();
        explosion = explosions.getFirstExists(false);
        explosion.reset(ship.body.x, ship.body.y);
        explosion.play('explosion', 30, false, true);

        GameOverMessage()
    }
    else
    {
        ship.alpha = 0;
        game.add.tween(ship).to( { alpha: 1 }, 1000, "Linear", true);

    }
    livesText.text ="Lives: " + lives;
    
  /*  else{
        explosion = explosions.getFirstExists(false);
        explosion.reset(asteroid.body.x, asteroid.body.y);
        explosion.play('explosion', 30, false, true);

    } */
}

function collisionHandler3 (bullet, ufo) {


    bullet.kill();
    ufo.kill();

    score += 25;
  ///////////  scoreBoss += 25;
    scoreText.text = "Score: " + score;

    explosion = explosions.getFirstExists(false);
    explosion.reset(ufo.body.x, ufo.body.y);
    explosion.play('explosion', 30, false, true);


}

function collisionHandler4 (ship, bulletUfofire) {

    bulletUfofire.kill();

    lives-=1;

    if(lives==0)
    {
 
    ship.kill();

    explosion = explosions.getFirstExists(false);
    explosion.reset(ship.body.x, ship.body.y);
    explosion.play('explosion', 30, false, true);
    GameOverMessage()
    

    }
    else
    {
        ship.alpha = 0;
        game.add.tween(ship).to( { alpha: 1 }, 1000, "Linear", true);

    }

    livesText.text ="Lives: " + lives;
    
    
}

function collisionHandler5 (ship, ufo) {

    ufo.kill();

    lives-=1;

    if(lives==0)
    {
        

    ship.kill();

    explosion = explosions.getFirstExists(false);
    explosion.reset(ship.body.x, ship.body.y);
    explosion.play('explosion', 30, false, true);
    
    GameOverMessage()
    }
    else
    {
        ship.alpha = 0;
        game.add.tween(ship).to( { alpha: 1 }, 1000, "Linear", true);

    }
    livesText.text ="Lives: " + lives;
    
}



function fireBullet () {

    var bullet;
    if (game.time.time > bulletTime)
    {
        bullet = bullets.getFirstExists(false);
      

        if (bullet)
        {
            bullet.reset(ship.x +22 , ship.y -10 );
            bullet.body.velocity.y = -200;
            bulletTime = game.time.time + 1000;
        }
    }

}












function render () {

    

}