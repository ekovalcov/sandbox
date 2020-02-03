"use strict";

const getMsgText = msg => msg.text.split(/\/[a-z]+ /)[1];

const toSearchByAuthorObject = function(telegramMessage) {
  const messageText = getMsgText(telegramMessage);
  return { author: messageText };
};

const toJokeObject = telegramMessage => {
  const jokeText = getMsgText(telegramMessage);
  return {
    joke: jokeText,
    rating: 1,
    author: telegramMessage.from.id,
  }
}

module.exports = {
  getMsgText,
  toSearchByAuthorObject,
  toJokeObject
};
