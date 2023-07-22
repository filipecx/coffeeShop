const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            //useFindAndModify: false,
        })
        console.log(`Banco de dados conectado: ${conn.connection.host}`)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB