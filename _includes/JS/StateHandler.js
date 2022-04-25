class StateHandler {
  constructor() {
    this.gameData = new GameData();
    this.helper = new Helper();
    this.travel = new Travel();
  }

  handleState(state, firstParam, secondParam, thirdParam = null) {
    switch (state) {
      case 'name':
        if (firstParam === 'setname') {
          if (secondParam && thirdParam) {
            this.helper.sendResponse('Too many parameters. Ex: setname <name>');
          } else if (secondParam) {
            //set name
            if (secondParam.length > 12) {
              this.helper.sendResponse('Name is too long. Max 12 characters.');
            } else {
              this.gameData.setGameData(['player', 'player'], ['name', 'state'], [secondParam, 'class']);
              this.helper.sendResponse(`Very well, I will call you ${secondParam} from now on.`);
              this.helper.sendResponse(`Now what is your profession? Are you a hoplite, a honeymancer, or a encroacher? (setclass <class> OR info <class>)`);
            }
          } else {
            this.helper.sendResponse('Missing second parameter (name). Ex: setname <name>');
          }
        } else {
          this.helper.sendResponse('Please tell us your name before you proceed. (setname <name>)');
        }
        break;
      case 'class':
        if (firstParam === 'setclass') {
          if (secondParam && thirdParam) {
            this.helper.sendResponse('Too many parameters. Ex: setclass <class>');
          } else if (secondParam) {
            let weapon;
            let armor;
            if (secondParam === 'hoplite' || secondParam === 'honeymancer' || secondParam === 'encroacher') {
              if (secondParam === 'hoplite') {
                secondParam = 'Hoplite';
                this.helper.sendResponse(`Terrific! Your ferocity exceeds your bounds, ${secondParam}.`);
                weapon = {
                  name: 'My trusty Axe',
                  damage: 0,
                  quality: 'common',
                };
                armor = {
                  name: 'Old buckler',
                  defense: 0,
                  quality: 'common',
                };
              } else if (secondParam === 'honeymancer') {
                secondParam = 'Honeymancer';
                this.helper.sendResponse(`Splendid! I can even feel the winds of magic buzzing, ${secondParam}.`);
                weapon = {
                  name: 'My first wand',
                  damage: 0,
                  quality: 'common',
                };
                armor = {
                  name: 'Nothing!',
                  defense: 0,
                  quality: 'common',
                };
              } else if (secondParam === 'encroacher') {
                secondParam = 'Encroacher';
                this.helper.sendResponse(`Sinister! Beware what lurks in the shadows, ${secondParam}.`);
                weapon = {
                  name: 'Pair of knives',
                  damage: 0,
                  quality: 'common',
                };
                armor = {
                  name: 'Dark robes',
                  defense: 0,
                  quality: 'common',
                };
              }

              this.gameData.setGameData(['player', 'player', 'player', 'player'], ['class', 'state', 'weapon', 'armor'], [secondParam, '', weapon, armor]);
              this.helper.sendResponse(`Thank you, Now you may exit from my office and take the first step on your adventure. You will be entering the town of TODOTOWNNAME, from there ask for 'help' to get started.`);
              this.travel.setLocation('TODOTOWNNAME');
            } else {
              this.helper.sendResponse('Please choose a valid class. (setclass <class>)');
            }

          } else {
            this.helper.sendResponse('Missing second parameter (class). Ex: setclass <class>');
          }
        } else if(firstParam = 'info') {
          if (secondParam) {
            //get class info
            if (secondParam === 'hoplite') {
              this.helper.sendResponse(`Hoplites are iron-willed fighters. You have a chance to leap on enemies lower level than you, instantly killing them.`);
            } else if (secondParam === 'honeymancer') {
              this.helper.sendResponse(`Honeymancers are brilliant masters of honey magic. Occasionally cast a powerful blast of honey that deals massive damage.`);
            } else if (secondParam === 'encroacher') {
              this.helper.sendResponse(`Encroachers are cunning tricksters. Your quick hands allow you to gain more money when defeating enemies.`);
            } else {
              this.helper.sendResponse('Please choose a valid class. (info <class>)');
            }
          } else {
            this.helper.sendResponse('Missing second parameter (class). Ex: info <class>');
          }
        } else {
          this.helper.sendResponse(`I'll need to write down your profession before you can proceed. (setclass <class>)`);
        }
        break;
    }
  }
}
