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

const getCollection = async () => {
    var connect = await new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true }).connect().then(res => {
        return res
    });
    return connect.db(dbName).collection()
    return connect.db(dbName).collection(dbName)
}

const getJokesByAuthor = async name => {
  const collection = await getCollection()
  debug(collection)
  const res = await collection.find({author: name}).toArray()
  debug(res)
  return res
  
}

// getJokesByAuthor("Женя")

(async () => {
  const re = await getJokesByAuthor("tester")
  console.log(re)
})()

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
  getJokesByAuthor
  // insertItem
}


