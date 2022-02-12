class TextLog extends HTMLElement {
  constructor() {
    super();
    this.list = this.querySelector('[data-text-log-list]');
    this.location = new Location();
    this.gameData = new GameData();
    this.stateHandler = new StateHandler();
    this.travel = new Travel();
    this.game = new Game();

    document.documentElement.addEventListener('text:submit', e => {
      this.handleSubmit(e.detail.content);
    });

    document.documentElement.addEventListener('text:response', e => {
      this.handleResponse(e.detail.content, e.detail.isUser, e.detail.isNote);
    });
  }

  handleSubmit(content) {
    if (content) {
      this.addReply(content, true);

      this.gameData.getGameData().then(data => {
        if (data) {
          const state = data.player.state;

          const contentSplit = content.split(' ');
          const firstParam = contentSplit[0];
          const secondParam = contentSplit[1];
          const thirdParam = contentSplit[2];

          if (state) {
            this.stateHandler.handleState(state, firstParam, secondParam, thirdParam);
          } else {
            switch (firstParam) {
              case 'travel':
                if (secondParam && thirdParam) {
                  this.addReply('Too many parameters. Ex: travel <destination>');
                } else if (secondParam) {
                  //this.location.setLocation(secondParam);
                } else {
                  this.addReply('Missing second parameter (destination). Ex: travel <destination>');
                }
                break;
              case 'buy':
                if (secondParam && thirdParam) {
                  console.log('buy code!');
                } else {
                  this.addReply('Missing 2 parameters (item and amount). Ex: buy <item> <amount>');
                }
                break;
              case 'sell':
                if (secondParam && thirdParam) {
                  console.log('sell code!');
                } else {
                  this.addReply('Missing 2 parameters (item and amount). Ex: sell <item> <amount>');
                }
                break;
              case 'help':
                this.addReply('Available commands: travel, buy, sell, help, where');
                this.addReply('travel <destination> | travel to a specific destination');
                this.addReply('buy <item> <amount> | Buy an item');
                this.addReply('sell <item> <amount> | Sell an item');
                this.addReply('whereami | Get current location');
                this.addReply('clear | Clear all text');
                this.addReply('reset true | Restart from the beginning');
                break;
              case 'whereami':
                this.addReply(`You are currently in: ${data.player.location}`, false, true);
                this.travel.handleLocation(data.player.location);
                break;
              case 'clear':
                this.list.innerHTML = '';
                break;
              case 'reset':
                if (secondParam && thirdParam) {
                  this.addReply('Too many parameters. Ex: reset true');
                } else if (secondParam) {
                  this.list.innerHTML = '';
                  this.game.onBoarding();
                } else {
                  this.addReply('Missing second parameter (true). Ex: reset true');
                }
                break;
              default:
                this.addReply('Command not found, try help');
            }
          }
        }
      });


    }
  }

  handleResponse(content, isUser, isNote) {
    this.addReply(content, isUser, isNote);
  }

  addReply(content, isUser = false, isNote = false) {
    const item = document.createElement('li');

    if (isUser) {
      item.innerText = `> You: ${content}`;
      item.classList.add('user');
    } else {
      item.innerText = `< ${content}`;
      item.classList.add('npc');
    }

    if (isNote) {
      item.classList.add('note');
    }

    this.list.appendChild(item);
  }
}

customElements.define('text-log', TextLog);
