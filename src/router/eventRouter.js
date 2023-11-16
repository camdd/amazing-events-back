const express = require('express')
const eventController = require('../controllers/eventController')
const eventRouter = express.Router()

eventRouter.get( "/", eventController.getEvent ) 

eventRouter.post( "/", eventController.createEvent ) 

eventRouter.put( "/:id", eventController.updateEvent ) 

eventRouter.delete( "/", eventController.deleteEvent )

eventRouter.get( "/:id", eventController.getOneEvent )

module.exports = eventRouter