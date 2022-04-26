class Interact {
  constructor() {
    this.helper = new Helper();
    this.gameData = new GameData();
  }

  interactWith(location, target) {

    if (data.interact[location][target] != null) {
      const interactData = data.interact[location][target].interact;
      this.helper.sendResponse(interactData, false, true);

      this.gameData.getGameData().then(data => {
        console.log(data)
        switch(target) {
          case 'console':
            if (location === 'Landing dock') {
              if(data.player.inventory.indexOf('map')) {
                this.helper.sendResponse('T1DL: I already have the map.', false, true);
              } else {
                this.gameData.setGameData(['player'], ['inventory'], ['map']);
              }
            }
            break;
        }
      });

    } else {
      this.helper.sendResponse('ERROR: No such object to interact with.', false, true);
    }
  }

  getInfo(location, target) {
    const interactData = data.interact[location][target].info;
    if (interactData) {
      this.helper.sendResponse(interactData, false, true);
    } else {
      this.helper.sendResponse('ERROR: No such object to gather info from.', false, true);
    }
  }
}
