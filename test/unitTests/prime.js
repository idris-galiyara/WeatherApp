const prime = require('../../weatherApp/common/prime')
it('"isPrimeDay" function should return boolean value when passed a mumber', done => {
  assert.strictEqual(typeof prime.isPrimeDay(3), 'boolean')
  done()
})
it('"isPrimeDay" function should return true when passed prime mumber', done => {
  assert.strictEqual(prime.isPrimeDay(3), true)
  done()
})
it('"isPrimeDay" function should return false when passed non prime mumber', done => {
  assert.strictEqual(prime.isPrimeDay(10), false)
  done()
})
it('"isPrimeDay" function should return error obj when passed any value other than number', done => {
  try {
    prime.isPrimeDay('hi')
  } catch (err) {
    assert.strictEqual(err.day, 'Provided day is not valid')
  }

  done()
})
