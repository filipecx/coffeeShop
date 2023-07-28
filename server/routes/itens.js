const express = require('express')
const router = express.Router()
const itensController = require('../controllers/itensController')
const upload = require("../middleware/multer");

router.get('/', itensController.getItens)

router.post('/createItem', upload.single("file"), itensController.createItem)

router.put('/editItem/:id', itensController.updateItem)

router.delete('/deleteItem', itensController.deleteItem)

module.exports = router