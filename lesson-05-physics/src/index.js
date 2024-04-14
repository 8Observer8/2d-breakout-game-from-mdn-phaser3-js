import { AUTO, Game, Scale } from "phaser3";

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

const game = new Game(config);

function preload() {
    this.load.image("ball", "assets/ball.png");
}

function create() {
    ball = this.physics.add.sprite(50, 50, "ball");
    ball.setVelocity(150, 150);
}

function update() {}
