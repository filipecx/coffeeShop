const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    nomeDoItem: {
        type: String,
        required: true
    },
    descricaoItem: {
        type: String,
        required: true
    },
    precoItem: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    },
    cloudinaryId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('coffeeShop', ItemSchema, 'itensCardapio')