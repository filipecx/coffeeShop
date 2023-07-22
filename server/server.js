const express = require('express')
const app = express()
const connectDB = require('./config/database')
const itensRoutes = require('./routes/itens')

const cors = require("cors");

app.use(express.json());
app.use(cors());

require('dotenv').config({path: './config/.env'}) //isso é pra dotenv funcionar, sla man

connectDB() //isso me conecta ao banco de dados na coleção específica q eu quero

app.use('/getItems', itensRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Conectado ao servidor na porta ${3001}`)
})