const express = require('express')
const eventController = require('../controllers/eventController')
const eventRouter = express.Router()

eventRouter.get( "/", eventController.getEvent ) 

eventRouter.post( "/", eventController.createEvent ) 

eventRouter.put( "/:id", eventController.updateEvent ) 

eventRouter.delete( "/:id", eventController.deleteEvent )

eventRouter.get( "/:id", eventController.getOneEvent )

eventRouter.post("/", eventController.createEvents);


module.exports = eventRouter