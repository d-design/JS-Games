var bootState = {
	
	preload: function() {
        var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});
        
        game.load.image('bg', 'images/bg.png');
        game.load.image('catcher', 'images/catcher.png');
        game.load.image('cat', 'images/cat.png');
		game.load.spritesheet('button','images/playagain.png', 200 , 41);
		game.load.audio('explode', 'sounds/explosion.mp3');


    },
	
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE)
        game.state.start('instruct');
    }
}