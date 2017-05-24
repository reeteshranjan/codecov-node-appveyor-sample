var
  expect = require('chai').expect,
  f2 = require('../lib/f2').f2

describe('f2', function() {
  it('should work', function() {
    var y = f2(3)
    expect(y).to.equal(2)
  })
})
