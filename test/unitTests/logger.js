let logger = require('../../service/dataLog').log
global.moment = require('moment')
it('"logger" function should not return anything', done => {
  logger(1, 'logger', 'LOG123', {}, {}, {})
  done()
})
// can write after block to delet the inserted data
