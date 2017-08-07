import React, { PropTypes } from 'react';

import styles from '../stylesheet';

const Sizes = ({ sizes, ...props }) => (
  <element {...props}>
    {sizes.map(({ size, completed, active }, index) => (
      <box
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        // eslint-disable-next-line
        class={active ? styles.active_box : completed ? styles.inverted_box : styles.normal_box}
        height="98%"
        width="100"
        top="center"
        left={`${index * 13}%`}
        align="center"
        valign="middle"
      >
        {size}
      </box>
    ))}
  </element>
);
Sizes.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      size: PropTypes.number,
      completed: PropTypes.bool,
      active: PropTypes.bool,
    }),
  ).isRequired,
};

export default Sizes;
