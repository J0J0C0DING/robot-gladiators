"use strict";

var playerName = prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
  // Alert players that they are starting the round
  alert("Welcome to Robot Gladiators!");

  //Ask player if they would like to fight or skip.
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  //If player chooses to fight
  if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
    //Subtract  `playerAttack` from  `enemyHealth` and update `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining `);
    // Check enemy's health
    if (enemyHealth <= 0) {
      alert(`${enemyName} has died!`);
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
    } else {
      alert(`${playerName} still has ${playerHealth} health left.`);
    }
    //  if player chooses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
    // confirm player skip
    var confirmSkip = confirm("Are you sure you'd like to quit?");

    if (confirmSkip) {
      alert(`${playerName} has chosen to skip the fight!`);
      //subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    } else {
      fight();
    }
  } else {
    alert("You need to choose a valid option. Try again!");
  }
};

fight();

console.log(playerMoney);
