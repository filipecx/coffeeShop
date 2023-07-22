const Item = require('../models/Item')

module.exports = {
    getItens: async ( req, res) => {
        try{
           const itensCardapio = await Item.find()
           res.json(itensCardapio)
           console.log(itensCardapio)
        }catch(err){
            console.log(err)
        }
        
    }
}