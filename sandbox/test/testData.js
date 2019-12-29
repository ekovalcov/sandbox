const testMsg = {
    message_id: 305,
    from: {
      id: 262443789,
      is_bot: false,
      first_name: 'Eugene',
      last_name: 'Kovalcov',
      username: 'ekovaltsov',
      language_code: 'ru'
    },
    chat: {
      id: 262443789,
      first_name: 'Eugene',
      last_name: 'Kovalcov',
      username: 'ekovaltsov',
      type: 'private'
    },
    date: 1577556884,
    text: '/j 999999',
    entities: [ { offset: 0, length: 2, type: 'bot_command' } ]
  }

  module.exports = {
      testMsg,
  }