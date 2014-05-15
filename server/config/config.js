var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/multivision',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://danham:st4rw4rs@ds047448.mongolab.com:47448/multivision',
    port: process.env.PORT || 80
  }
}