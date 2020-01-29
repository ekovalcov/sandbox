'use strict'

var express = require('express');
var MongoClient = require('mongodb').MongoClient;
const TelegramBot = require('node-telegram-bot-api');
const { createObjectForIdSearch } = require('./helpers');
const {getJokesByAuthor, getConnection} = require('./db')
const printTelegram = require('debug')('telegram')

const token = '980381562:AAH2Fz8UjC5w-eut-FoGaM8bywUIBLF1Pmo';

const bot = new TelegramBot(token, { polling: true });

var connect;
(async () => {
    connect = await getConnection()
})()

bot.onText(/\/j (.+)/, (telegramMessage) => {
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









