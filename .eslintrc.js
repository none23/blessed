const path = require('path');

module.exports = {
  root: true,
  extends: ['none23'],
  settings: {
    'import/resolver': {
      node: { paths: path.resolve(__dirname, 'src') },
    },
  },
  rules: {
    'max-len': 0,
    'react/no-array-index-key': 0,
    'react/no-unknown-property': 0,
  },
};
