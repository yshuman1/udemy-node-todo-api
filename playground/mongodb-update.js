// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { 
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

db.collection('Users').findOneAndUpdate({_id: new ObjectID('59b214c4109eb14d4ef92acc')}, { 
  $set : {
    name: 'yasin', 
  },
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
  
});

db.collection('Users').deleteOne({name: 'Yasin'});
  //db.close();
});