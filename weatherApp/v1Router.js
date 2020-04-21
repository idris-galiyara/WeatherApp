const express = require('express')
const router = express.Router()
const constants = require('./config/constant')
const BASE_URL_V1 = constants.BASE_URL + constants.V1

// GET API
router.post(BASE_URL_V1 + '/currentweather', require('./api/getWeather/currentWeather').getCurrentWeather)
module.exports = router
