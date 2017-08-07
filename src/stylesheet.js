export default {
  bordered: {
    border: {
      type: 'line',
    },
  },

  transparent: {
    style: {
      transparent: true,
    },
  },

  active_box: {
    border: {
      type: 'line',
    },
    style: {
      bg: 'green',
      fg: 'black',
      border: {
        fg: 'green',
        blink: true,
        bold: true,
      },
    },
  },

  normal_box: {
    border: {
      type: 'line',
    },
    style: {
      bg: 'black',
      fg: 'white',
    },
  },

  inverted_box: {
    border: {
      type: 'line',
    },
    style: {
      bg: 'black',
      fg: 'white',
      inverse: true,
    },
  },
};
