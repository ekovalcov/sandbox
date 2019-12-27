const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://ekovalcov:KfHan%3D4V%21%26dLDvEw%29sWb%7D@cluster0-o2rqp.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
var debug = require('debug')('db')
var dbName = 'jokes'

const findItem = (msg, bot) => {
  client.connect(err => {
    err? debug('error connection to db\n', err):
    client.db(dbName).collection(dbName).find({}).toArray().then(result => {
      debug('RESULT\n', result)
      bot.sendMessage(msg.chat.id, JSON.stringify(result))
      client.close()
    })
  })
}
findItem()

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


