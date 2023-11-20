const path = require('path');

module.exports = {
  // ... other webpack configuration options

  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/,
        use: [
          'style-loader', // Injects styles into the DOM
          'css-loader',   // Interprets `@import` and `url()` like `import/require()` and resolves them
          'sass-loader',  // Compiles Sass to CSS
        ],
      },
      // ... other rules
    ],
  },

  // ... other webpack configuration options

};
