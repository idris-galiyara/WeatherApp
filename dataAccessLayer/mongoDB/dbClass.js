let config = require('./config/db.json')
let mongo = require('mongodb').MongoClient
class MongoDB {
  insertMany (jsonArray) {
    try {
      mongo.connect(config.mongoUrl, function (err, db) {
        if (err) {
        }
        var dbo = db.db(config.database)
        var data = jsonArray.data
        try {
          dbo
            .collection(jsonArray.collection)
            .insertMany(data)
            .then(function (result) {
              db.close()
            }).catch(function () {
              db.close()
            })
        } catch (error) {
          // throw
        }
      })
    } catch (error) {
      // save error on systemLog
    }
  }
}
module.exports = new MongoDB()
