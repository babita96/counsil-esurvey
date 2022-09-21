const express = require('express')
const router = express.Router()

const sniController = require("../controllers/SNIController")

router.get('/getAllSNINumber', sniController.getAllSNINumber)
router.post('/saveSNINumber', sniController.saveSNINumber)

module.exports = router