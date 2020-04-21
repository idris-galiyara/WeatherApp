var jsonschema = {
  'id': '/errorStore',
  'properties': {
    'city': {
      'type': 'string',
      'required': true,
      'maxLength': 20,
      'minLength': 2
    }
  },
  'additionalProperties': false }

module.exports = jsonschema
