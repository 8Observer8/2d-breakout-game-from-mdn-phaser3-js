import { AUTO, Game } from "phaser3";

const config = {
    type: AUTO,
    parent: "2d-breakout-game",
    width: 480,
    height: 320,
    scene: { preload, create, update }
};

const game = new Game(config);

function preload() {
    console.log("preload");
}

function create() {
    console.log("create");
}

function update() {

}
