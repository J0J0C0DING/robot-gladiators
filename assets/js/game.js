"use strict";

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
      //If player chooses to fight
    } else if (promptFight === "fight" || promptFight === "FIGHT") {
      //Subtract  `playerAttack` from  `enemyHealth` and update `enemyHealth` variable
      enemyHealth = enemyHealth - playerAttack;
      // Log a resulting message to the console so we know that it worked.
      console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining `);
      // Check enemy's health
      if (enemyHealth <= 0) {
        alert(`${enemyName} has died!`);
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
    } else {
      alert("You need to choose a valid option. Try again!");
    }
  }
};

for (let i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    alert("Welcome to Robot Gladiators! Round " + (i + 1));

    var pickedEnemyName = enemyNames[i];

    enemyHealth = 50;

    fight(pickedEnemyName);
  } else {
    alert("You have lost your robot in battle! Game Over!");
  }
}
