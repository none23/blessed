import React, { PropTypes } from 'react';
import stylesheet from '../stylesheet';

const Progress = ({ done, total, width, height, top, left }) => (
  <progressbar
    class={stylesheet.bordered} // eslint-disable-line
    style={{ bar: { bg: 'green' } }}
    filled={`${done / total * 100}%`}
    height={height}
    width={width}
    top={top}
    left={left}
  />
);

Progress.propTypes = {
  done: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  top: PropTypes.string,
  left: PropTypes.string,
};

Progress.defaultProps = {
  width: '100%',
  height: '100%',
  top: '0%',
  left: '0%',
};

export default Progress;
