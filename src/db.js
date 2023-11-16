/* const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://camdambrosio:Jir2maDy8irbSjcA@cluster0.8ort0tx.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log("connected to database successfully")
    })
    .catch((error) => console.log("error connecting to database: " + error)) */


const  mongoose = require('mongoose')

mongoose.connect('mongodb+srv://camdambrosio:Jir2maDy8irbSjcA@cluster0.8ort0tx.mongodb.net/?retryWrites=true&w=majority')
    .then( () => console.log('data base connected')).catch( err => console.log(err) )

