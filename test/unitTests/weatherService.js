let weatherService = require('../../service/weatherService').getWeather()

it('"getCurrentWeather" function should return object  when city is passed', done => {
  weatherService.getCurrentWeather('pune')
    .then((data) => {
      assert.strictEqual(typeof data, 'object')
      done()
    })
})
it('"getCurrentWeather" function should return code 200  when valid city is passed', done => {
  weatherService.getCurrentWeather('pune')
    .then((data) => {
      assert.equal(data.cod, 200)
      done()
    }).catch((error) => {
      done(error)
    })
})
it('"getCurrentWeather" function should return code 404 when invalid city is passed', done => {
  weatherService.getCurrentWeather('puness')
    .then((data) => {
      assert.equal(data.cod, 404)
      done()
    }).catch((error) => {
      done(error)
    })
})
it('"getCurrentWeather" function should return code 400 when no city is passed', done => {
  weatherService.getCurrentWeather('')
    .then((data) => {
      assert.equal(data.cod, 400)
      done()
    }).catch((error) => {
      done(error)
    })
})
