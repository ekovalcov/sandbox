'use strict'

const TelegramBot = require('node-telegram-bot-api');
const {getJokesByAuthor, getConnection} = require('./db')
const printTelegram = require('debug')('telegram')

const token = '980381562:AAHJ2Xra1x7JuKCM2y1z__S8KJ3m3e_R8P0';

const bot = new TelegramBot(token, { polling: true });

// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
  
//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, 'Received your message');
//   });

// var connect;
// (async () => {
//     connect = await getConnection()
// })()



bot.onText(/\/j (.+)/, (telegramMessage) => {
    console.log(telegramMessage)
    printTelegram(telegramMessage)
    const jokes = getJokesByAuthor("tester", connect)
    jokes.forEach(elem => {
        bot.sendMessage(telegramMessage.chat.id, elem.joke);
    });  
});

// var port = process.env.PORT || 3002
// app.listen(port, function () {
//     client.connect(err => {
//         dbCollection = client.db(dbName).collection(dbName, () => {
           
            
//         });
//     });
// }); 









