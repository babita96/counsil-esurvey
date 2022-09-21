const mongoose = require('mongoose')
const schema = mongoose.Schema


const questionSchema = new schema({
    id: {
        type: String
    },
    Text: {
        type: String
    },
    answers : { type : Array , "default" : [] },
    count: {
        type: Number
    }
    
}, {timestamps: true})



const question = mongoose.model('Question', questionSchema)


module.exports = {question}