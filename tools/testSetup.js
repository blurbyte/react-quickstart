process.env.NODE_ENV = 'test';

//disable webpack-specific features for tests since
//mocha doesn't know what to do with them
['.css', '.png', '.jpg'].forEach(ext => {
  require.extensions[ext] = () => null;
});

// Register babel so that it will transpile ES6 to ES5
// before our tests run.
require('babel-register')();
