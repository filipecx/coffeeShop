const express = require('express')
const app = express()
const connectDB = require('./config/database')
const itensRoutes = require('./routes/itens')
const mongoose = require('mongoose')
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

require('dotenv').config({path: './config/.env'}) //isso é pra dotenv funcionar, sla man

connectDB() //isso me conecta ao banco de dados na coleção específica q eu quero

app.use('/', itensRoutes)
app.use('/getItems', itensRoutes)
app.post('/createItem', itensRoutes)
app.use('/createItem', itensRoutes)
app.delete('/deleteItem', itensRoutes)
app.put('/editItem/:id', itensRoutes)

mongoose.connection.once('open', () =>{
    app.listen(process.env.PORT, () => {
        console.log(`Conectado ao servidor na porta ${3001}`)
    })
})
