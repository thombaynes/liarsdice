var images =
	{ 5 : 'images/A.png'
	, 4 : 'images/K.png'
	, 3 : 'images/Q.png'
	, 2 : 'images/J.png'
	, 1 : 'images/10.png'
	, 0 : 'images/9.png'
};

var values = 
	{ 5 : 'A'
	, 4 : 'K'
	, 3 : 'Q'
	, 2 : 'J'
	, 1 : '10'
	, 0 : '9'
};

var DICE_NUM = 5;

function Die() {
	this.public = false;
	this.value = null;
};
Die.prototype.roll = function rollDie() {
	this.value = Math.floor(Math.random() * (5 - 0 + 1));
};
Die.prototype.getImage = function() {
	return images[this.value];
};
Die.prototype.getFaceValue = function() {
	return values[this.value];
};
Die.prototype.getHTML = function () {
	return '<div class=\"game-die\"><image class=\"game-die-image\" src=\"' + this.getImage() + '\"></image></div>';
};

function renderDice() {
	function compareValues(dieA, dieB) {
		return dieA.value - dieB.value;
	}
	dice.sort(compareValues);

	for(var i = 0; i < DICE_NUM; i++) {
		$('.game-area-cup').append(dice[i].getHTML());			
	}
}

var dice = [];
$(document).ready(function() {
	for(var i = 0; i < DICE_NUM; i++) {
		var die = new Die();
		die.roll();
		dice.push(die);
	}
	renderDice();
});