const Event = require( '../models/Event' )

const eventDAL = {
    getAllEvents: async() => {
        return await Event.find()
    },

    getOneEvent : async (id) => {
        return await Event.findById(id)
    },

    createEvent: async(payload)=> {
        try {
            await Event.create(payload)
            return "Event created successfully"
        } catch (err) {
            throw new Error(err)
        }
    },

    createEvents: async(payload) => {
        return await Event.insertMany(payload)
    },

    updateEvent: async(id, payload) => {
        try {
            await Event.findOneAndUpdate(id, payload)
            return "Event updated successfully"
        } catch (err) {
            throw new Error(err)
        }
    },

    deleteEvent: async(payload) => {
        try {
            await Event.deleteOne(payload)
            return "Event deleted successfully"
        }catch(err) {
            throw new Error (err)
        }
    },

    deleteEvents: async() => {
        return await Event.deleteMany({})
    },
}

module.exports = eventDAL