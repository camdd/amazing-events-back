const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
/*     name: String,
    category: String,
    date: String,
    description: String,
    image: String,
    place: String,
    price: Number,
    capacity: Number,
    assistance: Number,
    estimate: Number,
}, { strict: false }); */


//para cuando vea más sobre validación:
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