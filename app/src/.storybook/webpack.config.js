// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://goo.gl/qPbSyX

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    loaders: [
      {
        test: /.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: path.resolve(__dirname, '../')
      },
      {
          test: /\.(jpg|png|svg)$/,
          loader: 'file?name=assets/[name].[hash].[ext]'
      },
    ],
  },
};
