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
        items: data.player.inventory.items,
      };

      this.heroLocation.innerHTML = player.location;

      this.heroInventory.innerHTML = '';

      if (Object.keys(player.items).length > 0) {
        Object.keys(player.items).forEach((item, index) => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `${index+1}. ${item} x${player.items[item].quantity}`;
          this.heroInventory.appendChild(listItem);
        });
      }
    });
  }
}
