var level2State = {
	
preload: function() {
    game.load.image('pineapple', 'images/pineapple.png');
    game.load.image('bg2', 'images/bg2.png');

},


 create: function() {
	game.add.sprite(0, 0, 'bg2');
	 
	catcher = game.add.sprite(game.width / 2, 550, 'catcher');
	 
	game.physics.enable(catcher, Phaser.Physics.ARCADE);
	 
	GameOver = game.add.text(game.width / 2, game.height / 2, '', {
			fontSize: '40px',
			fill: 'red'
		});
	GameOver.anchor.set(0.5, 0.5);

	cursors = game.input.keyboard.createCursorKeys();
	 
	 		 //  Create our Timer
		timer = game.time.create();

		//  Set a TimerEvent to occur every second
		timer.loop(1000, this.updateCounter, this);

		//  Start the timer running - this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
		timer.start();
		
		Countdown = game.add.text(10 , 10, '20', {
			fontSize: '40px',
			fill: 'red'
		});

    pineapples = game.add.group();
    pineapples.enableBody = true;
    pineapples.physicsBodyType = Phaser.Physics.ARCADE;

    for (var i = 0; i < 10; i++)
    {
        var pineapple = pineapples.create(200 + i * 48,50, 'pineapple');

        //This allows your sprite to collide with the world bounds like they were rigid objects
        pineapple.body.collideWorldBounds=true;
        pineapple.body.gravity.x = game.rnd.integerInRange(-50, 50);
        pineapple.body.gravity.y = 100 + Math.random() * 100;
        pineapple.body.bounce.setTo(0.9, 0.9);

    }

},
	
update: function () {

		if (cursors.left.isDown && catcher.x > 5) {
			catcher.x -= 5;
			//scalling 100% to point the element in opposite direction
			catcher.scale.x = 1
		}
		if (cursors.right.isDown && catcher.x < game.width - 5) {
			catcher.x += 5;
			catcher.scale.x = -1
		}
	
	   game.physics.arcade.overlap(catcher, pineapples, this.collisionHandler);
		


	},
	
	collisionHandler: function() {
		catcher.destroy();
		pineapples.destroy();
		timer.stop();
		Countdown.destroy();
		GameOver = game.add.text(game.world.centerX, -100, "GAME OVER", {
			font: "50px poppins",
			fill: "#ff0044",
			fontWeight: "bold"
		});
		GameOver.anchor.set(0.5);
		tween = game.add.tween(GameOver).to({
			y: game.world.centerY
		}, 1500, Phaser.Easing.Bounce.Out, !0);
		playagain = game.add.button(game.world.centerX, game.world.centerY + 60, 'button', this.actionOnClick, this, 2, 1, 0);
		playagain.anchor.set(0.5);
	},
	
	
	updateCounter: function() {
		
		if(total >= 1){
			total--;
		}
	
		if(total == 0){
			catcher.destroy();
			timer.stop();
			Countdown.destroy();
			GameOver = game.add.text(game.world.centerX, -100, "YOU WIN", {
			font: "80px poppins",
			fill: "lightgreen",
			fontWeight: "bold"
			});
			GameOver.anchor.set(0.5);
			tween = game.add.tween(GameOver).to({
				y: game.world.centerY
			}, 1500, Phaser.Easing.Bounce.Out, !0);
			playagain = game.add.button(game.world.centerX, game.world.centerY + 60, 'button', this.actionOnClick, this, 2, 1, 0);
			playagain.anchor.set(0.5);
		}
		
		Countdown.text = total;

	},
	
	actionOnClick: function() {
		total = 10;
		score = 0;
    	game.state.start('before1');
		

},
	
	
}