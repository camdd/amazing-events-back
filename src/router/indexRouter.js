const express = require('express')

const indexRouter = express.Router()
const eventRouter = require('./eventRouter')

indexRouter.use("/events", eventRouter)

module.exports = indexRouter