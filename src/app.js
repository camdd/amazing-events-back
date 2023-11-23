const express = require('express');
require("dotenv").config()
require('./db.js')

const swaggerUi = require("swagger-ui-express")
const swaggerDocumentConfig = require("../swagger-openapi.json")

const indexRouter = require('./router/indexRouter.js')

const app = express();
app.use( express.json() )
app.use( "/api", indexRouter )

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocumentConfig))

app.listen(3000, ()=> {
    console.log('listening on port 3000')
})
