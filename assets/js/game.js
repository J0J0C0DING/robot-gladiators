let randomNumber = function (min, max) {
  let value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

let playerInfo = {
  name: prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function () {
    if (this.money >= 7) {
      this.health += 20;
      this.money - +7;
    } else {
      alert("You don't have enough money!");
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      this.attack += 6;
      this.money -= 7;
    } else {
      alert("You don't have enough money!");
    }
  },
};

let enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14),
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14),
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14),
  },
];

let fight = function (enemy) {
  // Alert players that they are starting the round
  while (playerInfo.health > 0 && enemy.health > 0) {
    //Ask player if they would like to fight or skip.
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //  if player chooses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player skip
      var confirmSkip = confirm("Are you sure you'd like to quit?");

      if (confirmSkip) {
        alert(`${playerInfo.name} has chosen to skip the fight!`);
        //subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        break;
      }
    }
    //Subtract  `playerInfo.attack` from  `enemy.health` and update `enemy.health` variable
    let damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);

    console.log(`${playerInfo.name} attacked ${enemy.name}. ${enemy.name} now has ${enemy.health} health remaining `);
    // Check enemy's health
    if (enemy.health <= 0) {
      alert(`${enemy.name} has died!`);

      playerInfo.money = playerInfo.money + 20;
      break;
    } else {
      alert(`${enemy.name} still has ${enemy.health} health left.`);
    }
    // Subtract `enemy.attack` from  `playerInfo.health` and  update `playerInfo.health` variable.
    damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    // Log a resulting message to the console so we know that it worked.
    console.log(`${enemy.name} attacked ${playerInfo.name}. ${playerInfo.name} now has ${playerInfo.health} health remaining.`);
    // Check player's health
    if (playerInfo.health <= 0) {
      alert(`${playerInfo.name} has died!`);
      break;
    } else {
      alert(`${playerInfo.name} still has ${playerInfo.health} health left.`);
    }
  }
};

var startGame = function () {
  playerInfo.reset();

  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyObj = enemyInfo[i];

      pickedEnemyObj.health = randomNumber(40, 60);

      fight(pickedEnemyObj);

      if (i < enemyInfo.length - 1 && playerInfo.health > 0) {
        var storeConfirm = confirm("The fight is over, visit the store before the next round?");

        if (storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

  endGame();
};

var endGame = function () {
  if (playerInfo.health > 0) {
    alert(`Great job, you've survived the game! You now have a score of ${playerInfo.money}.`);
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

var shop = function () {
  var shopOptionPrompt = prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      playerInfo.refillHealth();
      break;

    case "UPGRADE":
    case "upgrade":
      playerInfo.upgradeAttack();
      break;

    case "LEAVE":
    case "leave":
      alert("Leaving the store.");
      break;

    default:
      alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
};

startGame();
