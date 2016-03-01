$(document).ready(function(){

//////////////////////INITIALIZE/////////////////////////////////////////////////////////////////////////////
	var themes = [movies, superheroes, techCompanies, cars, fbteams, pets];
	var movies = ["scarface", "ferris bueller's day off", "something about mary", "back to school", "the last dragon", "a series of unfortunate events"];
	var superheroes = ["batman", "spiderman", "black widow", "wonder woman", "iron man", "superman"];
	var techCompanies = ["oracle", "google", "apple", "yahoo", "intel", "microsoft"];
	var cars = ["mercedes benz","rolls royce", "mclaren","daewoo","bentley","jaguar"]
	var fbteams = ["packers", "steelers", "patriots", "dolphins" , "cowboys", "giants"];
	var pets = ["ferret", "parrot", "hamster", "turtle", "goldfish", "tarantula"];
	var themeChoice = "";
	var userGuessArray = [];
	// var gameWordArray = this.gameWord.split("");
	var game = {
		gameBoard:[],
		gameWord: "",
		guessesRemaining:11,
		configureGameBoard:function(theme){
			switch(theme){ //generate a game word based on user's theme selection
				case "superheroes":
					this.gameWord = superheroes[Math.floor(Math.random()*superheroes.length)];
					break;
				case "movies":
					this.gameWord = movies[Math.floor(Math.random()*movies.length)];
					break;
				case "techCompanies":
					this.gameWord = sports[Math.floor(Math.random()*techCompanies.length)];
					break;
				case "cars":
					this.gameWord = cars[Math.floor(Math.random()*cars.length)];
					break;
				case "fbteams":
					this.gameWord = fbteams[Math.floor(Math.random()*fbteams.length)];
					break;
				case "pets":
					this.gameWord = pets[Math.floor(Math.random()*pets.length)];
					break;
				default:
					break;
			}
			for (i=0;i<this.gameWord.length;i++){ //gameBoard is the hidden representation of the gameWord
				//console.log(this.gameWord[i]); //for testing
				if(this.gameWord[i]==="-"||this.gameWord[i]==="'"||this.gameWord[i]===" "){
					this.gameBoard.push(this.gameWord[i]);
				}
				else {
					this.gameBoard.push("_");
				}
			}//for
			$("#correctGuesses").text(this.gameBoard.join(" "));
		},//closes configureGameBoard()

		processGuess:function(guess){
			var correctGuess = false;
			for (i=0;i<this.gameWord.length;i++){
				if(guess == this.gameWord[i]){
					this.gameBoard[i] = this.gameWord[i];
					correctGuess = true;
				}
			}
			$("#correctGuesses").html(this.gameBoard.join(" "));
			if (!correctGuess){
				// this.guessesRemaining--;
				$("#guessesRemaining").text(--this.guessesRemaining);
				$("#wrongGuesses").text(userGuessArray.push(guess));

			}
			
		}//closes processGuess
	}//closes the game object	



///////////////////////////////////EXECUTE/////////////////////////////////////////////////////
//click listener for theme button configures the game for the chosen theme.
	$(".theme").click(function(){
		console.log("User chose a theme");
		game.configureGameBoard($(this).attr('id'));
		alert("You chose a theme. Now try to guess the word");
		console.log(game.gameWord);
		// $("#correctGuesses").text(game.gameBoard);
	});

	document.onkeyup = function (event){
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess);
		game.processGuess(userGuess);
	}
	// $("input").on("keyup",function(event){
	// 	console.log(event.which);
	// 	game.processGuess(String.fromCharCode(event.which).toLowerCase());
	// 	$("#correctGuesses").text(game.gameBoard.join(" "));
	// 	if(game.guessesRemaining==0){
	// 		alert("Sorry, you lost");
	// 	}
	// 	else if(JSON.stringify(game.gameBoard) == JSON.stringify(gameWordArray)){
	// 		alert("YOU WON!!");
	// 	}

	// });


});