var _ = require('lodash');
const assert = require('assert');
const {getConnection, getJokesByAuthor} = require('../db')
const {getMsgText} = require('../helpers')
const {createObjectForIdSearch} = require('../helpers')
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

  describe('createObjectForIdSearch', function() {
    
    it('формируется корректный JSON для поиска шутки по id', async function() {
      await assert.deepStrictEqual(createObjectForIdSearch(testMsg), {author: "999999"});
    });
  });
});

describe('db.js', () => {
  describe('getJokesByAuthor', function() {
    it('в продовой базе ищется тестовая шутка по имени Автора', async () => {
      const searchResult = await getJokesByAuthor("tester", connect)
      assert.equal(searchResult.length, 1)
      assert.equal(searchResult[0].joke, 'test the search method')
    })
  })
})