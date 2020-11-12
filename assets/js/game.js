// Game States
// "WIN" -- player has defeated all the enemy-robots
//  * Fight all enemy-robots
//  * Defeat all enemy-robots
// "Lose" -- the enemyrobots have defeated the player, leaving them with zero or no health

var randomNumber = function(min , max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };

window.alert("Welcome to Robot Gladiators!");

// prompt that will collect player's name
var playerInfo = {
    name : window.prompt("What is your robot's name?"),
    health : 100,
    attack : 10,
    money : 50, 

    reset: function() {
        this.health = 100;
        this.money = 50;
    },

    refillHealth: function() {
        if (this.money >= 9) {
            window.alert("You just took a potion for 20 health for 7 coins!")
            this.health += 20;
            this.money -= 9;
            window.alert("Thank's for doing business! Come again champ!");
        }
        else {
            window.alert("Sorry. Unfortunately you do not have enough coin to fulfill this purchase.")
        }
    },

    upgradeAttack: function() {
        if (this.money >= 9) {
            window.alert("You've just upgraded your attack 6 points for 7 coins!")
            this.attack += 5;
            this.money -= 9;
            window.alert("Hope to see you at the end of the next round!");
        }
        else {
            window.alert("You do not have enough coins to upgrade.")
        }
    }
};

window.alert("Your robot's stats: \nName: " + playerInfo.name + "\nHealth: " + playerInfo.health + "\nAttack: " + playerInfo.attack + "\nMoney: " + playerInfo.money);

// enemy data
var enemyInfo = [
    { name : "Roborto",
        attack: randomNumber(5, 9) },
    { name : "Amy Android",
        attack : randomNumber(6, 10) },
    { name : "Robo Trumble",
        attack : randomNumber(7, 11) },
    { name : "KITT",
        attack : randomNumber(8, 12) },
    { name : "GERTY",
        attack : randomNumber(9, 13) },
    { name : "Mega Man",
        attack : randomNumber(10, 14) },
    { name : "Doraemon",
        attack : randomNumber(11, 15) },
];
var enemyHealth = Math.floor(Math.random() * 21) + 40;
var enemyAttack = 12;


window.alert("Welcome " + playerInfo.name + "!");

// this creates a function named "fight"

var fight = function(enemy) {

   // repeat and execute as long as enemy-robot AND player-robot is still alive
   while (enemy.health > 0 && playerInfo.health > 0) { 
        // prompt for skipping fight
        var promptFight = window.prompt("Would you like FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose?")
        console.log(promptFight)

        // if player choses to skip, then skip
        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
            window.alert(playerInfo.name + " has chosen to skip the fight!");
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert( playerInfo.name + " has decide to skip this fight.");
                //subtract money from player for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money: ", playerInfo.money);
                break;
            }
        }

            // subtract the value of `playerInfo.attack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            enemy.health = Math.max(0, enemy.health - damage);
            // log a resulting message to the console so we know that it worked.
            console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");

            // check enemy's health
            if (enemy.health<= 0){
                window.alert(enemy.name + " has died!");
                break; // exits while loop if enemy dies
            }
            else {
                window.alert(enemy.name+ " has " + enemy.health + " health left.");
            };
            
            // subtract the value of `enemyAttack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            // log a resulting message to the console so we know that it worked.
            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

            // check player's health
            if (playerInfo.health <= 0){
                window.alert(playerInfo.name + " has died!");
                break; // exits while loop if player dies
            }
            else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
    };

};

// function to start game
var startGame = function () {
    playerInfo.reset();
    
    // for loop to loop attacks/rounds
    for ( var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            // alerts player round is starting and round number
            window.alert("The fight for Robot Gladiator Champion has begun! Round: " + (i + 1))
        
            // pick new enemy to fight based on the enemyName array
            var pickedEnemyObj = enemyInfo[i];
            
            // reset enemyHealth before starting a new round
            pickedEnemyObj.health = randomNumber(40 , 60);

            // debugger to pause script and find errors
            // debugger;

            // call fight function with enemy-robot
            fight (pickedEnemyObj);

            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            };
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! \nYou are the new Robot Gladiator Champion! \nYou now have a score of " + playerInfo.money + ".");
    } 
    else {
        window.alert("You've lost your robot in battle. \nFinal stats: \n" + "Money: " + playerInfo.money + "\nAttack: " + playerInfo.attack);
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
            refillHealth ()
            break;

        case "upgrade" : "UPGRADE" ;
            upgradeAttack ()
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