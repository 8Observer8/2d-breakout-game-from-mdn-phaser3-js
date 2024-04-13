import { Game, CANVAS } from 'phaser3';

const config = {
    type: CANVAS,
    parent: "2d-breakout-game",
    width: 480,
    height: 320,
    scene: { preload, create, update }
};

new Game(config);

function preload() {
    console.log("preload");
}

function create() {
    console.log("create");
}

function update() {

}
//# sourceMappingURL=index.js.map
