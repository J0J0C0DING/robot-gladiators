var playerName = prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

let fight = function (enemyName) {
  // Alert players that they are starting the round
  while (playerHealth > 0 && enemyHealth > 0) {
    //Ask player if they would like to fight or skip.
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //  if player chooses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player skip
      var confirmSkip = confirm("Are you sure you'd like to quit?");

      if (confirmSkip) {
        alert(`${playerName} has chosen to skip the fight!`);
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }
    //Subtract  `playerAttack` from  `enemyHealth` and update `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining `);
    // Check enemy's health
    if (enemyHealth <= 0) {
      alert(`${enemyName} has died!`);

      playerMoney = playerMoney + 20;
      break;
    } else {
      alert(`${enemyName} still has ${enemyHealth} health left.`);
    }
    // Subtract `enemyAttack` from  `playerHealth` and  update `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);
    // Check player's health
    if (playerHealth <= 0) {
      alert(`${playerName} has died!`);
      break;
    } else {
      alert(`${playerName} still has ${playerHealth} health left.`);
    }
  }
};

var startGame = function () {
  for (var i = 0; i < enemyNames.length; i++) {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];

      enemyHealth = 50;

      fight(pickedEnemyName);
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

  endGame();
};

var endGame = function () {
  if (playerHealth > 0) {
    alert(`Great job, you've survived the game! You now have a score of ${playerMoney}.`);
  } else {
    alert("You've lost your robot in battle!");
  }

  var playAgainConfirm = confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame();
  } else {
    alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

startGame();
