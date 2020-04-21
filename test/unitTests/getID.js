const id = require('../../service/getID')

it('"getId" function should return data', done => {
  assert.strictEqual(id.getId().length > 0, true)
  done()
})

it('"getId" function should return a id of type string', done => {
  assert.strictEqual(typeof id.getId(), 'string')
  done()
})

it('"getId" function should return data of length 23', done => {
  assert.strictEqual(id.getId().length, 23)
  done()
})

it('"getId" function should return be unique', done => {
  assert.notEqual(id.getId(), id.getId())
  done()
})
