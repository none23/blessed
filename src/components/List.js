import React, { PropTypes } from 'react';
import stylesheet from '../stylesheet';

const List = ({ title, children, ...props }) => (
  <list
    label={title}
    class={stylesheet.bordered} // eslint-disable-line
    width="100%"
    height="100%"
    {...props}
  >
    <element>
      {children}
    </element>
  </list>
);
List.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default List;
