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
        this.helper.sendResponse(`Welcome back ${data.player.name}, you are currently in: ${data.player.location}`, false, true);
        this.travel.handleLocation(data.player.location);
      } else {
        this.onBoarding();
      }
    });
  }

  onBoarding() {
    this.gameData.newGameData()
      .then(data => {
        this.helper.sendResponse(`Greetings adventurer, welcome to the land of Nabilon! I am the Onboarder here to help you get started. Before you can commence your journey we need to know a little bit about you. What is your name? (setname <name>)`, false, true);
        this.gameData.setGameData(['player'], ['state'], ['name']);
      });
  }
}
