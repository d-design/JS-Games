var level1State = {
	
	create: function () {
		//world building / game setup - actually placing the elements
		game.add.sprite(0, 0, 'bg');

		catcher = game.add.sprite(game.width / 2, game.height / 2, 'catcher');

		cat = game.add.sprite(game.width * Math.random(), game.height * Math.random(), 'cat');
    	
		looserSound = game.add.audio('explode');
		
        

		scoreText = game.add.text(640, 10, '0 Cats',  {
			fontSize: '20px',
			fill: 'yellow'
		});
		
		GameOver = game.add.text(game.width / 2, game.height / 2, '', {
			fontSize: '40px',
			fill: 'red'
		});
		//activate the physics engine in order to move elements and place anchor points
		//takes 2 arguments: object and engine type
		game.physics.enable(catcher, Phaser.Physics.ARCADE);
		game.physics.enable(cat, Phaser.Physics.ARCADE);

		cat.anchor.set(0.5, 0.5);
		catcher.anchor.set(0.5, 0.5);
		GameOver.anchor.set(0.5, 0.5);

		//invoke the games controls
		cursors = game.input.keyboard.createCursorKeys();
		
		 //  Create our Timer
		timer = game.time.create();

		//  Set a TimerEvent to occur every second
		timer.loop(1000, this.updateCounter, this);

		//  Start the timer running - this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
		timer.start();
		
		Countdown = game.add.text(10 , 10, '10', {
			fontSize: '40px',
			fill: 'red'
		});
		

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
		if (cursors.up.isDown && catcher.y > 5) {
			catcher.y -= 5;
		}
		if (cursors.down.isDown && catcher.y < game.height - 5) {
			catcher.y += 5;
		}

		game.physics.arcade.overlap(catcher, cat, this.catHitHandler);
		

		if (score == 5) {
			
			this.level2();
			
		}
	},

	//Exstra functions
	catHitHandler: function () {
		console.log('cat caught');
		cat.x = game.width * Math.random();
		cat.y = game.height * Math.random();
		score += 1;
		scoreText.text = score + ' Cats';
	},

	level2: function () {
		total = 20;
		score = 0;
		game.state.start('before2');
	},
	
	loose: function () {
		catcher.destroy();
		cat.destroy();
		timer.stop();
		scoreText.destroy();
		Countdown.destroy();
		GameOver = game.add.text(game.world.centerX, -100, "GAME OVER", {
			font: "50px poppins",
			fill: "#ff0044",
			fontWeight: "bold"
		});
		
		looserSound.play();
		GameOver.anchor.set(0.5);
		tween = game.add.tween(GameOver).to({
			y: game.world.centerY
		}, 1500, Phaser.Easing.Bounce.Out, !0);
		playagain = game.add.button(game.world.centerX, game.world.centerY + 60, 'button', this.actionOnClick, this, 2, 1, 0);
		playagain.anchor.set(0.5);

	},
	
	actionOnClick: function() {
		total = 10;
		score = 0;
    	game.state.start('before1');
		

},
	
	updateCounter: function() {
		
		if(total > 0){
			total--;
		}
	
		if(total == 0){
			this.loose()
		}
		
		Countdown.text = total;

	},


}