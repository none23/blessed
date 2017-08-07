import React from 'react';

import styles from './stylesheet';

import data from './state';

const LINE_HEIGHT = 5;

const App = () => (
  <box
    width="100%"
    height="100%"
    scrollable={true}
  >
    <element>
      {data.map(({ name, quantities }, productIndex) => (
        <element
          key={name}
          label={name}
          width="100%"
          height={5}
          top={productIndex * LINE_HEIGHT}
          class={productIndex % 2 ? styles.blue_bg : styles.green_bg}
        >
          {quantities.map(({ size }, packageIndex) => (
            <box
              key={packageIndex}
              class={styles.red_bg}
              height="50%"
              width="12%"
              left={`${packageIndex * 13}%`}
              top="center"
              align="center"
              valign="middle"
            >
              {size}
            </box>
          ))}
        </element>
      ))}
    </element>
  </box>
);

export default App;
