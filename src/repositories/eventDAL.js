const Event = require( '../models/Event' )

const eventDAL = {
    getAllEvents: async() => {
        return await Event.find()
    },
    findById : async (id) => {
        return await Event.findById(id)
    },
    createEvent: async(payload)=> {
        try {
            await Event.create(payload)
            return "Event created successfully"
        } catch (err) {
            throw new Error(err)
        }
        
    }
}

module.exports = eventDAL