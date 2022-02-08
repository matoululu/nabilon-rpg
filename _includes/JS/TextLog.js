class TextLog extends HTMLElement {
  constructor() {
    super();
    this.list = this.querySelector('[data-text-log-list]');
    this.location = new Location();

    document.documentElement.addEventListener('text:submit', e => {
      this.handleSubmit(e.detail.content);
    });

    document.documentElement.addEventListener('text:response', e => {
      this.handleResponse(e.detail.content);
    });
  }

  handleSubmit(content) {
    if (content) {
      this.addReply(content, true);

      const contentSplit = content.split(' ');
      const firstParam = contentSplit[0];
      const secondParam = contentSplit[1];
      const thirdParam = contentSplit[2];

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
          if (secondParam || thirdParam) {
            console.log('buy code!');
          } else {
            this.addReply('Missing 2 parameters (item and amount). Ex: buy <item> <amount>');
          }
          break;
        case 'sell':
          if (secondParam || thirdParam) {
            console.log('sell code!');
          } else {
            this.addReply('Missing 2 parameters (item and amount). Ex: sell <item> <amount>');
          }
          break;
        case 'help':
          this.addReply('Available commands: travel, buy, sell, help, where');
          this.addReply('travel <destination>');
          this.addReply('buy <item> <amount>');
          this.addReply('sell <item> <amount>');
          this.addReply('where');
          break;
        case 'where':
          this.location.getLocation();
          break;
        case 'setname':
          if (secondParam && thirdParam) {
            this.addReply('Too many parameters. Ex: setname <name>');
          } else if (secondParam) {
            //set name
            this.addReply(`Very well, I will call you ${secondParam} from now on. You can change your name at any time.`);
          } else {
            this.addReply('Missing second parameter (name). Ex: setname <destination>');
          }
          break;
        case 'clear':
          this.list.innerHTML = '';
          break;
        default:
          this.addReply('Command not found, try help');
      }
    }
  }

  handleResponse(content) {
    this.addReply(content);
  }

  addReply(content, isUser = false) {
    const item = document.createElement('li');

    if (isUser) {
      item.innerText = `> You: ${content}`;
    } else {
      item.innerText = `< ${content}`;
    }

    this.list.appendChild(item);
  }
}

customElements.define('text-log', TextLog);
