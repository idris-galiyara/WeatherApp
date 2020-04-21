let jsonschema = require('../../weatherApp/api/getWeather/jsonschema')
let errorStore = require('../../weatherApp/api/getWeather/errorStore')
let BodyValidator = require('../../service/bodyValidatorService')
let validbody = require('../../test/mockData/currentweather/valid.json')
let invalidbody = require('../../test/mockData/currentweather/invalid.json')
let extraProperty = require('../../test/mockData/currentweather/extraProperty.json')
let requiredProperty = require('../../test/mockData/currentweather/requiredProperty.json')
const Validator = require('jsonschema').Validator
global.v = new Validator()
it('"validate" function should return same property  when valid json body is passed', done => {
  BodyValidator.validate(validbody, jsonschema, errorStore)
    .then(function (data) {
      assert.strictEqual(data.city, validbody.city)
      done()
    })
})
it('"validate" function should return "City should be atleast 2 characters"  when invalid city length is passed', done => {
  BodyValidator.validate(invalidbody, jsonschema, errorStore)
    .then(function (data) {
      done('this should not resolve')
    })
    .catch((error) => {
      assert.strictEqual(error.city, 'City should be atleast 2 characters')
      done()
    })
})
it('"validate" function should return "instance additionalProperty "state" exists in instance when not allowed"  when extra property is passed', done => {
  BodyValidator.validate(extraProperty, jsonschema, errorStore)
    .then(function (data) {
      done('this should not resolve')
    })
    .catch((error) => {
      assert.strictEqual(error.instance, 'instance additionalProperty "state" exists in instance when not allowed')
      done()
    })
})
it('"validate" function should return "City is mandatory"  when extra property is passed', done => {
  BodyValidator.validate(requiredProperty, jsonschema, errorStore)
    .then(function (data) {
      done('this should not resolve')
    })
    .catch((error) => {
      assert.strictEqual(error.city, 'City is mandatory')
      done()
    })
})
