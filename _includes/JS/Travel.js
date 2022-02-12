class Travel {
  constructor() {
    this.helper = new Helper();
    this.gameData = new GameData();
  }

  setLocation(location) {
    // I hate myself for this
    setTimeout(() => {
      this.helper.sendResponse(`Traveling to: ${location}`, false, true);
      this.handleLocation(location, true);
    }, 1000);
  }

  handleLocation(location, forced = false) {

    //TODO ACTUALLY DO IT
    if (forced) {
      this.gameData.setGameData(['player'], ['location'], [location]);
    }

    switch (location) {
      case 'TODOTOWNNAME':
        this.helper.sendResponse('You find yourself in a small port town. The smell of fresh ocean air is strong here. You see a small shop with a sign that says "TODO SHOPNAME".');
        this.helper.sendResponse('You can go to the shop, or go to the tavern. (visit <location>)');
        this.helper.sendResponse('You can also go to the next town. (travel <location>)');
        break;
    }
  }
}
