class CharacterSheet {
  constructor() {
    this.heroName = document.querySelector('[data-hero-name]');
    this.heroClass = document.querySelector('[data-hero-class]');
    this.heroLevel = document.querySelector('[data-hero-level]');
    this.heroCurrentHp = document.querySelector('[data-hero-current-hp]');
    this.heroTotalHp = document.querySelector('[data-hero-total-hp]');
    this.heroInventory = document.querySelector('[data-hero-inventory]');
    this.heroQuest = document.querySelector('[data-hero-quest]');
    this.heroWeapon = document.querySelector('[data-hero-weapon]');
    this.heroArmor = document.querySelector('[data-hero-armor]');

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
        name: data.player.name,
        currentHp: data.player.current_hp,
        totalHp: data.player.total_hp,
        level: data.player.level,
        class: data.player.class,
        //quest: data.player.quest,
        money: data.player.inventory.money,
        items: data.player.inventory.items,
        weapon: data.player.weapon,
        armor: data.player.armor,
      };

      console.log(player.weapon);

      this.heroName.innerHTML = player.name;
      this.heroClass.innerHTML = player.class;
      this.heroLevel.innerHTML = player.level;
      this.heroCurrentHp.innerHTML = player.currentHp;
      this.heroTotalHp.innerHTML = player.totalHp;

      this.heroWeapon.innerHTML = player.weapon.name;
      this.heroWeapon.classList.add(player.weapon.quality);

      this.heroArmor.innerHTML = player.armor.name;
      this.heroArmor.classList.add(player.armor.quality);

      // if (player.quest !== '') {
      //   this.heroQuest.innerHTML = player.quest;
      // } else {
      //   this.heroQuest.innerHTML = 'None';
      // }

      this.heroInventory.innerHTML = '';
      const coins = document.createElement('li');
      coins.innerHTML = `Coins x${player.money}`;
      this.heroInventory.appendChild(coins);

      if (Object.keys(player.items).length > 0) {
        Object.keys(player.items).forEach((item, index) => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `${index+1}. ${item} x${player.items[item]}`;
          this.heroInventory.appendChild(listItem);
        });
      }
    });
  }
}
