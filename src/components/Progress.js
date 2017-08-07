import React, { PropTypes } from 'react';
import stylesheet from '../stylesheet';

const Progress = ({ done, total, ...props }) => {
  const filled = parseInt(100 * done / total, 10);
  return (
    <element
      class={stylesheet.bordered} // eslint-disable-line
      label={`${filled}%`}
      {...props}
    >
      <progressbar
        filled={`${filled}%`}
        style={{
          style: {
            border: {
              bg: 'black',
              fg: 'green',
            },
          },
          bar: {
            bg: 'green',
            fg: 'black',
          },
        }}
      />
    </element>
  );
};

Progress.propTypes = {
  done: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Progress;
