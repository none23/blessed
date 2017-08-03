import React from 'react';
import blessed from 'blessed';
import { render } from 'react-blessed';
import App from './App';

/* Rendering the screen. */
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'react-blessed dashboard',
});

screen.key(['escape', 'q', 'C-c'], () => process.exit(0));

render(<App />, screen);
