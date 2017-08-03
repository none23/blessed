import React, { PropTypes } from 'react';

const Sizes = ({ array, ...props }) => {
  const sum = array.reduce((a, b) => a + b);
  return (
    <element>
      <list {...props}>
        {array.map(size => <box height="100%" width="10%">{size}</box>)}
      </list>
      <text align="right" >
        {sum}
      </text>
    </element>
  );
};
Sizes.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.number,
  ).isRequired,
};

export default Sizes;
