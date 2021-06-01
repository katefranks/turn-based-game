(function() {
    'use strict';

    var compHpDisplay = document.querySelector(".computer-hp");
    var playerHpDisplay = document.querySelector(".player-hp");
    var playerAttackMessage = document.querySelector(".player-status");
    var compAttackMessage = document.querySelector(".comp-status");
    var playerName = document.querySelector(".player-name");
    var compName = document.querySelector(".comp-name");
    var createPlayerAnimation = document.querySelector(".player-image");
    var createCompAnimation = document.querySelector(".comp-image");

    // var $element = document.querySelector('#elements');
    // $element.addEventListener("change", changeElement);
    //
    // function changeElement() {
    //   var value = $element.options[$element.selectedIndex].value;
    //   switch (value) {
    //     case 'water':
    //           playerName.innerHTML = "Befrese";
    //       break;
    //     case 'fire':
    //           playerName.innerHTML = "Vustrite";
    //       break;
    //     case 'air':
    //           playerName.innerHTML = "Uthine the Wind Knight";
    //       break;
    //     case 'earth':
    //           playerName.innerHTML = "Gutrium";
    //       break;
    //   }
    // }


    const Battle = function () {
        this.player = new Player
        this.comp = new Comp;
      }

    const Player = function () {
        this.health = 100;
    }


    const Comp = function () {
        this.health = 100;
    }

    Battle.prototype.start = function() {
      this.attack();
      setTimeout(function(){
       battle.counter();

      }, 2000);
    }



    Battle.prototype.attack = function() {
      // createCompAnimation.classList.remove('animate');
      const damage = Math.floor(Math.random() * 10) + 1;
      playerAttackMessage.innerHTML = `Your hit was worth ${damage} point(s)!`;
      let hp = this.comp.health - damage;
      if (hp < 0) {
      hp = 0;
      }
      this.comp.health = hp;
      compHpDisplay.innerHTML = (`${battle.comp.health}%`);
      compHpDisplay.style.width = `${battle.comp.health}%`;
      document.querySelector('.attack-button').style.visibility = 'hidden';
      // createPlayerAnimation.classList.add('animate');
      }

    Battle.prototype.counter = function() {
      // createPlayerAnimation.classList.remove('animate');
      // createCompAnimation.classList.add('animate');
      const damage = Math.floor(Math.random() * 10) + 1;
      compAttackMessage.innerHTML = `Computer's hit was worth ${damage} point(s)!`;
      let hp = this.player.health - damage;
      if (hp < 0) {
      hp = 0;
      }
      this.player.health = hp;
      playerHpDisplay.innerHTML = (`${battle.player.health}%`);
      playerHpDisplay.style.width = `${battle.player.health}%`;
      document.querySelector('.attack-button').style.visibility = 'visible';

    }

const battle = new Battle();
    const attackClick = document.querySelector('.attack-button');
    console.log(attackClick);
attackClick.addEventListener('click', function () {
  if(battle.player.health > 0 && battle.comp.health > 0){
  battle.start();

}
})

const playAgainClick = document.querySelector('.reset');

playAgainClick.addEventListener('click', function () {
  battle.player.health = 100;
  battle.comp.health = 100;
  compHpDisplay.innerHTML = "100%";
  playerHpDisplay.innerHTML = "100%";
  compHpDisplay.style.width = "100%";
  playerHpDisplay.style.width = "100%";
  playerAttackMessage.innerHTML = '';
  compAttackMessage.innerHTML = '';
})



const source = document.querySelector('.char-card').innerHTML;
const template = Handlebars.compile(source);
const context = {
  element: charType.results,
}
const html = template(context);
// console.log(html);
document.querySelector('.dropdown-content').innerHTML = html;



})();
