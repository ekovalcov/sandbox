'use strict'

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://ekovalcov:KfHan%3D4V%21%26dLDvEw%29sWb%7D@cluster0-o2rqp.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});

const get = (msg) => {
    console.log(client.connect())

    }
  
    // client.connect(err => {
    //   client
    //     .db("jokes")
    //     .collection("jokes")
    //     .find({user:msg.text})
    //     .toArray()
    //     .then(result => {
    //       bot.sendMessage(msg.chat.id, result[0].joke)
    //     })
    // });
  // }

// get(1)

function ex(num, callback) {
  num = num + 1;
  callback(num);
}

// const ex = (num, callback) => {
//   num = num + 1;
//   callback(num)
// }

ex(1, function(num) {
  return 2*num;
})

console.log(ex(1))