module.exports = {
  aquatic01: {
    isAquaticLevel: true,
    playerName: "SteveAquatic",
    assetPacks: {
      beforeLoad: ['allAssetsMinusPlayer', 'playerSteveAquatic'],
      afterLoad: [],
    },
    groundPlane: ["water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "sand", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "sand", "sand", "water", "water", "water", "water", "water", "water", "sand", "sand", "sand", "sand", "planksOak", "planksOak", "water", "water", "water", "sand", "sand", "sand", "sand", "sand", "water", "water", "water", "water", "water", "sand", "sand", "sand", "sand", "sand", "sand", "water", "water", "water", "water", "sand", "sand", "sand", "sand", "sand", "sand", "water", "water", "water", "water", "water", "sand", "sand", "sand", "sand", "sand", "water", "water", "water", "water", "water", "water", "sand", "sand", "sand", "water", "water", "water", "water", "stone", "water", "water", "water", "water", "water", "water", "water", "stone", "water", "water"],    
    groundDecorationPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    actionPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "boatChest", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    playerStartPosition: [4, 7],
    playerStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.isEntityAt("Player", [4, 5]),
  },
  aquatic02: {
    isAquaticLevel: true,
    playerName: "SteveAquatic",
    assetPacks: {
      beforeLoad: ['allAssetsMinusPlayer', 'playerSteveAquatic'],
      afterLoad: [],
    },
    groundPlane: ["water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "sand", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "sand", "sand", "water", "water", "water", "water", "water", "water", "sand", "sand", "sand", "sand", "planksOak", "planksOak", "planksOak", "water", "water", "sand", "sand", "sand", "sand", "sand", "water", "water", "water", "water", "water", "sand", "sand", "sand", "sand", "sand", "sand", "water", "water", "water", "water", "sand", "sand", "sand", "sand", "sand", "sand", "water", "water", "water", "water", "water", "sand", "sand", "sand", "sand", "sand", "water", "water", "water", "water", "water", "water", "sand", "sand", "sand", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water"],
    groundDecorationPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    actionPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "diamondMiniblock", "", "", "", "", "treeJungle", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    entities: [["boat", 8, 3, 2]],
    playerStartPosition: [4, 4],
    playerStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.isEntityAt("Player", [6, 7]),
  },
  aquatic03: {
    isAquaticLevel: true,
    boat: true,
    playerName: "SteveAquatic",
    assetPacks: {
      beforeLoad: ['allAssetsMinusPlayer', 'playerSteveAquatic'],
      afterLoad: [],
    },
    groundPlane: ["stone", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "sand", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "sand", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "sand", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "sand", "sand", "water", "water", "water", "water", "water", "water", "water", "sand", "sand", "sand", "planksOak", "planksOak", "water", "water", "water", "water", "water", "sand", "sand", "sand", "water", "water", "water", "water", "water", "water", "water"],
    groundDecorationPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    actionPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "treeJungle", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "treeJungle", "", "", "", "", "", "", "", "", ""],
    entities: [["cod", 5, 1, 0]],
    playerStartPosition: [5, 8],
    playerStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.isEntityAt("Player", [5, 1]),
  },
  aquatic04: {
    isAquaticLevel: true,
    boat: true,
    playerName: "SteveAquatic",
    assetPacks: {
      beforeLoad: ['allAssetsMinusPlayer', 'playerSteveAquatic'],
      afterLoad: [],
    },
    groundPlane: ["water", "water", "water", "water", "water", "water", "sand", "sand", "water", "water", "stone", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "stone", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "stone", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "sand"],    groundDecorationPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    actionPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "stone", "", "", "", "", "", "", "", "", "", "", "stone", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "treeJungle"],    
    entities: [["dolphin", 5, 1, 0]],
    playerStartPosition: [5, 8],
    playerStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.isEntityAt("Player", [5, 1]),
  },
  aquatic05: {
    isAquaticLevel: true,
    ocean: "warm",
    playerName: "SteveAquatic",
    assetPacks: {
      beforeLoad: ['allAssetsMinusPlayer', 'playerSteveAquatic'],
      afterLoad: [],
    },
    groundDecorationPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    groundPlane: ["sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "planksOak", "planksOak", "sand", "sand", "sand", "gravel", "sand", "sand", "planksOak", "planksOak", "sand", "planksOak", "planksOak", "stoneBricks", "sand", "gravel", "sand", "sand", "sand", "planksOak", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "planksOak", "planksOak", "sand", "sand", "sand", "sand", "sand", "gravel", "sand", "sand", "planksOak", "planksOak", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "planksOak", "sand", "sand", "sand", "planksOak", "planksOak", "sand", "sand", "sand", "sand", "planksOak", "planksOak", "sand", "sand", "planksOak", "sand", "sand", "sand", "sand", "sand", "planksOak", "planksOak", "planksOak", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand"],
    actionPlane: ["", "", "strippedOak", "", "logOak", "logOak", "logOak", "", "", "", "", "", "logOak", "strippedOak", "", "", "turtleMiniblock", "", "", "", "", "logOak", "", "", "strippedOak", "", "", "logOak", "", "", "", "logOak", "", "", "", "strippedOak", "", "logOak", "", "", "", "", "", "", "", "strippedOak", "nautilusChest", "logOak", "", "", "", "logOak", "logOak", "", "", "", "", "", "", "logOak", "", "logOak", "", "logOak", "", "", "", "", "logOak", "", "", "logOak", "", "", "", "", "", "", "logOak", "", "", "logOak", "logOak", "", "", "", "logOak", "logOak", "", "", "", "", "logOak", "logOak", "logOak", "logOak", "logOak", "", "", ""],    
    entities: [],
    playerStartPosition: [8, 3],
    playerStartDirection: 1,
    verificationFunction: verificationAPI => verificationAPI.isEntityAt("Player", [6, 5]),
  },
  aquatic06: {
    isAquaticLevel: true,
    boat: true,
    playerName: "SteveAquatic",
    assetPacks: {
      beforeLoad: ['allAssetsMinusPlayer', 'playerSteveAquatic'],
      afterLoad: [],
    },
    groundPlane: ["snow", "snow", "snow", "snow", "snow", "water", "water", "water", "stoneBricks", "water", "snow", "snow", "snow", "snow", "snow", "ice", "water", "water", "water", "water", "snow", "snow", "snow", "snow", "ice", "ice", "water", "water", "stoneBricks", "stoneBricks", "snow", "snow", "snow", "water", "water", "water", "water", "water", "water", "water", "snow", "snow", "ice", "water", "ice", "ice", "water", "ice", "ice", "ice", "ice", "ice", "ice", "water", "ice", "ice", "water", "ice", "ice", "ice", "water", "water", "water", "water", "water", "water", "water", "ice", "ice", "ice", "water", "ice", "ice", "water", "ice", "ice", "ice", "ice", "water", "ice", "water", "ice", "ice", "water", "ice", "ice", "ice", "ice", "water", "ice", "water", "water", "water", "water", "ice", "ice", "ice", "water", "water", "water"],
    groundDecorationPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    actionPlane: ["snow", "snow", "snow", "snow", "", "", "stoneBricks", "", "stoneBricks", "", "snow", "snow", "snow", "", "", "", "", "", "", "", "snow", "snow", "", "", "", "", "", "", "", "stoneBricks", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "ice", "ice", "", "", "ice", "", "", "", "", "", "ice", "ice", "", "ice", "ice", "", "", "", "", "", "", "", "", "", "", "", "", "ice", "ice", "", "", "", "", "", "", "ice", "", "ice", "", "", "ice", "ice", "", "ice", "", "ice", "", "", "", "", "ice", "", "", "", "", ""],
    entities: [["seaTurtle", 6, 6, 3]],
    playerStartPosition: [0, 9],
    playerStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.isEntityAt("Player", [6, 3]),
  },
  aquatic07: {
    isAquaticLevel: true,
    ocean: "warm",
    playerName: "SteveAquatic",
    assetPacks: {
      beforeLoad: ['allAssetsMinusPlayer', 'playerSteveAquatic'],
      afterLoad: [],
    },
    groundDecorationPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    groundPlane: ["sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "magmaBlock", "magmaBlock", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "magmaBlock", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand"],
    actionPlane: ["stoneBricks", "crackedStoneBricks", "stoneBricks", "stoneBricks", "stoneBricks", "mossyStoneBricks", "stoneBricks", "stoneBricks", "sand", "", "mossyStoneBricks", "stoneBricks", "stoneBricks", "mossyStoneBricks", "", "", "", "", "", "stoneBricks", "stoneBricks", "", "", "", "", "stoneBricks", "crackedStoneBricks", "stoneBricks", "", "mossyStoneBricks", "sand", "", "chiseledStoneBricks", "stoneBricks", "mossyStoneBricks", "stoneBricks", "stoneBricks", "chiseledStoneBricks", "", "crackedStoneBricks", "gravel", "turtleMiniblock", "stoneBricks", "stoneBricks", "", "", "", "chiseledStoneBricks", "", "crackedStoneBricks", "gravel", "", "stoneBricks", "stoneBricks", "", "chiseledStoneBricks", "", "stoneBricks", "", "stoneBricks", "stoneBricks", "", "sand", "crackedStoneBricks", "", "stoneBricks", "", "stoneBricks", "", "mossyStoneBricks", "gravel", "", "", "", "", "crackedStoneBricks", "prismarineChest", "", "", "crackedStoneBricks", "crackedStoneBricks", "stoneBricks", "mossyStoneBricks", "chiseledStoneBricks", "", "chiseledStoneBricks", "", "stoneBricks", "gravel", "gravel", "", "gravel", "gravel", "sand", "", "gravel", "", "", "", ""],
    entities: [],
    playerStartPosition: [4, 9],
    playerStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.isEntityAt("Player", [6, 6]) || verificationAPI.isEntityAt("Player", [7, 7]),
  },
  aquatic08: {
    isAquaticLevel: true,
    ocean: "warm",
    playerName: "SteveAquatic",
    assetPacks: {
      beforeLoad: ['allAssetsMinusPlayer', 'playerSteveAquatic'],
      afterLoad: [],
    },
    groundPlane: ["dirt", "dirt", "magmaUnderwater", "magmaUnderwater", "magmaUnderwater", "magmaUnderwater", "magmaUnderwater", "magmaUnderwater", "dirt", "lava", "dirt", "water", "water", "water", "water", "water", "water", "magmaUnderwater", "magmaBlock", "dirt", "magmaBlock", "water", "dirt", "dirt", "dirt", "dirt", "water", "magmaUnderwater", "magmaUnderwater", "dirt", "magmaUnderwater", "water", "dirt", "lava", "lava", "dirt", "water", "water", "water", "dirt", "magmaUnderwater", "water", "dirt", "lava", "lava", "dirt", "water", "blueDeadCoralBlock", "water", "dirt", "magmaUnderwater", "water", "dirt", "magmaBlock", "magmaBlock", "dirt", "water", "blueDeadCoralBlock", "water", "dirt", "magmaUnderwater", "water", "magmaUnderwater", "magmaUnderwater", "magmaUnderwater", "magmaUnderwater", "water", "blueDeadCoralBlock", "water", "dirt", "magmaUnderwater", "water", "magmaUnderwater", "redCoralBlock", "water", "water", "water", "water", "water", "dirt", "water", "water", "magmaUnderwater", "water", "water", "water", "magentaCoralBlock", "dirt", "dirt", "dirt", "water", "water", "blueDeadCoralBlock", "water", "magentaCoralBlock", "blueCoralBlock", "blueCoralBlock", "dirt", "dirt", "dirt"],
    groundDecorationPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    actionPlane: ["dirt", "dirt", "", "", "", "", "", "", "magmaBlock", "", "dirt", "", "", "", "", "", "", "", "magmaBlock", "dirt", "magmaBlock", "", "dirt", "dirt", "dirt", "dirt", "", "", "", "magmaBlock", "", "", "dirt", "", "", "dirt", "", "", "", "dirt", "", "", "dirt", "", "", "dirt", "", "blueDeadCoralBlock", "", "dirt", "", "", "dirt", "magmaBlock", "magmaBlock", "dirt", "", "blueDeadCoralBlock", "turtleMiniblock", "dirt", "", "", "", "", "", "", "", "blueDeadCoralBlock", "", "dirt", "", "", "", "", "", "", "", "", "", "dirt", "", "", "", "", "", "", "", "dirt", "dirt", "dirt", "", "", "deadCoralBlock", "", "", "", "dirt", "dirt", "magmaBlock", "magmaBlock"],
    entities: [],
    playerStartPosition: [1, 8],
    playerStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.isEntityAt("Player", [5, 7]),
  },
  aquatic08a: {
    isAquaticLevel: true,
    boat: true,
    playerName: "SteveAquatic",
    assetPacks: {
      beforeLoad: ['allAssetsMinusPlayer', 'playerSteveAquatic'],
      afterLoad: [],
    },
    groundPlane: ["water", "water", "sand", "sand", "sand", "sand", "sand", "sand", "dirt", "dirt", "water", "water", "water", "water", "water", "water", "water", "sand", "dirt", "dirt", "water", "water", "dirt", "water", "water", "dirt", "water", "sand", "sand", "dirt", "sand", "water", "water", "water", "water", "water", "water", "water", "water", "dirt", "sand", "water", "water", "water", "water", "water", "water", "blueDeadCoralBlock", "water", "dirt", "sand", "water", "dirt", "water", "water", "dirt", "water", "blueDeadCoralBlock", "water", "dirt", "sand", "water", "sand", "sand", "sand", "sand", "water", "blueDeadCoralBlock", "water", "dirt", "sand", "water", "sand", "redCoralBlock", "water", "water", "water", "water", "water", "dirt", "water", "water", "sand", "water", "water", "water", "magentaCoralBlock", "dirt", "dirt", "dirt", "water", "water", "blueDeadCoralBlock", "water", "magentaCoralBlock", "dirt", "dirt", "dirt", "dirt", "dirt"],
    groundDecorationPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    actionPlane: ["dirt", "dirt", "", "", "", "", "", "", "magmaBlock", "lava", "dirt", "", "", "", "", "", "", "", "magmaBlock", "dirt", "magmaBlock", "", "dirt", "dirt", "dirt", "dirt", "", "", "", "magmaBlock", "", "", "dirt", "lava", "lava", "dirt", "", "", "", "dirt", "", "", "dirt", "lava", "lava", "dirt", "", "blueDeadCoralBlock", "", "dirt", "", "", "dirt", "magmaBlock", "magmaBlock", "dirt", "", "blueDeadCoralBlock", "turtleMiniblock", "dirt", "", "", "", "", "", "", "", "blueDeadCoralBlock", "", "dirt", "", "", "", "", "", "", "", "", "", "dirt", "", "", "", "", "", "", "", "dirt", "dirt", "dirt", "", "", "deadCoralBlock", "", "", "dirt", "dirt", "dirt", "magmaBlock", "magmaBlock"],
    entities: [["tropicalFish", 5, 7, 3]],
    playerStartPosition: [1, 8],
    playerStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.isEntityAt("Player", [6, 7]),
  },
  aquatic09: {
    isAquaticLevel: true,
    ocean: "warm",
    playerName: "SteveAquatic",
    assetPacks: {
      beforeLoad: ['allAssetsMinusPlayer', 'playerSteveAquatic'],
      afterLoad: [],
    },
    groundPlane: ["yellowCoralBlock", "yellowCoralBlock", "sand", "sand", "pinkCoralBlock", "sand", "pinkCoralBlock", "sand", "yellowCoralBlock", "yellowCoralBlock", "yellowCoralBlock", "blueCoralBlock", "sand", "sand", "sand", "blueCoralBlock", "sand", "sand", "sand", "yellowCoralBlock", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "pinkCoralBlock", "sand", "sand", "sand", "sand", "magentaCoralBlock", "planksOak", "sand", "blueCoralBlock", "sand", "pinkCoralBlock", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "yellowCoralBlock", "magentaCoralBlock", "sand", "magentaCoralBlock", "sand", "sand", "redCoralBlock", "sand", "planksOak", "blueCoralBlock", "sand", "sand", "sand", "magentaCoralBlock", "sand", "magentaCoralBlock", "magentaCoralBlock", "sand", "magentaCoralBlock", "redCoralBlock", "blueCoralBlock", "pinkCoralBlock", "sand", "magentaCoralBlock", "sand", "sand", "sand", "yellowCoralBlock", "magentaCoralBlock", "magentaCoralBlock", "sand", "sand", "sand", "pinkCoralBlock", "blueCoralBlock", "sand", "sand", "sand", "sand", "sand", "blueCoralBlock", "sand", "pinkCoralBlock", "pinkCoralBlock", "sand", "sand", "yellowCoralBlock", "yellowCoralBlock", "sand", "sand", "sand"],
    groundDecorationPlane: ["", "", "kelp", "seaGrass", "", "coralPlantPink", "", "kelp", "", "", "", "", "", "", "", "", "", "seaGrass", "kelp", "", "", "", "coralPlantYellow", "coralPlantYellow", "kelp", "", "", "coralPlantPink", "seaGrass", "", "coralPlantYellow", "", "", "kelp", "", "", "", "", "", "", "kelp", "kelp", "", "seaGrass", "", "", "kelp", "seaPickles", "coralPlantYellow", "", "", "", "", "", "kelp", "", "", "", "", "coralPlantYellow", "coralPlantPink", "kelp", "", "", "", "", "kelp", "", "", "", "", "", "", "", "coralPlantPink", "kelp", "", "", "", "", "seaGrass", "", "", "", "", "", "kelp", "", "", "", "seaPickles", "", "", "kelp", "", "", "", "kelp", "coralPlantPink", ""],
    actionPlane: ["yellowCoralBlock", "yellowCoralBlock", "", "", "pinkCoralBlock", "", "pinkCoralBlock", "", "yellowCoralBlock", "yellowCoralBlock", "yellowCoralBlock", "", "", "", "", "", "seaPickles", "", "", "yellowCoralBlock", "", "", "", "", "", "", "", "", "", "pinkCoralBlock", "", "", "", "", "magentaCoralBlock", "", "", "diamondMiniblock", "pinkCoralBlock", "pinkCoralBlock", "", "", "", "", "", "", "", "", "", "yellowCoralBlock", "magentaCoralBlock", "", "magentaCoralBlock", "magentaCoralBlock", "", "", "", "", "", "", "", "", "magentaCoralBlock", "diamondChest", "magentaCoralBlock", "magentaCoralBlock", "", "magentaCoralBlock", "", "", "pinkCoralBlock", "", "magentaCoralBlock", "", "magentaCoralBlock", "", "yellowCoralBlock", "magentaCoralBlock", "magentaCoralBlock", "", "", "", "pinkCoralBlock", "", "", "", "", "", "", "", "", "pinkCoralBlock", "pinkCoralBlock", "", "", "yellowCoralBlock", "yellowCoralBlock", "", "", ""],
    entities: [],
    playerStartPosition: [1, 8],
    playerStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.isEntityAt("Player", [3, 7]),
  },
  aquatic10: {
    isAquaticLevel: true,
    ocean: "warm",
    playerName: "SteveAquatic",
    assetPacks: {
      beforeLoad: ['allAssetsMinusPlayer', 'playerSteveAquatic'],
      afterLoad: [],
    },
    groundPlane: ["sand", "sand", "prismarine", "darkPrismarine", "prismarine", "prismarine", "darkPrismarine", "prismarine", "sand", "sand", "sand", "seaLantern", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "seaLantern", "sand", "prismarine", "prismarine", "prismarine", "darkPrismarine", "darkPrismarine", "darkPrismarine", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "seaLantern", "redCoralBlock", "darkPrismarine", "darkPrismarine", "prismarine", "prismarine", "sand", "sand", "prismarine", "prismarine", "darkPrismarine", "darkPrismarine", "darkPrismarine", "prismarine", "prismarine", "prismarine", "prismarine", "sand", "prismarine", "prismarine", "seaLantern", "darkPrismarine", "darkPrismarine", "blueCoralBlock", "darkPrismarine", "seaLantern", "prismarine", "sand", "prismarine", "prismarine", "darkPrismarine", "darkPrismarine", "darkPrismarine", "darkPrismarine", "darkPrismarine", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "darkPrismarine", "darkPrismarine", "darkPrismarine", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "redCoralBlock", "sand", "redCoralBlock", "prismarine", "prismarine", "sand", "sand", "prismarine", "prismarine", "prismarine", "sand", "sand", "blueCoralBlock", "sand", "sand", "sand"],
    groundDecorationPlane: ["coralFanRedTop", "seaGrass", "", "", "", "", "", "", "coralPlantBlue", "coralFanBlueTop", "coralPlantRed", "", "", "", "", "", "", "", "", "coralFanBlueTop", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "coralPlantBlue", "", "", "", "", "", "", "", "", "", "coralFanBlueTop", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "kelp", "kelp", "", "", "", "coralPlantBlue", "", "", "", "coralPlantRed", ""],
    actionPlane: ["", "", "prismarineBricks", "darkPrismarine", "prismarineBricks", "prismarineBricks", "darkPrismarine", "prismarineBricks", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "prismarine", "", "", "prismarine", "prismarine", "prismarine", "", "", "", "", "prismarine", "", "", "", "diamondMiniblock", "prismarine", "", "", "", "", "prismarine", "", "", "prismarine", "prismarine", "prismarine", "", "darkPrismarine", "", "", "prismarine", "", "", "", "", "", "", "", "", "", "prismarine", "", "", "", "", "", "", "darkPrismarine", "", "", "prismarine", "", "", "prismarine", "", "prismarine", "prismarine", "prismarine", "", "", "prismarine", "", "", "", "", "prismarine", "prismarine", "prismarine", "", "", "prismarine", "", "", "prismarine", "", "", "", ""],
    entities: [['squid',6,3,3]],
    playerStartPosition: [1, 8],
    playerStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.isEntityAt("Player", [6, 3]),
  },
  aquatic11: {
    isAquaticLevel: true,
    ocean: "warm",
    playerName: "SteveAquatic",
    assetPacks: {
      beforeLoad: ['allAssetsMinusPlayer', 'playerSteveAquatic'],
      afterLoad: [],
    },
    groundPlane: ["gravel", "gravel", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "gravel", "gravel", "gravel", "sand", "seaLantern", "darkPrismarine", "darkPrismarine", "darkPrismarine", "seaLantern", "sand", "gravel", "magmaDeep", "gravel", "sand", "darkPrismarine", "blackConcrete", "blackConcrete", "blackConcrete", "darkPrismarine", "sand", "magmaDeep", "gravel", "gravel", "sand", "darkPrismarine", "blackConcrete", "blackConcrete", "blackConcrete", "darkPrismarine", "sand", "gravel", "gravel", "gravel", "sand", "darkPrismarine", "blackConcrete", "blackConcrete", "blackConcrete", "darkPrismarine", "sand", "gravel", "gravel", "gravel", "sand", "seaLantern", "darkPrismarine", "darkPrismarine", "darkPrismarine", "seaLantern", "sand", "magmaBlock", "gravel", "gravel", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "gravel", "magmaDeep", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "magmaBlock", "magmaDeep", "gravel", "magmaBlock", "magmaDeep", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "magmaBlock", "gravel", "gravel", "magmaBlock", "gravel", "magmaBlock", "gravel", "gravel"],
    groundDecorationPlane: ["coralFanRedTop", "seaGrass", "", "", "", "", "", "", "coralPlantBlue", "coralFanBlueTop", "coralPlantRed", "", "", "", "", "", "", "", "", "coralFanBlueTop", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "coralPlantBlue", "", "", "", "", "", "", "", "", "", "coralFanBlueTop", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "kelp", "kelp", "", "", "", "coralPlantBlue", "", "", "", "coralPlantRed", ""],
    actionPlane: ["gravel", "gravel", "", "", "", "", "", "", "", "gravel", "gravel", "", "", "", "", "", "", "", "", "gravel", "bubbleColumn", "", "", "", "", "", "", "", "", "bubbleColumn", "gravel", "", "", "", "", "conduit", "", "", "", "", "", "gravel", "", "", "", "", "", "", "", "gravel", "gravel", "gravel", "", "", "", "", "", "", "", "bubbleColumn", "gravel", "gravel", "", "", "", "", "", "", "", "gravel", "bubbleColumn", "gravel", "", "", "", "", "", "", "bubbleColumn", "bubbleColumn", "gravel", "bubbleColumn", "bubbleColumn", "gravel", "", "", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "bubbleColumn", "gravel", "gravel", "bubbleColumn", "gravel", "bubbleColumn", "gravel", "gravel"],
    entities: [],
    playerStartPosition: [3, 5],
    playerStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.solutionMapMatchesResultMap(
      [
        "", "", "", "", "", "", "", "", "", "",
        "", "", "", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "", "",
        "", "", "", "prismarine", "", "", "", "prismarine", "", "",
        "", "", "", "prismarine", "", "", "", "prismarine", "", "",
        "", "", "", "prismarine", "", "", "", "prismarine", "", "",
        "", "", "", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "", "",
        "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", ""
      ]),
  },
};
