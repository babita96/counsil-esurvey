const Question = require('../models/Question')

//1) All Counsil officer operations
//Show all Question
const getAllQuestions = (req, res, next) => {
    Question.question.find()
        .then(Questions => {
            res.json({
                "consulations" : {
                    Questions
                }
            })
        }).catch(error => {
            res.json({ message: 'An error occured!' })
        })
}

//Set question
const setQuestion =  (req, res, next) => {
    let question = new Question.question({
        id: req.body.id,
        Text: req.body.Text,
        answers: req.body.answers,
        count: req.body.count
    })
    question.save()
    .then(response => {
        res.json({
            message: "Added question set successfully"
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured while saving the question!'
        })
    })
}

//Delete question
const deleteQue = (req, res, next) => {
    let questionId = req.body.id
    Question.question.findByIdAndRemove(questionId)
        .then(() => {
            res.json({
                message: "Question deleted successfully"
            })
        })
        .catch(error => {
            res.json({
                message: 'Error occured!'
            })
        })
}

// 2) Update questions and answer operations
const updateDataSet = (req, res, next) => {
    let questionId = req.body.id
    let updateData = {
        id: req.body.id,
        Text: req.body.Text,
        answers: req.body.answers,
        count: req.body.count
    }
    console.log(updateData)
    Question.question.findByIdAndUpdate(questionId, { $set: updateData })
        .then(() => {
            res.json({
                message: "Question set updated successfully"
            })
        })
        .catch(error => {
            res.json({
                message: 'Error occured while updating!'
            })
        })
}

//update count
const updateCount = (req, res, next) => {
    let questionId = req.body.id
    let updateData = {
        answers: req.body.answers
    }
    Question.question.findByIdAndUpdate(questionId, { $set: updateData })
        .then(() => {
            res.json({
                message: "Count updated successfully"
            })
        })
        .catch(error => {
            res.json({
                message: 'Error occured while updating!'
            })
        })
}


module.exports = {
    getAllQuestions,setQuestion,deleteQue,updateDataSet,updateCount
}