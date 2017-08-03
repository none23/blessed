import React from 'react';
import stylesheet from './stylesheet';

const Jobs = () => (
  <box
    label="Jobs"
    class={stylesheet.bordered} // eslint-disable-line
    left="60%"
    width="40%"
    height="60%"
  />
);

export default Jobs;
