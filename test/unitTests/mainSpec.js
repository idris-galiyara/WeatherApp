'use strict'
global.q = require('q')
global._ = require('underscore')
global.assert = require('assert')
let absolutePath = __dirname.split('/')
absolutePath = absolutePath.splice(0, absolutePath.length - 1).join('/')
const env = require('dotenv').config({ path: absolutePath + '/.env' })
if (env.error) {
  throw env.error
}

let importTest = (name, path) => {
  describe(name, () => {
    require(path)
  })
}

after(function (done) {
  console.log('AFTER')
  done()
  process.exit()
})

describe('RUNNING UNIT TESTS:', () => {
  importTest('GET ID:', './getID.js')
  importTest('IS PRIME DAY:', './prime.js')
  importTest('WEATHER SERVICE:', './weatherService.js')
  importTest('BODY VALIDATOR:', './bodyValidator.js')
  importTest('LOGGER:', './logger.js')
})
