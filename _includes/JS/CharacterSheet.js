class CharacterSheet {
  constructor() {
    this.heroInventory = document.querySelector('[data-hero-inventory]');
    this.heroLocation = document.querySelector('[data-hero-location]');

    this.init();
  }

  init() {
    document.addEventListener('gamedata:saved', () => {
      this.loadData();
    });
  }

  loadData() {
    const gameData = new GameData();
    gameData.getGameData().then(data => {

      if (!data) return;

      const player = {
        currentHp: data.player.current_hp,
        location: data.player.location,
        items: data.player.inventory,
      };

      this.heroLocation.innerHTML = player.location;

      this.heroInventory.innerHTML = '';

      console.log(player.items)

      if (player.items.length > 0) {
        player.items.forEach(item => {
          const listItem = document.createElement('li');
          listItem.innerHTML = item;
          this.heroInventory.appendChild(listItem);
        });
      }
    });
  }
}
