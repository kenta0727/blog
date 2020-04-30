module.exports = {
  entry: './src/client.js',
  output: {
    path: __dirname + '/public',
    fiename: 'client.js',
  },
  "scripts": {
    "start": "webpack-dev-server"
  },
  mode: "production"
};
