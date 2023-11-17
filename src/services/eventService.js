const eventDAL = require('../repositories/eventDAL')
const eventDal = require('../repositories/eventDAL')

eventService = {
    getEvents: async() => {

        const eventFounded = eventDAL.getAllEvents()

        if(eventFounded && eventFounded.length>0) {
            return eventFounded
        } else {
            throw new Error("No hay eventos")
        }
        
    },

    createEvent: async(payload) => {
        if (!payload) {
            throw new Error("Se necesitan datos para crear el evento")
        } 
        const event = eventDAL.createEvent(payload)
        if (event) {
            return event
        }
    }
}

module.exports = eventService