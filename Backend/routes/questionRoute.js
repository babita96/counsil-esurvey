const express = require('express')
const router = express.Router()

const questionController = require("../controllers/QuestionController")

router.get('/getAllQuestions', questionController.getAllQuestions)
router.post('/setQuestion', questionController.setQuestion)
router.post('/deleteQue', questionController.deleteQue)
router.post('/updateDataSet', questionController.updateDataSet)
router.post('/updateCount',questionController.updateCount)

module.exports = router