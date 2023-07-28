const Item = require('../models/Item')
const cloudinary = require('../middleware/cloudinary')

module.exports = {
    getItens: async ( req, res) => {
        try{
           const itensCardapio = await Item.find()
           res.json(itensCardapio)
        }catch(err){
            console.log(err)
        }
        
    },

    createItem: async (req, res) => {     
        try{
            
            const resultImg = await cloudinary.uploader.upload(req.file.path)     
            await Item.create({nomeDoItem: req.body.nomeDoItem, descricaoItem: req.body.descricaoItem, precoItem: req.body.precoItem, imagem: resultImg.secure_url, cloudinaryId: resultImg.public_id })         
        }
        catch(err){
            console.log(err)
        }
    },
    updateItem: async (req, res) => {
      
        try{
           await Item.findByIdAndUpdate(req.params.id, req.body)
        }catch(e){
            console.log(e)
        }
    },

    deleteItem: async (req, res) => {
        try{
            await Item.findByIdAndDelete({_id:req.query.id})//quando usando express, o query é o q pega o conteudo do axios
        }catch(e){
            console.log(e)
        }

    }
}