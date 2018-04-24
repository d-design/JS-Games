var before1State = {
	create: function () {
		game.add.sprite(0, 0, 'bg');
		var instructions = game.add.text(game.world.centerX, game.world.centerY, 'Level 1:\nMove the catcher with the arrow keys.\nCatch 5 cats in 10 seconds.', {
			font: "25px Poppins",
			fill: "#fff",
			align: "center",
			fontWeight: "bold"

		});
		instructions.anchor.set(0.5);
		instructions.alpha = 0;
		instructions.addColor('#8e1a31', 0);
		instructions.addColor('#ffffff', 8);
		tween = game.add.tween(instructions).to( { alpha: 1 }, 3000, "Linear", true, 0, -1);
		tween.yoyo(true, 1000);

		setTimeout(function () {
			game.state.start("level1")
		}, 7000);
	},
}// JavaScript Document