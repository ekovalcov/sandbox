'use strict'

var express = require('express');
var MongoClient = require('mongodb').MongoClient;
const TelegramBot = require('node-telegram-bot-api');
const { createObjectForIdSearch } = require('./helpers');

const url = 'mongodb+srv://ekovalcov:KfHan%3D4V%21%26dLDvEw%29sWb%7D@cluster0-o2rqp.mongodb.net/test?retryWrites=true&w=majority';
const token = '980381562:AAH2Fz8UjC5w-eut-FoGaM8bywUIBLF1Pmo';
var dbName = 'jokes';


var client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

var dbCollection, bot;

var app = express();
var port = process.env.PORT || 3002
app.listen(port, function () {
    client.connect(err => {
        dbCollection = client.db(dbName).collection(dbName, () => {
            bot = new TelegramBot(token, { polling: true });
            bot.onText(/\/j (.+)/, (msg) => {
                dbCollection.find(createObjectForIdSearch(msg)).toArray().then(result => {
                    result.forEach(elem => {
                        bot.sendMessage(msg.chat.id, elem.joke);
                    });  
                });
            });
        });
    });
  });









