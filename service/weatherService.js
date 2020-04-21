// incase if we change weather api provider just new to send new class obj no change in entire code
// loose coupled
let OpenWeatherMaps = require('./openWeatherMap')
class Weather {
  getWeather () {
    let apiProvider = process.env.APIPROVIDER.toLowerCase()
    switch (apiProvider) {
      case apiProvider = 'openweathermap':
        return OpenWeatherMaps
      default:
        return OpenWeatherMaps
    }
  }
}

// Return OBJ
module.exports = new Weather()
