const mongoose = require('mongoose')
const schema = mongoose.Schema

const sniSchema = new schema({
    sni: {
        type: String
    }    
}, {timestamps: true})

const SNI = mongoose.model('SNI', sniSchema)

module.exports = {SNI}