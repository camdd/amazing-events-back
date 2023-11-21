const express = require('express')
const eventController = require('../controllers/eventController')
const eventRouter = express.Router()

eventRouter.get( "/", eventController.getEvents ) 

eventRouter.get( "/:id", eventController.getOneEvent )

eventRouter.post( "/", eventController.createEvent ) 

eventRouter.post("/all", eventController.createEvents)

eventRouter.put( "/:id", eventController.updateEvent ) 

eventRouter.delete( "/:id", eventController.deleteEvent )

eventRouter.delete( "/", eventController.deleteEvents )


module.exports = eventRouter