import React from 'react';
import stylesheet from './stylesheet';

const Stats = () => (
  <box
    label="Stats"
    class={stylesheet.bordered} // eslint-disable-line
    top="70%"
    left="60%"
    width="40%"
    height="31%"
  >
    Some stats
  </box>
);

export default Stats;
