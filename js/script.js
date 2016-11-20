

var INCREMENTAL_ID = 0;

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
	this.id = INCREMENTAL_ID++;
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
	return '<div class=\"game-die\" id=\"' + this.id + '\"><image class=\"game-die-image\" src=\"' + this.getImage() + '\"></image></div>';
};

function renderDice() {
	function compareValues(dieA, dieB) {
		return dieA.value - dieB.value;
	}
	//dice.sort(compareValues);
	$('.game-die').remove();
	for(var i = 0; i < DICE_NUM; i++) {
		if(dice[i].public)
		{
			$('.game-area-public').append(dice[i].getHTML());	
		}
		else
		{
			$('.game-area-cup').append(dice[i].getHTML());
		}
				
	}

	$('.game-die').mousedown(function(e) {
		var object_id = e.currentTarget.id;
		var die = getDieById(object_id);
	    switch (e.which) {
	        case 1: // Left Mouse button pressed
	            die.public = die.public ? false : true;
				renderDice();
	            break;
	        case 2: // Middle button
	            break;
	        case 3: // Right Mouse button pressed
	            break;
	        default:
	            alert('You have a strange Mouse!');
	    }
	});


}

function getDieById(id_val) {
	for(var i = 0; i < DICE_NUM; i++) {
		if(dice[i].id == id_val){
			return dice[i];
		}	
	}
	return null;
}


var dice = [];
$(document).ready(function() {
	for(var i = 0; i < DICE_NUM; i++) {
		var die = new Die();
		die.roll();
		dice.push(die);
	}
	
	renderDice();
	
	var game_cover = $('.game-area-cover');
	game_cover.css('z-index', 0);

	$('.game-die-roll').click(function(e) {
		for(var i = 0; i < DICE_NUM; i++) {
			if(dice[i].public == false){
				dice[i].roll();
			}
		}
		renderDice();
	});

	var hidden = false;
	$('.game-die-hide').click(function(e) {
		if(hidden) {
			$('.game-area-cup > .game-die').show();
			hidden = false;
		}
		else {
			$('.game-area-cup > .game-die').hide();
			hidden = true;
		}
	});

	
});



