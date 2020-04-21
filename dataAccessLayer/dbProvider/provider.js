// incase if we change log db so  just new to send new class obj no change in entire code
// loose coupled
let mongo = require('../mongoDB/dbClass')
class DBProvider {
  getdb () {
    let db = process.env.DB
    console.log(process.env.DB)
    switch (db) {
      case db = 'mongo':
        return mongo
      default:
        return mongo
    }
  }
}

// Return OBJ
module.exports = new DBProvider()
