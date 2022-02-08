class Game {
  constructor() {
    this.gameData = new GameData();
    this.helper = new Helper();
    this.data = this.gameData.getGameData();
  }

  init() {
    this.data.then(data => {
      if (data) {
        this.helper.sendResponse(`Welcome back ${data.player.name}, you are currently in: ${data.location}`);
      } else {
        this.onBoarding();
      }
    });
  }

  onBoarding() {
    this.gameData.newGameData()
      .then(data => {
        this.helper.sendResponse(
          `Welcome to the game! I see you are new here. Let's get you started. You can set your name by typing 'setname' followed by your name.`
        );
      });
  }

  getGameData() {
    const gameData = localStorage.getItem('gameData');
    if (gameData !== null) {
      return JSON.parse(gameData);
    } else {
      const newGameData = {
        player: {
          name: 'Hero',
          inventory: {
            money: 0,
            items: [],
          },
        },
        location: 'tutorial',
      };

      localStorage.setItem('gameData', JSON.stringify(newGameData));
      return JSON.parse(newGameData);
    }
  }

  setGameData(gameData) {
    return new Promise(resolve => {
      localStorage.setItem('gameData', JSON.stringify(gameData));
      resolve('Game data saved');
    })
  }
}
