const test = require('tape');

const LevelModel = require('../../src/js/game/LevelMVC/LevelModel');
const LevelEntity = require('../../src/js/game/LevelMVC/LevelEntity');

const makePlane = (n, type) => new Array(n).fill(type);
const makeLevelDefinition = (width, height) => {
  let size = width * height;
  return {
    playerStartPosition: [0, 2],
    playerStartDirection: 1,
    playerName: 'Alex',
    groundPlane: makePlane(size, 'grass'),
    groundDecorationPlane: makePlane(size, ''),
    actionPlane: makePlane(size, ''),
    fluffPlane: makePlane(size, ''),
    gridDimensions: [width, height],
  };
};

const mockGameController = {
  levelEntity: new LevelEntity({}),
  levelData: {},
};

test('sanity', t => {
  const levelDefinition = makeLevelDefinition(5, 5);
  const model = new LevelModel(levelDefinition, mockGameController);

  t.equal(model.planeArea(), 25);

  t.assert(model.inBounds(2, 4));
  t.false(model.inBounds(-1, 1));
  t.false(model.inBounds(5, 3));
  t.false(model.inBounds(3, 5));

  t.equal(model.yToIndex(2), 10);

  t.assert(model.isPlayerAt([0, 2]));

  t.end();
});