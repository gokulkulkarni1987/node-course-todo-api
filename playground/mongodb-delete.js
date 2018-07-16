//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });
  // deleteOne
  // db.collection('Todos').deleteOne({ text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // })

  // finOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Gokul Kulkarni'});

  db.collection('Users').findOneAndDelete({ _id: new ObjectID('5b4c98e7736653d5d53f8e06')}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });
  // db.close();
});