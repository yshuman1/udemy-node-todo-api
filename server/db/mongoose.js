var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://webapp:pword@ds135534.mlab.com:35534/udemy-node-course');
// mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
