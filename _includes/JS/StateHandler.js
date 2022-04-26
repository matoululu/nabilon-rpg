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
            this.helper.sendResponse('ERROR: Too many parameters. Ex: setname <name>');
          } else if (secondParam) {
            //set name
            if (secondParam.length > 12) {
              this.helper.sendResponse('Name is too long. Max 12 characters.');
            } else {
              this.gameData.setGameData(['player', 'player'], ['name', 'state'], [secondParam, '']);
              this.helper.sendResponse(`APPROVED: Thank you ${secondParam}, We will now establish connection to your explorer unit T1DL.`);
              this.helper.sendResponse(`T1DL: Hello ${secondParam}, I am T1DL an explorer unit created by UltraCorp. You can interface with me by typing commands into the text box. To begin type "help" to see the list of available commands.`);
            }
          } else {
            this.helper.sendResponse('ERROR: Missing second parameter (name). Ex: setname <name>');
          }
        } else {
          this.helper.sendResponse('ERROR: Please tell us your name before you proceed. (setname <name>)');
        }
        break;
    }
  }
}
