import regeneratorRuntime from 'regenerator-runtime';
module.exports = () => {
  global.testServer = require('./server/server.js');
}

// import regeneratorRuntime from 'regenerator-runtime';

// module.exports = () => {
//   global.testServer = require('./server');
// };