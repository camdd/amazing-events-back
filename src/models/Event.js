const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    assistance: {
        type: Number,
    },
    estimate: {
        type: Number,
    },
})

const Event = mongoose.model("Event", eventSchema)

module.exports = Event