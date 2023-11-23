const express = require('express')
const eventController = require('../controllers/eventController')
const { verifyData, verifyId } = require('../middlewares/verifications')
const eventRouter = express.Router()


eventRouter.get( "/", eventController.getEvents ) 

eventRouter.get( "/:id", verifyId, eventController.getOneEvent )

eventRouter.post( "/", verifyData, eventController.createEvent ) 

eventRouter.post("/all", eventController.createEvents)

eventRouter.put( "/:id", verifyId, eventController.updateEvent ) 

eventRouter.delete( "/:id", verifyId, eventController.deleteEvent )

eventRouter.delete( "/", eventController.deleteEvents )


module.exports = eventRouter