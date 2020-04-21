let jsonschema = require('./jsonschema')
let errorStore = require('./errorStore')
let BodyValidator = require('../../../service/bodyValidatorService')
let Prime = require('../../common/prime')
let weatherService = require('../../../service/weatherService').getWeather()
let logger = require('../../../service/dataLog').log
class CurrentWeather {
  getCurrentWeather (req, res) {
    try {
      let logId = 'LOG' + getUniqueId.getId()
      logger(1, 'getCurrentWeather', logId, req.body, req.headers, {})
      logger(2, 'BodyValidator', logId, {}, {}, req.body)
      BodyValidator.validate(req.body, jsonschema, errorStore)
        .then(function (data) {
          let day = parseInt(moment().format('DD'))
          logger(3, 'isPrimeDay', logId, {}, {}, day)
          if (Prime.isPrimeDay(day)) {
            return data
          } else {
            var response = {
              status: 403,
              message: 'date is not prime so no data',
              data: {}
            }
            return Promise.reject(response)
          }
        })
        .then(function (data) {
          logger(4, 'getCurrentWeather', logId, {}, {}, data)
          return weatherService.getCurrentWeather(data.city)
        })
        .then(function (data) {
          var response = {
            status: 200,
            message: 'success',
            data: data
          }
          logger(5, 'FinalResponse', logId, {}, {}, response)
          res.status(200).send(response)
        })
        .catch(function (error) {
          logger(400, '', logId, {}, {}, error)
          // shloud log error and send custome error to consumer in real app
          if (error.status && error.status === 403) {
              res.status(403).send({
              status: 403,
              message: error.message,
              error: {}
            })
          } else {
            res.status(400).send({
              status: 400,
              message: 'Bad request',
              error: error
            })
          }
        })
    } catch (error) {
      // shloud log error and send custome error to consumer in real app
      res.status(500).send({
        status: 500,
        message: 'Internal server error',
        error: { 'message': 'oops something went wrong' }
      })
    }
  }
}
module.exports = new CurrentWeather()
