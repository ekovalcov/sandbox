var _ = require('lodash');
const assert = require('assert');
const {getConnection, getJokesByAuthor} = require('../db')
const {getMsgText, toSearchByAuthorObject, toJokeObject} = require('../helpers')
const {searchJokeMsg, addJokeMsg} = require('./testData')

const text = "tester"
const joke = {
  joke: 'testers gonna test',
  rating: 1,
  author: 262443789
}


var connect;

before(async function() {
  this.timeout(5000)
  connect = await getConnection()
})

after(async () => {
  await connect.close()
})

describe('helpers.js', function() {
  describe('getMsgText', function() {
    it('из msg достается правильный текст команды', async function() {
      await assert.equal(getMsgText(searchJokeMsg), text);
    }); 
  });

  describe('toSearchByAuthorObject', function() {
    it('формируется валидный объект для поиска по автору в базе', async function() {
      await assert.deepEqual(toSearchByAuthorObject(searchJokeMsg), {author: text})
    });
  });

  describe('toJokeObject', function() {
    it('DTO сообщения телеграмма к joke', async function() {
      await assert.deepEqual(toJokeObject(addJokeMsg), joke)
    });
  });

});

describe('db.js', () => {
  describe('getJokesByAuthor', async function() {
    it('в продовой базе ищется тестовая шутка по имени Автора', async () => {
      const searchResult = await getJokesByAuthor(searchJokeMsg, connect)
      await assert.equal(searchResult[0].joke, 'test the search method')
    })
    // it('база содержит 1 результат поиска', () => {
    //   assert.equal(searchResult.length, 1)
    // })
  })
})