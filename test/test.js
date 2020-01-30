var _ = require('lodash');
const assert = require('assert');
const {getConnection, getJokesByAuthor} = require('../db')
const {getMsgText, toSearchByAuthorObject} = require('../helpers')
const {testMsg} = require('./testData')

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
      await assert.equal(getMsgText(testMsg), 999999);
    });
  });

  describe('toSearchByAuthorObject', function() {
    it('формируется валидный объект для поиска по автору в базе', async function() {
      await assert.equal(toSearchByAuthorObject(testMsg), 999999);
    });
  });
});

describe('db.js', () => {
  describe('getJokesByAuthor', function() {
    it('в продовой базе ищется тестовая шутка по имени Автора', async () => {
      const searchResult = await getJokesByAuthor("tester", connect)
      assert.equal(searchResult[0].joke, 'test the search method')
    })
    it('база содержит 1 результат поиска', () => {
      assert.equal(searchResult.length, 1)
    })
  })
})