const mongoose = require('mongoose')
const schema = mongoose.Schema

const residentUserSchema = new schema({
    email: {
        type: String
    },
    fullName: {
        type: String
    },
    dob: {
        type: String
    },
    Street: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    zip: {
        type: String
    },
    password: {
        type: String
    },
    sniNo: {
        type: String
    },
    formSubmitted: {
        type: Boolean
    }
}, {timestamps: true})



const ResidentUser = mongoose.model('ResidentUser', residentUserSchema)

module.exports = {ResidentUser}