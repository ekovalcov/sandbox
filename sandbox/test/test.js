const assert = require('assert');
const {findItem} = require('../db')

describe('db', function() {
    describe('findItem if key exsists', function() {
      it('should return concrete object', async function() {
        await assert.equal(findItem(999999), {});
      });
    });
});