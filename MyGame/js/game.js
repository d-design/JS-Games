//initializing a  new game
var game = new Phaser.Game(800, 600, Phaser.CANVAS, '');

var cursors;
var cat, catcher, cursors, scoreText, GameOver;
var score = 0;
var timer;
var total = 10;
var pineapples;


//Adding each state
game.state.add('boot', bootState);
game.state.add('instruct', instructState);
game.state.add('before1', before1State);
game.state.add('level1', level1State);
game.state.add('before2', before2State);
game.state.add('level2', level2State);

//Call first state
game.state.start('boot');