const express = require('express')
const router = express.Router()
const itensController = require('../controllers/itensController')

router.get('/', itensController.getItens)

module.exports = router