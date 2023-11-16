const Event = require( '../models/Event' )

const eventController = {
    async getEvent(req, res){

        try{
            const events = await Event.find()
            res.status(200).json( { success:true, events: events } )
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
            const newEvent = await Event.create( req.body )
            res.status(201).json( { success:true, event: newEvent } )
        }catch(err){
            console.log( err )
            res.status(500).json( { success:false, message: "Internal server error" } )
        }
       
    },
    async updateEvent(req, res){
        try{
           const eventUpdated =  await Event.findOneAndUpdate( { _id: req.params.id }, req.body, { new: true } )
           res.status( 200 ).json( { success:true, event: eventUpdated, message: 'update' } )
        }catch(err) {

        }
    },
    deleteEvent( req, res ){
        res.send( "Event deleted successfully" )
    }   
}

module.exports = eventController