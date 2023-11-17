const  mongoose = require('mongoose')
const passwordDb = process.env.PASSWORD_DB_CONNECTION

mongoose.connect(`mongodb+srv://camdambrosio:${passwordDb}@cluster0.8ort0tx.mongodb.net/?retryWrites=true&w=majority`)
    .then( () => console.log('data base connected')).catch( err => console.log(err) )

