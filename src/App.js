import React from 'react';

import List from './components/List';
import Category from './components/Category';

const h = 25;

const height = (i = 1) => `${i * h}%`;

const App = () => (
  <List title="Sample Title" >
    <Category top={height(0)} height={height()} title="Category 1" sizes={[1, 2, 3, 4, 5]} />
    <Category top={height(1)} height={height()} title="Category 2" sizes={[1, 4, 5, 6]} />
    <Category top={height(2)} height={height()} title="Category 3" sizes={[2, 3, 5]} />
    <Category top={height(3)} height={height()} title="Category 3" sizes={[2, 3, 5]} />
  </List>
);

export default App;
