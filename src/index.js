import React from 'react';
import blessed from 'blessed';
import { render } from 'react-blessed';
import App from './App';

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'MYFRESH',
});

screen.key(
  ['escape', 'q', 'C-c'],
  () => process.exit(0),
);

render(<App />, screen);
