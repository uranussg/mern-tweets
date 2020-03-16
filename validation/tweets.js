const Validator = require('validator')
const validText = require("./valid-text")

module.exports = function(data) {
    let errors = {}

    data.text = validText(data.text) ? data.text : ''

    if (Validator.isEmpty(data.text)) {
        errors.text = 'Tweets can not be empty'
    }

    if (!Validator.isLength(data.text, {max: 100})) {
        errors.text = 'Tweets can not exceed 100 words'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}