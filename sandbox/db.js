const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://ekovalcov:KfHan%3D4V%21%26dLDvEw%29sWb%7D@cluster0-o2rqp.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});

const get = (msg) => {
  return client.connect(err => {
    const collection = client.db("jokes").collection("jokes");
    return collection.find({user:msg.text}).toArray().then(result => {
      bot.sendMessage(msg.chat.id, result[0].joke)
    })
  
  });
} 

const TelegramBot = require('node-telegram-bot-api');
const token = '980381562:AAH2Fz8UjC5w-eut-FoGaM8bywUIBLF1Pmo';

const bot = new TelegramBot(token, {polling: true});
  bot.on('message', async (msg) => {
    get(msg)
});


