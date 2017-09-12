var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://webapp:pword@ds135534.mlab.com:35534/udemy-node-course');

module.exports = {mongoose};
