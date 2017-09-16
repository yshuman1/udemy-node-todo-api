const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$MjQ2BiE00iiE3rhBK6Arz.lNj5hnKgZpcYUsuNj8mCfcXeah9a.Zi';

bcrypt.compare('123', hashedPassword, (err,res) => {
  console.log(res);
});
// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });
