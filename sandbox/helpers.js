'use strict'

const getMsgText = msg => msg.text.split(' ')[1]

const createObjectForIdSearch = msg => {
    return {user: getMsgText(msg)}
}

 module.exports = {
     getMsgText,
     createObjectForIdSearch
 }

