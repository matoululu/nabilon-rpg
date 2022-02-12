---
---

{% include /js/Helper.js %}
{% include /js/Game.js %}
{% include /js/GameData.js %}
{% include /js/CharacterSheet.js %}
{% include /js/StateHandler.js %}
{% include /js/Travel.js %}
{% include /js/Location.js %}

{% include /js/TextInput.js %}
{% include /js/TextLog.js %}

const game = new Game();

document.addEventListener('DOMContentLoaded', () => {
  game.init();
});
