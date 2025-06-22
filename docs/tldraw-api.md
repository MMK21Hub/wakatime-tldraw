# tldraw editor API reverse-engineering

The tldraw editor API is accessible through the `window.editor` global object.

## Listening for changes to the canvas

Print in the console whenever the user edits something (e.g. draws a line, moves a shape):

```js
editor.sideEffects.registerAfterChangeHandler("shape", (a, b, c) =>
  console.log(a, b, c)
)
```

Note: Would not recommend using `registerBeforeChangeHandler()`. It crashed the app.
