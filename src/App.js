import React from 'react';

import PageGrid from './components/PageGrid';

const catData = [
  {
    title: 'First',
    sizes: [
      { size: 1, completed: true, active: false },
      { size: 3, completed: true, active: false },
      { size: 5, completed: true, active: false },
      { size: 7, completed: true, active: false },
    ],
  },
  {
    title: 'Second',
    sizes: [
      { size: 1, completed: true, active: false },
      { size: 3, completed: true, active: false },
    ],
  },
  {
    title: 'Third',
    sizes: [
      { size: 2, completed: true, active: false },
      { size: 3, completed: true, active: false },
      { size: 4, completed: false, active: true },
      { size: 6, completed: false, active: false },
    ],
  },
  {
    title: 'Fourth',
    sizes: [
      { size: 7, completed: false, active: false },
    ],
  },
  {
    title: 'Fifth',
    sizes: [
      { size: 2, completed: false, active: false },
      { size: 2, completed: false, active: false },
      { size: 4, completed: false, active: false },
      { size: 4, completed: false, active: false },
    ],
  },
];

const App = () => (
  <element title="Sample Title">
    <PageGrid
      data={catData}
      rows={5}
      width="100%"
      height="100%"
    />
  </element>
);

export default App;
