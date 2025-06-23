# wakatime-tldraw

> A TamperMonkey script that adds time-tracking support to [tldraw](https://www.tldraw.com/) (for WakaTime-compatible servers)

## Development instructions

1. Run `yarn` to install dependencies (Yarn v4 required)
2. `yarn watch` to start the TypeScript compiler
3. Load the `dist/index.user.js` file into ViolentMonkey by following the instructions on their docs: [How to edit scripts with your favourite editor?](https://violentmonkey.github.io/posts/how-to-edit-scripts-with-your-favorite-editor/#2-open-this-file-in-violentmonkey-installer)
4. Open up <https://www.tldraw.com/> and hopefully it works
   - If it doesn't work, just open an issue and we'll try to sort the problem out

Take a look at [docs/tldraw-api.md](docs/tldraw-api.md) for my random notes on how to hook into tldraw's editor API.

<!--  -->
