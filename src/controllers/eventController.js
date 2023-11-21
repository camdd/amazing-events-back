/* const Event = require( '../models/Event' ) */
const eventService = require("../services/eventService")

const eventController = {
    async getEvents(req, res){
        try{
            const eventsFound = await eventService.getEvents(req.body)
                res.status(200).json({event: eventsFound}) 
        }catch(err){
            res.status(500).json( { success:false, message: "Internal server error" } )
        }
    },

    async getOneEvent( req, res ){
        try{
            const payload = req.body
            const eventFound = await eventService.getOneEvent(payload)
            if (eventFound) {
                res.status( 200 ).json( {event: eventFound} )
            } else {
                res.send("Error getting event")
            }
            
        }catch(err){
            res.status( 500 ).json( { success:false, message: "Internal server error" } )
        }
    },

    async createEvent(req, res){
        try{
            const payload = req.body
            const eventCreated = await eventService.createEvent(payload)

            if (eventCreated) {
                res.status(201).json({event: eventCreated})
            } else {
                res.send("Error creating event")
            }

        }catch(err){
            console.log( err )
            res.status(500).json( { success:false, message: "Internal server error" } )
        }
    },

    async createEvents(req, res) {
        try{
            const payload = req.body.events
            const eventsCreated = await eventService.createEvents(payload)
            if (eventsCreated.length>0 ) {
                res.status(201).json({ events: eventsCreated });
            } else {
                res.send("Error creating events")
            }

        }catch(err){
            console.log( err )
            res.status(500).json( { success:false, message: "Internal server error: " + err.message } )
        }
    },

    async updateEvent(req, res){
        try{
            const payload = req.body
            const id = req.params.id
            const eventUpdated = await eventService.updateEvent(id,payload)
            if (eventUpdated) {
                res.status( 200 ).json( { events: eventUpdated } )
            } else {
                res.send("Error updating event")
            }
            
            
            /* const eventUpdated =  await Event.findOneAndUpdate( { _id: req.params.id }, req.body, { new: true } ) */
           
        }catch(err) {
        }
    },

    async deleteEvent( req, res ){
        try{
            const payload = req.body 
            const eventDeleted = await eventService.deleteEvent(payload)
            if (eventDeleted) {
                res.status( 200 ).json( { event: eventDeleted, message: 'Event deleted successfully' } ) 
            } else {
                res.send("Error deleting event")
            }
            
            
            /* const eventDeleted = await Event.deleteOne( { _id: req.params.id }, req.body, { new: true } )
            */
        }catch(err){
            res.status( 500 ).json( { success:false, message: "Internal server error" } )
        }
    },

    async deleteEvents(req, res) {
        try{
            const payload = req.body.events //o req.body?
            const deletedEvents = await eventService.deleteEvents(payload)
                res.status(201).json({ success: true, message: "Eventos borrados", events: deletedEvents });
        }catch(err){
            console.log( err )
            res.status(500).json( { success:false, message: "Internal server error" } )
        }
    },
}

module.exports = eventController