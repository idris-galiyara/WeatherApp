let HttpService = require('./httpService')
let config = require('./config/config')
class OpenWeatherMaps {
  getCurrentWeather (city) {
    let deferred = q.defer()
    try {
      let apiName = 'weather?'
      let url = config.endPoint + apiName + 'appid=' + config.apiKey + '&q=' + encodeURIComponent(city)
      HttpService.httpGet(url, {})
        .then((data) => {
          deferred.resolve(data)
        })
        .catch((error) => {
          deferred.reject(error)
        })
    } catch (error) {
      deferred.reject(error)
    }
    return deferred.promise
  }
}
module.exports = new OpenWeatherMaps()
