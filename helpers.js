"use strict";

const getMsgText = msg => msg.text.split(" ")[1];

const toSearchByAuthorObject = function(telegramMessage) {
  const messageText = getMsgText(telegramMessage);
  return { author: messageText };
};

// const toJokeObject = telegramMessage => {
//   jokeText = getMsgText(telegramMessage);
//   author = getAuthor
//   const jokeObject = {
//     joke: jokeText,
//     rating: 1,

//   }
// }

module.exports = {
  getMsgText,
  toSearchByAuthorObject
  // toJokeObject
};
