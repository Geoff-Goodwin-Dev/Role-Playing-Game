var characters = ["Bender B. Rondriguez", "Rosie", "Robot", "R2"];
var opponents = [];
var player;
var hPercent = 12.5;
var character0;
var character1;
var character2;
var character3;
var gameplayStarted = false;

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
  $("#characterZeroStats").attr({"name": character0.name, "healthPoints": character0.healthPoints, "attackPower": character0.attackPower, "counterAttackPower": character0.counterAttackPower})
  .html(`<p>Name: ${character0.name} <br>Health Points: ${character0.healthPoints} <br>Attack: ${character0.attackPower} <br>Counter Attack: ${character0.counterAttackPower}</p>`);

  $("#characterOneStats").attr({"name": character1.name, "healthPoints": character1.healthPoints, "attackPower": character1.attackPower, "counterAttackPower": character1.counterAttackPower})
  .html(`<p>Name: ${character1.name} <br>Health Points: ${character1.healthPoints} <br>Attack: ${character1.attackPower} <br>Counter Attack: ${character1.counterAttackPower}</p>`);

  $("#characterTwoStats").attr({"name": character2.name, "healthPoints": character2.healthPoints, "attackPower": character2.attackPower, "counterAttackPower": character2.counterAttackPower})
  .html(`<p>Name: ${character2.name} <br>Health Points: ${character2.healthPoints} <br>Attack: ${character2.attackPower} <br>Counter Attack: ${character2.counterAttackPower}</p>`);

  $("#characterThreeStats").attr({"name": character3.name, "healthPoints": character3.healthPoints, "attackPower": character3.attackPower, "counterAttackPower": character3.counterAttackPower})
  .html(`<p>Name: ${character3.name} <br>Health Points: ${character3.healthPoints} <br>Attack: ${character3.attackPower} <br>Counter Attack: ${character3.counterAttackPower}</p>`);

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
    $(this).css("display", "none");
    $("#instructions").text("Click a character to select them as your champion.  Then click Fight to proceed with picking your opponent.");


    // Animation of characters dropping into focus
    for (var i = 0; i < characters.length; i++) {
      $("#sprite" + i).animate({
        top: '250px',
        left: hPercent +'%'
      }, 1400, "easeOutBounce");
      hPercent += 20;
      }
    publishStatsToDivs();
  });

// ONCLICK OF CHARACTER FUNCTION
  $(".character").on("click", function() {
    if (gameplayStarted === false) {
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
          player = "Bender B. Rondriguez";
          opponents = ["Rosie", "Robot", "R2"];
          $("#sprite0").animate({
            top: '125px',
            left: '5px'
          }, 150, "easeOutCubic");
          $("#sprite1").animate({
            top: '0px',
            left: '550px'
          }, 150, "easeOutCubic");
          $("#sprite2").animate({
            top: '125px',
            left: '400px'
          }, 150, "easeOutCubic");
          $("#sprite3").animate({
            top: '250px',
            left: '550px'
          }, 150, "easeOutCubic");
          break;
        case "sprite1":
          player = "Rosie";
          opponents = ["Bender B. Rondriguez", "Robot", "R2"];
          $("#sprite1").animate({
            top: '125px',
            left: '5px'
          }, 150, "easeOutCubic");
          $("#sprite0").animate({
            top: '0px',
            left: '550px'
          }, 150, "easeOutCubic");
          $("#sprite2").animate({
            top: '125px',
            left: '400px'
          }, 150, "easeOutCubic");
          $("#sprite3").animate({
            top: '250px',
            left: '550px'
          }, 150, "easeOutCubic");
          break;
        case "sprite2":
          player = "Robot";
          opponents = ["Bender B. Rondriguez", "Rosie", "R2"];
          $("#sprite2").animate({
            top: '125px',
            left: '5px'
          }, 150, "easeOutCubic");
          $("#sprite0").animate({
            top: '0px',
            left: '550px'
          }, 150, "easeOutCubic");
          $("#sprite1").animate({
            top: '125px',
            left: '400px'
          }, 150, "easeOutCubic");
          $("#sprite3").animate({
            top: '250px',
            left: '550px'
          }, 150, "easeOutCubic");
          break;
        case "sprite3":
          player = "R2";
          opponents = ["Bender B. Rondriguez", "Rosie", "Robot"];
          $("#sprite3").animate({
            top: '125px',
            left: '5px'
          }, 150, "easeOutCubic");
          $("#sprite0").animate({
            top: '0px',
            left: '550px'
          }, 150, "easeOutCubic");
          $("#sprite1").animate({
            top: '125px',
            left: '400px'
          }, 150, "easeOutCubic");
          $("#sprite2").animate({
            top: '250px',
            left: '550px'
          }, 150, "easeOutCubic");
          break;
      }
      $("#player").text(player);
      $("#opponents").text(opponents.join(', '));
      $("#fight").prop("disabled", false);
    }
  });

  $("#fight").on("click", function() {
    gameplayStarted = true;
  });
});



