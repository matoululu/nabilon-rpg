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
              this.helper.sendResponse(`Now what is your profession? Are you a warrior, a mage, or a thief? (setclass <class> OR info <class>)`);
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
            if (secondParam === 'warrior' || secondParam === 'mage' || secondParam === 'thief') {
              if (secondParam === 'warrior') {
                this.helper.sendResponse(`Of course! I can sense your strength, ${secondParam}.`);
                weapon = {
                  name: 'Short sword',
                  damage: 0,
                  quality: 'common',
                };
                armor = {
                  name: 'Studded leather armor',
                  defense: 0,
                  quality: 'common',
                };
              } else if (secondParam === 'mage') {
                this.helper.sendResponse(`Outstanding! You must be wise beyond your years, ${secondParam}.`);
                weapon = {
                  name: 'Staff',
                  damage: 0,
                  quality: 'common',
                };
                armor = {
                  name: 'Cloth robe',
                  defense: 0,
                  quality: 'common',
                };
              } else if (secondParam === 'thief') {
                this.helper.sendResponse(`Wonderful! Beware what lurks in the shadows, ${secondParam}.`);
                weapon = {
                  name: 'Pair of knives',
                  damage: 0,
                  quality: 'common',
                };
                armor = {
                  name: 'Leather armor',
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
            if (secondParam === 'warrior') {
              this.helper.sendResponse(`Warriors are iron-willed fighters. Occasionally death-strike enemies that are below your level.`);
            } else if (secondParam === 'mage') {
              this.helper.sendResponse(`Mages are brilliant masters of magic. Occasionally cast a powerful that deals massive damage.`);
            } else if (secondParam === 'thief') {
              this.helper.sendResponse(`Thieves are cunning tricksters. You gain more money when defeating enemies.`);
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
