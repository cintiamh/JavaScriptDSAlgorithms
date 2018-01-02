const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

const commonConfig = {
  entry: {
    src: PATHS.src
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'JavaScript'
    }),
  ],
};

const productionConfig = () => commonConfig;

const developmentConfig = () => {
  const config = {
    devServer: {
      historyApiFallback: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT,
      overlay: {
        errors: true,
        warnings: true
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        }
      ]
    }
  };

  return Object.assign(
    {},
    commonConfig,
    config
  );
};

module.exports = (env) => {
  if (env === 'production') {
    return productionConfig();
  }
  return developmentConfig();
}
