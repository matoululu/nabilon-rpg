class Game {
  constructor() {
    this.gameData = new GameData();
    this.helper = new Helper();
    this.data = this.gameData.getGameData();
    this.CharacterSheet = new CharacterSheet();
    this.travel = new Travel();
  }

  init() {
    this.data.then(data => {
      this.CharacterSheet.loadData();

      if (data) {
        this.helper.sendResponse(`T1DL: Connection established. Welcome back ${data.player.name}, I am currently located in: ${data.player.location}`, false, true);
        this.travel.handleLocation(data.player.location);
      } else {
        this.onBoarding();
      }
    });
  }

  onBoarding() {
    this.gameData.newGameData()
      .then(data => {
        this.helper.sendResponse(`INCOMING TRANSMISSION:  Greetings UltraCorp employee #4259027. You have been assigned to investigate and document cause of catastropic failure aboard Spaceship Toledo. Before connecting to your explorer unit, please confirm your name. (setname <name>)`, false, true);
        this.gameData.setGameData(['player'], ['state'], ['name']);
      });
  }
}
