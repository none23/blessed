import React, { PropTypes } from 'react';
import stylesheet from '../stylesheet';

import Sizes from '../components/Sizes';
import Progress from '../components/Progress';

const Category = ({ title, sizes, ...props }) => (
  <box
    label={title}
    class={stylesheet.bordered} // eslint-disable-line
    width="100%"
    {...props}
  >
    <Sizes array={sizes} width="60%" height="90%" />
    <Progress done={Math.round(Math.random() * 100, 0)} total={100} width="35%" height="70%" top="14%" left="64%" />
  </box>
);
Category.propTypes = {
  title: PropTypes.string.isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.number,
  ).isRequired,
};

export default Category;
