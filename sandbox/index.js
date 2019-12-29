'use strict'

var MongoClient = require('mongodb').MongoClient;
const TelegramBot = require('node-telegram-bot-api');
const token = '980381562:AAH2Fz8UjC5w-eut-FoGaM8bywUIBLF1Pmo';
var debug = require('debug')
const { findItem } = require('./db')

const { createObjectForIdSearch } = require('./helpers')

const url = 'mongodb+srv://ekovalcov:KfHan%3D4V%21%26dLDvEw%29sWb%7D@cluster0-o2rqp.mongodb.net/test?retryWrites=true&w=majority';
var dbName = 'jokes'


var client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

var dbCollection;
var bot;

client.connect(err => {
    dbCollection = client.db(dbName).collection(dbName, () => {
        bot = new TelegramBot(token, { polling: true });
        bot.onText(/\/j (.+)/, (msg) => {
            const jokeText = dbCollection.find().toArray(createObjectForIdSearch(msg)).then(result => {
              debug('RESULT\n', result)
              bot.sendMessage(msg.chat.id, JSON.stringify(jokeText))
            })
        });
    })
    debug('dbCollection \n', dbCollection)
    // .find()
    // .toArray(createObjectForIdSearch(msg))
    // .then(result => {
    //   debug('RESULT\n', result)
    //   bot.sendMessage(msg.chat.id, JSON.stringify(result))
    // })
})







