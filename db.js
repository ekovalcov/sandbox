const MongoClient = require('mongodb').MongoClient;
var debug = require('debug')('db')
const {createObjectForIdSearch} = require('./helpers')

const url = 'mongodb+srv://ekovalcov:KfHan%3D4V%21%26dLDvEw%29sWb%7D@cluster0-o2rqp.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
var dbName = 'jokes'

const findItem = async (msg, bot) => {
  debug('INCOMING MESSAGE', msg)
  client.connect(err => {
    err? debug('error connection to db\n', err):
    client
      .db(dbName)
      .collection(dbName)
      .find()
      .toArray(createObjectForIdSearch(msg))
      .then(result => {
        debug('RESULT\n', result)
        bot.sendMessage(msg.chat.id, JSON.stringify(result))
      })
    client.close()
  })
}

console.log()

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


