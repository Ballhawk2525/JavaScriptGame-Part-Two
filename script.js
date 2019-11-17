startGame();
function startGame() {
    let start = prompt("Play a Game?");
    let answer = prompt("Enter your name");
    if (start.toLowerCase() === "yes") {
    startCombat(answer);
    } else {
        console.log("Bye,", `${answer}`);
        document.write("Did you ever hear the tragedy of Darth Plagueis the Wise, ", `${answer}?`, " I thought not. It's not a story that the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such knowledge of the Dark Side that he could even keep the ones he cared about from dying. The Dark Side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic, he could save others from death, but not himself.")
    }
} 

// answer = userInput
function startCombat(userInput) {
    
    let playerHP = {
        health: 40,
        name: userInput,
        playerWins: undefined
    }; 

    let grantHP = {
        health: 10,
        name: "Grant",
        grantWins: undefined
    };
    
    let grantWins = 0;
    let playerWins = 0;
    
    while(playerHP.health > 0 && playerWins < 3) {
        playerHP.health -= getDamage();
        console.log(userInput + " has " + playerHP.health + " health points left");
        grantHP.health -= getDamage();
        console.log(grantHP.name + " has " + grantHP.health + " health points left");

        if (grantHP.health <= 0) { 
            playerWins++;
            console.log(playerWins);
            grantHP.health = 10;
            let confirm = prompt("Attack or Quit?");
            if (confirm.toLowerCase() == "attack") {
                console.log("Battle");
                playerHP.health = playerHP.health + getDamage();
                console.log(userInput + " has health is now " + playerHP.health);
                grantHP.health = grantHP.health + getDamage();
                console.log( "Grant health is now " + grantHP.health); 
            } else {
                console.log("Game Over");
                break;
            }
        }

        if (playerWins === 3 || grantWins ===1) {                                    
            console.log("3 wins reached");
            console.log(userInput + " wins!");
            return;
        } 

        if (playerHP.health <= 0 && grantHP.health >= 0) { 
            grantWins++;
            console.log(userInput + " loses!");
        }

        if (playerWins ===3 && grantWins === 1) {
            console.log("Wow....a Tie...");
        } 
    }
}
//getDamage function returns random 1-5
function getDamage() {
    return Math.floor(Math.random() * 5) + 1;
}