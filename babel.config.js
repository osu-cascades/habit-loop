const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@src': path.resolve(__dirname, 'src'),
          },
        },
      ],
      [
        'transform-inline-environment-variables',
        {
          include: ['NODE_ENV'],
        },
      ]
    ],
  };
};