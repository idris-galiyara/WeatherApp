let db = require('../dataAccessLayer/dbProvider/provider').getdb()
class DataLog {
  log (step, fName, logId, body = {}, headers = {}, response = {}) {
    var data = {
      'step': step,
      'logID': logId,
      'function': fName,
      'Request': { 'body': body, 'headers': headers },
      'response': response,
      'logTime': moment().format('DD-MMM-YYYY, h:mm:ss a')

    }
    let logdata = []
    logdata.collection = 'apiLogs'
    logdata.data = [data]
    db.insertMany(logdata)
  }
}
module.exports = new DataLog()
