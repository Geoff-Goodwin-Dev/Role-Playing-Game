var characters = ["alpha", "beta", "gamma", "delta"];
var hPercent = 12.5;
var character0;
var character1;
var character2;
var character3;

// Character Object Constructor Function
function Sprite(name, healthPoints, attackPower, counterAttackPower, selected) {
  this.name = name;
  this.healthPoints = healthPoints;
  this.attackPower = attackPower;
  this.counterAttackPower = counterAttackPower;
  this.selected = selected;
  this.logStats = function () {
    console.log("Name:", this.name);
    console.log("Health Points:", this.healthPoints);
    console.log("Attack Power:", this.attackPower);
    console.log("Counter Attack Power:", this.counterAttackPower);
    console.log("Selected:", this.selected);
    console.log("--------------");
  };
}

// Character Object Instance Creation
// for (var i = 0; i < characters.length; i++) {
//   var spriteID = "character" + i;
//   var nameFromArray = characters[i];
//   var healthPointsRandom = getRandomIntInclusive(5, 25);
//   var attackPowerRandom = getRandomIntInclusive(1, 10);
//   var counterAttackPowerRandom = getRandomIntInclusive(1, 8);
//   spriteID = new Sprite(nameFromArray, healthPointsRandom, attackPowerRandom, counterAttackPowerRandom, false);
//   spriteID.logStats();

// CHARACTER CREATION
character0 = new Sprite(characters[0], getRandomIntInclusive(5, 25), getRandomIntInclusive(1, 10), getRandomIntInclusive(1, 8), false);
character0.logStats();
character1 = new Sprite(characters[1], getRandomIntInclusive(5, 25), getRandomIntInclusive(1, 10), getRandomIntInclusive(1, 8), false);
character1.logStats();
character2 = new Sprite(characters[2], getRandomIntInclusive(5, 25), getRandomIntInclusive(1, 10), getRandomIntInclusive(1, 8), false);
character2.logStats();
character3 = new Sprite(characters[3], getRandomIntInclusive(5, 25), getRandomIntInclusive(1, 10), getRandomIntInclusive(1, 8), false);
character3.logStats();



function publishStatsToDivs() {
  $("#characterZeroStats").attr({"name": character0.name, "healthPoints": character0.healthPoints, "attackPower": character0.attackPower, "counterAttackPower": character0.counterAttackPower});
  $("#characterZeroStats").html(`<p>Name: ${character0.name} <br>Health Points: ${character0.healthPoints} <br>Attack: ${character0.attackPower} <br>Counter Attack: ${character0.counterAttackPower}`);

  $("#characterOneStats").attr({"name": character1.name, "healthPoints": character1.healthPoints, "attackPower": character1.attackPower, "counterAttackPower": character1.counterAttackPower});
  $("#characterOneStats").html(`<p>Name: ${character1.name} <br>Health Points: ${character1.healthPoints} <br>Attack: ${character1.attackPower} <br>Counter Attack: ${character1.counterAttackPower}`);


  $("#characterTwoStats").attr({"name": character2.name, "healthPoints": character2.healthPoints, "attackPower": character2.attackPower, "counterAttackPower": character2.counterAttackPower});
  $("#characterTwoStats").html(`<p>Name: ${character2.name} <br>Health Points: ${character2.healthPoints} <br>Attack: ${character2.attackPower} <br>Counter Attack: ${character2.counterAttackPower}`);


  $("#characterThreeStats").attr({"name": character3.name, "healthPoints": character3.healthPoints, "attackPower": character3.attackPower, "counterAttackPower": character3.counterAttackPower});
  $("#characterThreeStats").html(`<p>Name: ${character3.name} <br>Health Points: ${character3.healthPoints} <br>Attack: ${character3.attackPower} <br>Counter Attack: ${character3.counterAttackPower}`);

}



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //min and max are inclusive
}

// GAMEPLAY MECHANICS
$(document).ready(function(){

// ONCLICK OF START BUTTON FUNCTION
  $("#start").on("click", function() {
    // Disables Start button on click
    $(this).prop("disabled",true);

    // Animation of characters dropping into focus
    for (var i = 0; i < characters.length; i++) {
      $("#sprite" + i).animate({
        top: '100px',
        left: hPercent +'%'
      }, 1400, "easeOutBounce");
      hPercent += 20;
      }
    publishStatsToDivs();
  });

// ONCLICK JUMP FUNCTION
  $(".character").on("click", function() {
    $(this).animate({
      top: '-=100px',
      width: '+=10px',
      left: '-=5px'
    }, 75, "easeOutCubic").animate({
      top: '+=100px',
      width: '-=10px',
      left: '+=5px'
    }, 300, "easeOutBounce");
    var clickedId = $(this).attr("id");
    switch (clickedId) {
      case "sprite0":
        $("#characterZeroStats").attr("selected", true);
        // $("#characterOneStats").attr("selected", "false");
        // $("#characterTwoStats").attr("selected", "false");
        // $("#characterThreeStats").attr("selected", "false");
        break;

    }

  });


});



