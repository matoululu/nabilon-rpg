class GameData {
  newGameData() {
    return new Promise(resolve => {
      const gameData = {
        player: {
          name: 'Hero',
          inventory: {
            money: 0,
            items: [],
          },
        },
        location: 'tutorial',
      };

      localStorage.setItem('gameData', JSON.stringify(gameData))
      resolve(gameData);
    });
  }

  getGameData() {
    return new Promise(resolve => {
      const gameData = localStorage.getItem('gameData');

      if (gameData !== null) {
        resolve(JSON.parse(gameData));
      } else {
        resolve(null);
      }
    });
  }

  setGameData(gameData) {
    return new Promise(resolve => {
      localStorage.setItem('gameData', JSON.stringify(gameData));
      resolve('Game data saved');
    })
  }
}
