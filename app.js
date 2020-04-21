
const app = require('express')()
// LOAD ENV FILE START ==================================================
global.absolutePath = __dirname
if (!process.env.NODE_ENV) require('dotenv').config({ path: absolutePath + '/.env' })
// LOAD ENV FILE END ====================================================')

// GLOBAL DEPENDENCIES START ============================================
global.q = require('q')
global.moment = require('moment')
global._ = require('underscore')
const Validator = require('jsonschema').Validator
global.v = new Validator()
global.getUniqueId = require('./service/getID')
// GLOBAL DEPENDENCIES END ==============================================

// LOCAL DEPENDENCIES START==============================================
const bodyParser = require('body-parser')
const constants = require('./weatherApp/config/constant')
const BASE_URL = constants.BASE_URL
const v1Routes = require('./weatherApp/v1Router')
// LOCAL DEPENDENCIES END ===============================================

// APP.USE START ==========================================================
app.use(bodyParser.json({
  limit: '1mb'
}))
// FOR ERROR HANDLING
app.use((err, req, res, next) => {
  res.status(400).send({
    status: 400,
    message: 'Bad request',
    error: err
  })
})
// APP.USE END ==========================================================

// ============ SERVING APIs START ============
// ============ VERSION WISE ROUTE CONTROL START ============
app.use(v1Routes)
// ============ VERSION WISE ROUTE CONTROL END ============
app.get(BASE_URL + '/ping', (req, res) => res.status(200).send('pong'))
// ON NO ROUTE MATCH
app.get('*', (req, res) => {
  res.status(404).send('404 PAGE not found >' + req.url + '<<')
})
// ============ SERVING APIs END ============

// SERVER PORT SECTION START =======================================
let port = process.env.PORT
let server = app.listen(port)
let environment = process.env.NODE_ENV
server.timeout = 3600000

console.log('API is running on port ', '\x1b[34m' + port + '\x1b[0m', ' in', '\x1b[33m' + environment + '\x1b[0m', 'environment')
console.log('curl http://localhost:' + port + BASE_URL + '/ping')

// console.log(require('./weatherApp/common/isPrimeDay')(24))

// var openw = require('./service/openWeatherMap')
// var obj = new openw()
// obj.getCurrentWeather('mumbai').then(data => {
//   console.log(data)
// })
//   .catch(function (error) {
//     console.log(error)
//   })
