const eventDAL = require('../repositories/eventDAL')

const eventService = {
    getEvents: async() => {
        const eventsFound = await eventDAL.getAllEvents()
        if(eventsFound && eventsFound.length>0) {
            return eventsFound
        } else {
            throw new Error("No hay eventos")
        }
    },

    getOneEvent: async(payload) => {
        if (!payload) {
            throw new Error("Se necesitan datos para obtener el evento")
        } 
        const event = await eventDAL.getOneEvent(payload)
        if (event) {
            return event
        }
    },

    createEvent: async(payload) => {
        if (!payload) {
            throw new Error("Se necesitan datos para crear el evento")
        } 
        const event = await eventDAL.createEvent(payload)
        if (event) {
            return event
        }
    },

    createEvents: async(payload) => {
        const eventsCreated = await eventDAL.createEvents(payload)
        if(eventsCreated && eventsCreated.length>0) {
            return eventsCreated
        } else {
            throw new Error("No hay eventos")
        }  
    },

    updateEvent: async(payload) => {
        if (!payload) {
            throw new Error("Se necesitan datos para editar el evento")
        } 
        const event = await eventDAL.updateEvent(payload)
        if (event) {
            return event
        }
    },
    
    deleteEvent: async(payload) => {
        if (!payload) {
            throw new Error("Se necesitan datos para eliminar el evento")
        } 
        const event = await eventDAL.deleteEvent(payload)
        if (event) {
            return event
        }
    },

    deleteEvents: async(payload) => {
        const deletedEvents = await eventDAL.deleteEvents(payload)
        if(deletedEvents && deletedEvents.length>0) {
            return deletedEvents
        } else {
            throw new Error("No hay eventos para borrar")
        }  
    },



    
}

module.exports = eventService