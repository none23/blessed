const path = require('path');
module.exports = {
  root: true,
  extends: [ 'none23' ],
  settings: {
    'import/resolver': {
      node: { paths: path.resolve(__dirname, 'src') },
    },
  },
  rules: {
  },
};
