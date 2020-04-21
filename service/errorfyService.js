let Errorify = function () {
  return this
}
Errorify.prototype.generate = function (result, errorStore) {
  let errors = {}
  _.each(result, function (v) {
    let errorMessage = v.stack.replace('instance.', '')
    let failedAttribute = v.name
    let prop = v.property.replace(/((.*)\.)|(\[[^\d]*(\d+)[^\d]*\])/g, '') // .replace(//g, '') // [\[{0-9}\]']
    let finalMessage = 'Validation failed'
    if (typeof errorStore[prop] !== 'undefined' && typeof errorStore[prop][failedAttribute] !== 'undefined') {
      finalMessage = errorStore[prop][failedAttribute]
    } else {
      finalMessage = errorMessage
    }
    errors[prop] = finalMessage
  })
  let error = {
    status: 400,
    faults: errors
  }
  return error
}
function errorify () {
  let errorify = new Errorify()
  return errorify.generate.apply(errorify, Array.prototype.slice.call(arguments))
}
module.exports = exports = errorify
