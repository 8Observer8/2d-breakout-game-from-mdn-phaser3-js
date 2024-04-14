const { AUTO, Game, Scale } = Phaser;

const config = {
    type: AUTO,

    parent: '2d-breakout-game',
    width: 480,
    height: 320,
    scaleMode: Phaser.Scale.ScaleModes.FIT,
    autoCenter: Phaser.Scale.Center.CENTER_BOTH,

    autoFocus: false,
    scene: { preload, create, update },
    plugins: {
        global: [
            {
                key: 'DebugGameScalePlugin',
                plugin: PhaserDebugGameScalePlugin,
                start: true,
            },
        ],
    },

    backgroundColor: `#eee`
};

const game = new Game(config);

function preload() {}

function create() {
    this.add.grid(0, 0, 480, 320, 48, 32, 0, 0, 0xffff00).setOrigin(0, 0);
}

function update() {}
