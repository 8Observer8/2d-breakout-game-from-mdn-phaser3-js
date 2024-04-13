My port of the MDN [2D breakout game using Phaser](https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser) tutorial to Phaser 3

[Topic on the Phaser forum](https://phaser.discourse.group/t/please-help-me-to-update-the-mdn-2d-breakout-tutorial-to-phaser-3-80-1/14203)

Playground:

- [Lesson 01: Initialize the framework](https://plnkr.co/edit/IzbP7B8SqYEVg7C7?preview)
- [Lesson 02: Scaling](https://plnkr.co/edit/wf2Fz1gkwfa2RXqd?preview)
- [Lesson 03. Load and print assets](https://plnkr.co/edit/rRmo55k8ISJJ8iAh?preview)
- [Lesson 04. Move the ball](https://plnkr.co/edit/BCkYRY9GUkzFzKrp?preview)

Instructions for building and running the project in debug and release:

- Download and unzip this example this repository

- Open the command line terminal and go to the lesson folder

- Install the next packages globally with the command:

> npm i -g http-server rollup uglify-js

- Add the Rollup bin folder to the Path. Type this command to know where npm was installed `npm config get prefix`. This command will show you the npm location. You will find the "node_modules" folder there. Go to the "rollup/bin" folder and copy this path, for example for me: `C:\Users\8Observer8\AppData\Roaming\npm\node_modules\rollup\dist\bin`. Add this folder to the path variable.

- Run http-server in the project directory:

> http-server -c-1

Note. The `-c-1` key allows you to disable caching.

- Start development mode with the following command:

> npm run dev

Note. Rollup will automatically keep track of saving changes to files and build a new index.js file ready for debugging. You can debug your project step by step in the browser by setting breakpoints.

- Go to the browser and type the address: localhost:8080/index.html

- Create a compressed file ready for publishing. Stop development mode, for example, with this command Ctrl + C in CMD, if it was launched before and enter the command:

> npm run release

Note. After this command, Rollup will create a compressed index.js file. Compression is done using the uglify-js package.
