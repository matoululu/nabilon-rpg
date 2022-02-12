class GameData {
  newGameData() {
    return new Promise(resolve => {
      const gameData = {
        player: {
          name: '???',
          level: 1,
          class: '???',
          quest: '',
          state: '',
          current_hp: 100,
          total_hp: 100,
          location: 'the tutorial',
          weapon: {
            name: 'Fists',
            damage: 0,
            quality: 'common',
          },
          armor: {
            name: 'Old clothes',
            defense: 0,
            quality: 'common',
          },
          inventory: {
            money: 25,
            items: {
              'health potion': 1,
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
