const path = require('path');
// load the default config generator.
const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');
const globalPaths = [
  path.resolve(__dirname, '../src'),
  path.resolve(__dirname, '../static')
];

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Extend configuration
  config.module.rules.push({
    test: /\.(scss|sass)$/,
    use: [
      {loader: 'style-loader'},
      {loader: 'css-loader'}, {
        loader: 'sass-loader',
        options: {
          indentedSyntax: true
        }
      }
    ],
    include: globalPaths
  });
  config.module.rules.push({
    test: /\.less$/,
    use: {
      loader: 'less-loader'
    },
    include: globalPaths
  });
  config.module.rules.push({
    test: /\.styl$/,
    use: {
      loader: 'stylus-loader'
    },
    include: globalPaths
  });
  config.module.rules.push({
    test: /\.css$/,
    use: {
      loader: 'style-loader!css-loader'
    },
    include: globalPaths
  });
  config.module.rules.push({
    test: /\.(woff|woff2)$/,
    use: {
      loader: 'url-loader',
      options: {
        name: 'fonts/[hash].[ext]',
        limit: 5000,
        mimetype: 'application/font-woff'
      }
    },
    include: globalPaths
  });
  config.module.rules.push({
    test: /\.(ttf|eot|svg|png)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: 'fonts/[hash].[ext]'
      }
    },
    include: globalPaths
  });

  return config
};
