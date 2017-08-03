import React from 'react';
import stylesheet from './stylesheet';

const Log = () => (
  <box label="Log"
    class={stylesheet.bordered} // eslint-disable-line
    width="60%"
    height="70%"
    draggable
  >
    {'Hello'}, {0}, {'World'}
  </box>
);

export default Log;
