import { AUTO, Game, Scale } from 'phaser3';

let ball, paddle;

const config = {
    type: AUTO,

    parent: '2d-breakout-game',
    width: 400,
    height: 320,
    scaleMode: Scale.ScaleModes.FIT,
    autoCenter: Scale.Center.CENTER_BOTH,

    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },

    autoFocus: true,
    scene: { preload, create, update },
    backgroundColor: '#eee'
};

const game = new Game(config);

function preload() {
    this.load.image('ball', 'assets/ball.png');
    this.load.image('paddle', 'assets/paddle.png');
}

function create() {
    ball = this.physics.add.sprite(this.scale.width * 0.5, this.scale.height - 25, 'ball');
    ball.setVelocity(150, -150);
    ball.setCollideWorldBounds(true);
    ball.setBounce(1);

    paddle = this.physics.add.sprite(this.scale.width * 0.5, this.scale.height - 5, 'paddle');
    paddle.setOrigin(0.5, 1);

    this.physics.add.collider(ball, paddle);
    paddle.body.immovable = true;
}

function update() {
    paddle.x = this.input.x || this.scale.width * 0.5;
}
