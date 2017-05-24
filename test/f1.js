var
  expect = require('chai').expect,
  f1 = require('../lib/f1').f1

describe('f1', function() {
  it('should work', function() {
    var y = f1(2)
    expect(y).to.equal(8)
  })
})
