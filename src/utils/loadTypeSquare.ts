/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  interface Window {
    Ts: any;
  }
}

export const loadTypeSquare = () => {
  if (window.Ts) {
    window.Ts.loadFont();
  }
};
