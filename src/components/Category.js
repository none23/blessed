import React, { PropTypes } from 'react';

import Sizes from '../components/Sizes';
import Progress from '../components/Progress';

const Category = ({ title, sizes, ...props }) => {
  // eslint-disable-next-line no-confusing-arrow
  const done = sizes.reduce((sum, item) => item.completed ? sum + item.size : sum, 0);
  const total = sizes.reduce((sum, item) => sum + item.size, 0);
  return (
    <element
      {...props}
      width="98%"
      height="92%"
      top="center"
      left="center"
      label={title}
      // eslint-disable-next-line
    >
      <Sizes
        sizes={sizes}
        width="63%"
        height="96%"
        left="1%"
        top="center"
        // eslint-disable-next-line
      />

      <Progress
        // eslint-disable-next-line no-confusing-arrow
        done={done}
        total={total}
        width="34%"
        height="96%"
        left="65%"
        top="center"
        // eslint-disable-next-line
      />
    </element>
  );
};
Category.propTypes = {
  title: PropTypes.string.isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      size: PropTypes.number,
      completed: PropTypes.bool,
    }),
  ).isRequired,
};

export default Category;
