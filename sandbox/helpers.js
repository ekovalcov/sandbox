'use strict'

const getMsgText = msg => msg.text.split(' ')[1]

const findById = msg => {id: getMsgText(msg)}

 module.exports = {
     getMsgText,
     findById
 }

