const express = require('express')
const router = express.Router()

const residentUserController = require("../controllers/ResidentUserController")
const questionController = require("../controllers/QuestionController")

router.post('/register', residentUserController.register)
router.post('/login', residentUserController.login)

router.post('/getAllQuestions', questionController.getAllQuestions)
router.post('/setQuestion', questionController.setQuestion)


router.get('/', residentUserController.index)
router.post('/show', residentUserController.show)
router.post('/store', residentUserController.store)
router.post('/update', residentUserController.update)
router.post('/delete', residentUserController.deleteId)

module.exports = router