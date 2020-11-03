window.alert("Welcome to Robot Gladiators!");

// prompt that will collect player's name
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 50;
console.log(playerName, playerHealth, playerAttack, playerMoney);

// enemy data
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

window.alert("Welcome " + playerName + "!");

// this creates a function named "fight"

var fight = function() {
    // alerts player round is starting
    window.alert("The fight for Robot Gladiator Champion has begun!");

    // prompt for skipping fight
    var promptFight = window.prompt("Would you like FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose?")
    console.log(promptFight)

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {

        // subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
        // log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        // check enemy's health
        if (enemyHealth <= 0){
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " has " + enemyHealth + " health left.");
        };
        
        // subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        // log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        // check player's health
        if (playerHealth <= 0){
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        };
    }

    // if player choses to skip, then skip
    else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
        window.alert(playerName + " has chosen to skip the fight!");
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert( playerName + " has decide to skip this fight.");
            //subtract money from player for skipping
            playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by running fight () again
        else {
            fight ();
        }
    }
    else {
        window.alert("You need to choose a valid option. Try again!")
    }
};

fight();