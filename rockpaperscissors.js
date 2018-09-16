function randomNum(){
    let CPUselection=Math.floor(Math.random()*3+1);
    return CPUselection;
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
		gamePlay=playernum-CPUselection;
		switch(gamePlay){
            case 0:
				console.log("It's a tie. " +" P1 used: "+options[playernum-1] +" CPU used: "+options[CPUselection-1]);
				break;
            case(-1):
			case(2):
				console.log("Player 1 wins "  +"P1 used: "+options[playernum-1] +" CPU used: "+options[CPUselection-1]);
				break;
			case(1):
			case(-2):
				console.log("CPU wins " +"P1 used: "+options[playernum-1] +" CPU used: "+options[CPUselection-1]);
				break;

        }	
     }
}