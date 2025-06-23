# wakatime-tldraw

> A TamperMonkey script that adds time-tracking support to [tldraw](https://www.tldraw.com/) (for WakaTime-compatible servers)

## Development instructions

1. Run `yarn` to install dependencies (Yarn v4 required)
2. `yarn watch` to start the TypeScript compiler
3. Also, `python3 -m http.server -d dist 4848` to make the built file accessible to TamperMonkey during development
4. Open the TamperMonkey dashboard and create a "loader" script to load the userscript during development:

```js
// ==UserScript==
// @name         wackatime-tldraw loader
// @namespace    http://tampermonkey.net/
// @match        https://www.tldraw.com/
// @icon         https://www.tldraw.com/favicon.svg
// @grant        none
// ==/UserScript==
fetch("http://localhost:4848/index.js", {
  headers: {
    pragma: "no-cache",
    "cache-control": "no-cache",
  },
})
  .then((r) => r.text())
  .then((code) => eval(code))
```

5. Open up <https://www.tldraw.com/> and hopefully it works
   - If it doesn't work, just open an issue and we'll try to sort the problem out

Take a look at [docs/tldraw-api.md](docs/tldraw-api.md) for my random notes on how to hook into tldraw's editor API.

<!--  -->
