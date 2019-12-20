'use strict'

const TelegramBot = require('node-telegram-bot-api');
const token = '980381562:AAH2Fz8UjC5w-eut-FoGaM8bywUIBLF1Pmo';

const get = require('./db')
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {

    await bot.sendMessage(msg.chat.id, "'"+get()+"'");
});
