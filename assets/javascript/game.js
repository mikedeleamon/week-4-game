
 $(document).ready(function(){

// defining food here
var apple;
var candy;
var ketchup;



// Defining pokemon here

 var pika ={
 	name: "Pikachu",
 	hungerLvl:25,
 	sounds:['pika-pi', "chaaa", "pikachu"],

 	eat: function(food){
 		hungerLvl= hungerLvl-food;
 	},
 	isFull: function(){

 		if(this.hungerLvl==0){return true}

 	},


 	isStuffed: function(){
 		if(this.hungerLvl<0){return true}
 	}

 };

 var poke1 = {

 name: "charmander",
 hp: 15,
 type: "fire",
 moves:["ember","scratch","tackle"],


 ember: function (enemy){
 	if (enemy.type=="grass"){
 	enemy.hp= enemy.hp - 9;
 	}
 	else{
 		enemy.hp= enemy.hp - 5
 	}
 },
 
 scratch: function (enemy){
 	enemy.hp = enemy.hp - 3;
 },

 tackle:function(enemy){
 	enemy.hp = enemy.hp - 2;
 },

 didFaint:function(){
 	var alive;
 	if (this.hp>0){
 		alive = true;

 		}
 	}
}

 
var poke2 = {

 name: "Squrtle",
 hp: 20,
 type: "water",
 moves:["bubble","scratch","tackle"],


 bubble: function(enemy){
 	if (enemy.type=="fire"){
 	enemy.hp= enemy.hp - 9;
 	}
 	else if(enemy.type = "grass"){
 		enemy.hp= enemy.hp - 4
 	}
 	else{
 		enemy.hp= enemy.hp - 5
 	}
 },
 
 scratch: function(enemy){
 	enemy.hp = enemy.hp - 3;
 },

 tackle: function(enemy){
 	enemy.hp = enemy.hp - 2;
 },

 didFaint: function(){
 	var alive;
 	if (this.hp>0){
 		alive = true;

 		}
 	}
 }

var poke3 = {
 name: "Bulbasaur",
 hp: 14,
 type: "grass",
 moves:["Vine Whip","Photosynthesis","tackle"],


 vineWhip: function(enemy){
 	if (enemy.type=="water"){
 	enemy.hp= enemy.hp - 9;
 	}
 	else if(enemy.type = "fire"){
 		enemy.hp= enemy.hp - 4
 	}
 	else{
 		enemy.hp= enemy.hp - 5
 	}
 },
 
 Photosynthesis: function (){
 	this.hp = this.hp + 5;
 },

 tackle: function(enemy){
 	enemy.hp = enemy.hp - 2;
 },

 didFaint: function(){
 	var alive;
 	if (this.hp>0){
 		alive = true;

 		}
 	}
 };

function feedMe(){
	console.log("i started");
	pika.hungerLvl = Math.ceil(Math.random() * 35);
	apple = Math.ceil(Math.random() * 5);
	candy = Math.ceil(Math.random() * 3);
	ketchup = Math.ceil(Math.random() * 15)
	console.log("hunger lvl is " + pika.hungerLvl);
	console.log("apple is "+ apple);
	console.log("candy is " + candy);
	console.log("ketchup is " + ketchup);

	while (pika.hungerLvl > 0){
		$('#kbutt').on("click", pika.eat(ketchup));
		// generates random sound for pikachu to say thank after he's been fed
		var speak = Math.floor(Math.random() * 3);
		$().html(pika.sounds[speak]);
		console.log(pika.sounds[sounds]);

		if (pika.isFull==true){
			$("#sayIt").html("This pikachu is full, Thanks for feeding him!")
		}
		else if(pika.isStuffed==true){
			$().html("This pikachu ate too much and is now sick, we can't do anything with this one \n feed another?")
		}
	}

}

function setUp(){
	// define variables for Pokemon
	var me
	// create a random variable for the pokemonCPU
	var opponent
	// pick a pokemon

	// put pokemon into battle function

	battle(me,opponent)

}

function battle(pokemonME,pokemonCPU){
	while(pokemonME.hp != 0 || pokemonCPU != 0 ){

		//prompted user picks a move
		
		// display move set

		//move happens

		//CPU picks a move

		//move happens

		//check if pokemon are still standing

		if (pokemonME.didFaint()==true){
			//display player lost
		}
		else if (pokemonCPU.didFaint()==true) {
			//display player won
		}


	}


}
$("#feedStart").on('click',function(){
	feedMe();})


});

