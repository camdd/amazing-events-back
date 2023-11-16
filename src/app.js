const express = require('express');
require('./db.js')
const indexRouter = require('./router/indexRouter.js')

const app = express();
app.use( express.json() )
app.use( "/api", indexRouter )


app.listen(3000, ()=> {
    console.log('listening on port 3000')
})
