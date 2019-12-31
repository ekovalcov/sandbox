var _ = require('lodash');
const assert = require('assert');
const {findItem} = require('../db')
const {getMsgText} = require('../helpers')
const {createObjectForIdSearch} = require('../helpers')

const {testMsg} = require('./testData')


// describe('db', function() {
//     describe('findItem if key exsists', function() {
//       it('should return concrete object', async function() {
//         await assert.equal(await findItem(testMsg), {});
//       });
//     });
// });

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