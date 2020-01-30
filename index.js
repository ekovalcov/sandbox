'use strict'

const TelegramBot = require('node-telegram-bot-api');
const {getJokesByAuthor, getConnection} = require('./db')
const printTelegramMessage = require('debug')('telegram')
var express = require('express');
var request = require('request');


const token = '980381562:AAHJ2Xra1x7JuKCM2y1z__S8KJ3m3e_R8P0';

const bot = new TelegramBot(token, { polling: true });
var connect;


var app = express();
var port = process.env.PORT || 3002 

app.get('/', (req, res) => res.send('Hello World!'))

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









