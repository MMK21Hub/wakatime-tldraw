// ==UserScript==
// @name         wackatime-tldraw
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Adds time-tracking support to tldraw (for WakaTime-compatible servers)
// @author       MMK21
// @match        https://www.tldraw.com/
// @icon         https://www.tldraw.com/favicon.svg
// @grant        none
// ==/UserScript==

import { Editor } from "./tldraw"

declare global {
  interface Window {
    editor: Editor
    app: Editor
    /** Sets some `useProperZero` property and refreshes the window */
    zero(): void
  }
}

function debug(message: string) {
  console.debug(`[wackatime-tldraw] ${message}`)
}

function handleCanvasModified() {
  debug("Canvas modified")
}

function setUpEventListeners() {
  window.editor.sideEffects.registerAfterChangeHandler(
    "shape",
    handleCanvasModified
  )
}

// Setup
setUpEventListeners()
debug("Userscript loaded successfully")
