"use strict";

const getMsgText = msg => msg.text.split(" ")[1];

const toSearchByAuthorObject = function(telegramMessage) {
  const messageText = getMsgText(telegramMessage);
  return { author: messageText };
};

module.exports = {
  getMsgText,
  toSearchByAuthorObject
};
