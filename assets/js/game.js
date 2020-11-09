// Game States
// "WIN" -- player has defeated all the enemy-robots
//  * Fight all enemy-robots
//  * Defeat all enemy-robots
// "Lose" -- the enemyrobots have defeated the player, leaving them with zero or no health



window.alert("Welcome to Robot Gladiators!");

// prompt that will collect player's name
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 50;
window.alert("Your robot's stats: \nName: " + playerName + "\nHealth: " + playerHealth + "\nAttack: " + playerAttack + "\nMoney: " + playerMoney);

// enemy data
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble", "KITT", "GERTY", "Mega Man", "Doraemon"];
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyNames, enemyHealth, enemyAttack);

window.alert("Welcome " + playerName + "!");

// this creates a function named "fight"

var fight = function(enemyName) {

   // repeat and execute as long as enemy-robot AND player-robot is still alive
   while (enemyHealth > 0 && playerHealth > 0) { 
        // prompt for skipping fight
        var promptFight = window.prompt("Would you like FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose?")
        console.log(promptFight)

        // if player choses to skip, then skip
        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
            window.alert(playerName + " has chosen to skip the fight!");
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert( playerName + " has decide to skip this fight.");
                //subtract money from player for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney: ", playerMoney);
                break;
            }
        }

            // subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth = enemyHealth - playerAttack;
            // log a resulting message to the console so we know that it worked.
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

            // check enemy's health
            if (enemyHealth <= 0){
                window.alert(enemyName + " has died!");
                break; // exits while loop if enemy dies
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
                break; // exits while loop if player dies
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        };

};

// function to start game
var startGame = function () {
    playerHealth = 100;
    
    // for loop to loop attacks/rounds
    for ( var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // alerts player round is starting and round number
            window.alert("The fight for Robot Gladiator Champion has begun! Round: " + (i + 1))
        
            // pick new enemy to fight based on the enemyName array
            var pickedEnemyName = enemyNames[i]
            
            // reset enemyHealth before starting a new round
            enemyHealth = 50

            // debugger to pause script and find errors
            // debugger;

            // call fight function with enemy-robot
            fight (pickedEnemyName);

            if (playerHealth > 0 && i < enemyNames.length - 1) {
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        }
        
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    // loop has ended
    endGame ();

};

// function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
     // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! \nYou are the new Robot Gladiator Champion! \nYou now have a score of " + playerMoney + ".");
    } 
    else {
        window.alert("You've lost your robot in battle. \nFinal stats: \n" + playerMoney + playerAttack);
    }

    var playAgainConfirm = window.confirm ("Would you like to play again?");

    if (playAgainConfirm) {
        // play again
        startGame ();
    }
    else {
        window.alert ("Thank you for playing Robot Gladiators! Come back soon! :)")
    }

  };

  var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    
    switch (shopOptionPrompt) {
        case "refill" : "REFILL" ;
            if (playerMoney >= 7) {
                window.alert("You just took a potion for 20 health for 7 coins!");

                playerHealth = playerHealth + 35;
                playerMoney = playerMoney - 7;
                window.alert("Thank's for doing business! Come again champ!");

            }
            else {
                window.alert("Sorry. Unfortunately you do not have enough coin to fulfill this purchase.")
            }

            break;

        case "upgrade" : "UPGRADE" ;
            if (playerMoney >= 7) {   
                window.alert("You've just upgraded your attack 6 points for 7 coins!");

                playerAttack = playerAttack + 5;
                playerMoney = playerMoney - 7;
                window.alert("Hope to see you at the end of the next round!");
            }
            else {
                window.alert("You do not have enough coins to upgrade.")
            }
            
            break;
        
        case "leave" : "LEAVE" ;
            window.alert("You are now exiting the shop. Good luck!");

            break;
    
        default:
            window.alert ("A valid selection was not made, please try again.");

            shop();
            break;

    }

};
  
startGame ();