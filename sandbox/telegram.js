'use strict'

const TelegramBot = require('node-telegram-bot-api');
const token = '980381562:AAH2Fz8UjC5w-eut-FoGaM8bywUIBLF1Pmo';
const bot = new TelegramBot(token, { polling: true });
var debug = require('debug')
const {findItem} = require('./db')

bot.onText(/\/joke (.+)/,  (msg, match) => {
    const joke = findItem(msg)
    console.log(joke)
    bot.sendMessage(telegramMessage.chat.id, joke)
});

// bot.onText(/\/add (.+)/, (msg, match) => {
//     bot.sendMessage(msg.chat.id, 'added');
// });
