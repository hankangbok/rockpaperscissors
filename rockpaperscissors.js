//General global variable to keep track of which round it is
//Also a variable to keep track of wins/losses

//Indents are really wrong rn but its fine
round=1;
playerWins=0;
CPUWins=0;
ties=0;

function randomNum(){
    let CPUselection=Math.floor(Math.random()*3+1);
    return CPUselection;
}

function checkifWinner(score1,score2){
	if (score1==5){
		return displayWinner("Player 1 got 5 points! Player 1 wins!")
	}

	if (score2==5){
		return displayWinner("CPU got 5 points! CPU wins!")
	}
}

function game2(){
	CPUselection=randomNum();
	//make the player selection into number.
	//paper=1,rock=2,scissors=3
	let playerSelection=prompt("Rock, Paper, or Scissors?")
	player=playerSelection.toLowerCase();
	let options=["rock","paper","scissors"];
	playernum=4;
	switch(player){
        case "paper":
			playernum=1;
			break;
        case "rock":
			playernum=2;
			break;
        case "scissors":
			playernum=3;
			break;
        default:
			playernum=4;
			console.log("That's not a valid entry");
			break;
	}
	if (playernum<4){
        round+=1;
        gamePlay=playernum-CPUselection;
		switch(gamePlay){
            case 0:
				gameResult = "It's a tie. " +" P1 used: "+options[playernum-1] +" CPU used: "+options[CPUselection-1];	
				ties+=1;
				console.log("It's a tie. " +" P1 used: "+options[playernum-1] +" CPU used: "+options[CPUselection-1]);
				//displayWinner(gameResult);				
                break;
            case(-1):
			case(2):
				gameResult="Player 1 wins "  +"P1 used: "+options[playernum-1] +" CPU used: "+options[CPUselection-1];
				playerWins+=1;
				//displayWinner(gameResult);
				console.log("Player 1 wins "  +"P1 used: "+options[playernum-1] +" CPU used: "+options[CPUselection-1]);
				break;
			case(1):
			case(-2):
			    gameResult = "CPU wins " + "P1 used: "+options[playernum-1] +" CPU used: "+options[CPUselection-1];
				CPUWins+=1;
				//displayWinner(gameResult);
			    console.log("CPU wins " +"P1 used: "+options[playernum-1] +" CPU used: "+options[CPUselection-1]);
                break;
		}
		//check the score, and print the tally to the DOM?
		displayWinner(gameResult);
		checkifWinner(playerWins,CPUWins);
     }
}

const allbuttons = document.querySelectorAll('button');
allbuttons.forEach((eachbutton) => {
    eachbutton.addEventListener('click', game2);
});

function displayWinner(whoWon) {
  const container = document.querySelector('#displayresults');
  const content = document.createElement('div');
  content.classList.add('content');
  content.textContent = whoWon;
    
 currentscores = "Player 1 Score: " +playerWins +  " CPU Score: " + CPUWins;
 const scores = document.querySelector('#scoreboard');
 const scorecontent = document.createElement('div');
 scorecontent.classList.add('scorecontent');
 scorecontent.classList.add('resultsbox');
 scorecontent.textContent = currentscores;
 
 scores.appendChild(scorecontent); 
 container.appendChild(content);
}
// var rockbutton = document.querySelector('#rock');
// rockbutton.addEventListener('click', game2);

// var paperbutton = document.querySelector('#paper');
// paperbutton.addEventListener('click', game2);

// var scissorbutton = document.querySelector('#scissors');
// scissorbutton.addEventListener('click', game2);


//function fiverounds(){
//     while (round<=5){
//         game2();
//     }
//     results=playerWins-CPUWins;
//     if (results>0){
//         console.log("Player has won! You won " + playerWins + " times.");
//     }
//     if (results<0){
//         console.log("Player has lost! CPU won " + CPUWins + " times.");
//     }
//     if (results==0){
//         console.log("There's no winner here.");
//     }
// }