const Validator = require('validator')
const validText = require("./valid-text")

module.exports = function(data) {
    let errors = {}

    data.body = validText(data.body) ? data.body : ''

    if (Validator.isEmpty(data.body)) {
        error.body = 'Tweets can not be empty'
    }

    if (Validator.isLength(data.body, {max: 100})) {
        error.body = 'Tweets can not exceed 100 words'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}