const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    join(
      __dirname,
      '../../libs/client/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
  ],
  theme: {
    colors: {
      secondary: '#F38218',
      accent: '#304766',
      gray: '#000',
    },

    extend: {
      boxShadow: {
        custom:
          '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      fontFamily: {
        system: "'Inter', sans-serif",
      },
    },
  },
};
