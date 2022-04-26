class GameData {
  newGameData() {
    return new Promise(resolve => {
      const gameData = {
        player: {
          name: '???',
          state: '',
          location: 'Landing dock',
          inventory: {
            items: {
              'Health potion': {
                'quantity': 1,
                'value': 10,
              }
            },
          },
        },
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

  setGameData(keysPrimary = [], keysSecondary = null, values) {
    this.getGameData()
      .then(data => {

        //Loop through the keysPrimary and loop through the values
        keysPrimary.forEach((keyPrimary, index) => {
          if (keysSecondary === null) {
            data[keyPrimary] = values[index];
          } else {
            data[keyPrimary][keysSecondary[index]] = values[index];
          }
        });

        localStorage.setItem('gameData', JSON.stringify(data));

        const saveEvent = new CustomEvent('gamedata:saved', {
          bubbles: true,
        });

        document.dispatchEvent(saveEvent);
      });
  }
}
