import { CANVAS, Scale, Game } from 'phaser3';

const config = {
    type: CANVAS,

    parent: "2d-breakout-game",
    width: 480,
    height: 320,
    scaleMode: Scale.ScaleModes.FIT,
    autoCenter: Scale.Center.CENTER_BOTH,

    autoFocus: false,
    scene: { preload, create, update },
    backgroundColor: "#eee"
};

new Game(config);

function preload() {
    this.load.image("ball", "assets/ball.png");
}

function create() {
    this.add.sprite(50, 50, "ball");
}

function update() {}
//# sourceMappingURL=index.js.map
