const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '59b8630b7dda3413e48f7d0e'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('59b8630b7dda3413e48f7d0e').then((todo) => {
  console.log(todo);
});
