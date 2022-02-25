const data = {
  "location": {
    "Helmfirth": {
      "description": "You find yourself in a small port town. The smell of fresh ocean air is strong here. You see a small shop and cozy looking tavern.",
      "visit": ['shop', 'tavern'],
      "travel": ['town2', 'Helmfirth beach']
    },
    "Helmfirth beach": {
      "description": "You find yourself on a beach. The ocean is a beautiful blue. You see a small town to the west and a small town to the east.",
      "travel": ['Helmfirth'],
      "encounters": ['Pirate', 'Giant crab']
    },
    "town2": {
      "description": "You find yourself in a small town. The smell of fresh ocean air is strong here. You see a small shop and cozy looking tavern.",
      "visit": ['shop', 'tavern'],
      "travel": ['Helmfirth']
    }
  },
  "encounters": {
    "Pirate": {
      "description": "You see a pirate! He is a bit drunk and is ready to fight you!",
      "health": 10,
      "attack": 5,
      "defense": 0,
      "loot": ['Health potion'],
      "loot_chance": 0.5
    },
    "Giant crab": {
      "description": "You see a giant crab! It is ready to fight you!",
      "health": 20,
      "attack": 10,
      "defense": 0,
      "loot": ['Health potion'],
      "loot_chance": 0.5
    }
  },
  "visit": {
    "shop": {
      "description": "You enter the shop and see a shopkeeper. He is looking at you with a smile on his face. He says \"Welcome to TODO SHOPNAME!\"",
      "items": {
        "Health potion": {
          "value": 25,
          "description": "A small health potion that restores some health."
        },
      },
    },
    "tavern": {
      "description": "You enter the tavern and see a tavern keeper. He is looking at you with a smile on his face. He says \"Welcome to TODO TAVERNNAME!\"",
    },
  }
}
