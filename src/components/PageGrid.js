import React, { PropTypes } from 'react';
import { Grid } from 'react-blessed-contrib';

import Category from '../components/Category';

const PageGrid = ({ rows, data, ...props }) => (
  <Grid
    {...props}
    rows={rows}
    cols={1}
  >
    {data.map(({ title, sizes }, index) => (
      <element
        key={title}
        row={index}
        col={0}
        colSpan={1}
        rowSpan={1}
      >
        <Category title={title} sizes={sizes} />
      </element>
    ))}
  </Grid>
);
PageGrid.propTypes = {
  rows: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.object, // eslint-disable-line react/forbid-prop-types
  ).isRequired,
};

export default PageGrid;
