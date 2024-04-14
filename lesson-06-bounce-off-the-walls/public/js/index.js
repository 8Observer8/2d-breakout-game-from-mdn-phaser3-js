import { AUTO, Scale, Game } from 'phaser3';

let ball;

const config = {
    type: AUTO,

    parent: "2d-breakout-game",
    width: 480,
    height: 320,
    scaleMode: Scale.ScaleModes.FIT,
    autoCenter: Scale.Center.CENTER_BOTH,

    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },

    autoFocus: true,
    scene: { preload, create, update },
    backgroundColor: "#eee"
};

new Game(config);

function preload() {
    this.load.image("ball", "assets/ball.png");
}

function create() {
    ball = this.physics.add.sprite(50, 50, "ball");
    ball.setVelocity(150, 150);
    ball.setCollideWorldBounds(true);
    ball.setBounce(1);
}

function update() {}
//# sourceMappingURL=index.js.map
