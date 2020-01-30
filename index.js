'use strict'

const TelegramBot = require('node-telegram-bot-api');
const {getJokesByAuthor, getConnection} = require('./db')
const printTelegramMessage = require('debug')('telegram')
const DEBUG = require('debug')('DEBUG')

const token = '980381562:AAHJ2Xra1x7JuKCM2y1z__S8KJ3m3e_R8P0';

const bot = new TelegramBot(token, { polling: true });
var connect;

var port = process.env.PORT || 3002
app.listen(port, function () { 
    
(async () => {
    connect = await getConnection()
})()

bot.onText(/\/j (.+)/, async telegramMessage => {
    printTelegramMessage(telegramMessage)
    const jokes = await getJokesByAuthor(telegramMessage, connect)
    if (jokes.length === 0) {
        bot.sendMessage(telegramMessage.chat.id, 'Автор не умеет шутить (шуток не найдено)');
    }
    jokes.forEach(elem => {
        bot.sendMessage(telegramMessage.chat.id, elem.joke);
    });  
});
}); 









