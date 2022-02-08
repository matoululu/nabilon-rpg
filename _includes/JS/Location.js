class Location {
  constructor() {
    this.gameData = new GameData();
    this.helper = new Helper();
  }

  getLocation() {
    const gameData = this.gameData.getGameData();
    this.helper.sendResponse(`You are currently in: ${gameData.location}`)
  }

  setLocation() {
    this.travel = travel;
  }
}
