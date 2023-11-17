/* const Event = require( '../models/Event' ) */
const eventService = require("../services/eventService")

const eventController = {
    async getEvents(req, res){
        try{
            const eventFounded = eventService.getEvents()
            if (eventFounded>0) {
                res.status(200).json(eventFounded)
            } else {
                res.send("events not found")
            }
            
        }catch(err){
            res.status(500).json( { success:false, message: "Internal server error" } )
        }
    },

    async getOneEvent( req, res ){
        try{
            const event = await Event.findById( req.params.id )
            res.status( 200 ).json( { success:true, event: event } )
        }catch(err){
            res.status( 500 ).json( { success:false, message: "Internal server error" } )
        }
    },

    async createEvent(req, res){
        try{
            const payload = req.body
            const eventCreated = eventService.createEvent(payload)

            if (eventCreated) {
                res.status(201).json({message: "Event created"})
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
            console.log(req.body.events)
            const newEvents = await Event.insertMany( req.body.events )

            res.status(201).json({ success: true, message: "Eventos creados", events: newEvents });
        }catch(err){
            console.log( err )
            res.status(500).json( { success:false, message: "Internal server error: " + err.message } )
        }
    },

    async updateEvent(req, res){
        try{
           const eventUpdated =  await Event.findOneAndUpdate( { _id: req.params.id }, req.body, { new: true } )
           res.status( 200 ).json( { success:true, event: eventUpdated, message: 'Event updated successfully' } )
        }catch(err) {
        }
    },

    async deleteEvent( req, res ){
        try{
            const eventDeleted = await Event.deleteOne( { _id: req.params.id }, req.body, { new: true } )
            res.status( 200 ).json( { success:true, event: eventDeleted, message: 'Event deleted successfully' } )
        }catch(err){
            res.status( 500 ).json( { success:false, message: "Internal server error" } )
        }
    },

    async deleteEvents(req, res) {
        try{
            const deletedEvents = await Event.deleteMany( req.body )
            res.status(201).json({ success: true, message: "Eventos borrados", events: deletedEvents });
        }catch(err){
            console.log( err )
            res.status(500).json( { success:false, message: "Internal server error" } )
        }
    },
}

module.exports = eventController