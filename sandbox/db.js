const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://ekovalcov:KfHan%3D4V%21%26dLDvEw%29sWb%7D@cluster0-o2rqp.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
var debug = require('debug')('db')
var dbName = 'jokes'


const findItem = searchKey => {
  let finalResult;

  client.connect(err => {
    err? debug('error connection to db\n', err):
    client.db(dbName).collection(dbName).find({}).toArray().then(result => {
      finalResult = result[0].joke;
    })
    client.close()
  })
  
  return finalResult;
}

// const findItem = (telegramMessage, ombject) => {
//   client.connect(err => {
//     err? debug('error connection to db\n', err):
//     client.db(dbName).collection(dbName).find(object).toArray().then(result => {
//       bot.sendMessage(telegramMessage.chat.id, result[0].joke)
//     })
//     client.close()
//   })
// }

// const insertItem = telegramMessage => {
//   debug('establishing connect to', dbName)
//   client.connect(err => {
//     err? debug('error connection to db\n', err):
//     client.db(dbName).collection(dbName).insert(telegramMessage.text)
//     bot.sendMessage(telegramMessage.chat.id, 'Your joke has been added!')
//     client.close()
//   })
// }

module.exports = {
  findItem,
  // insertItem
}


