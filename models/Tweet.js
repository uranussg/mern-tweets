const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Tweetschema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: date,
        default: Date.now
    }

})

module.exports = Tweet = mongoose.model('tweet', Tweetschema)