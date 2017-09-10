// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { 
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// //delete many
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(    (result) => { console.log(result);
// });

//   //deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });


  // //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID("59b3873e59e5e487b1057026")}).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

db.collection('Users').deleteOne({name: 'Yasin'});
  //db.close();
});