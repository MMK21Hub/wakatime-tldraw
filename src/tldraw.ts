/**
 * @file Contains partial type definitions for the tldraw editor interface.
 */

export type HandlerDisposer = () => void

export interface Editor {
  sideEffects: {
    registerAfterChangeHandler: (
      type: string,
      handler: (a: any, b: any, source: string) => void
    ) => HandlerDisposer
  }
  options: {
    [key: string]: any
  }
}
