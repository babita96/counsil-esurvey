const SNI = require('../models/SNI')

const getAllSNINumber = (req, res, next) => {
    SNI.SNI.find()
    .then(response => {
        res.json({
            response
        })
    }).catch(error => {
        res.json({ message: 'An error occured!' })
    })
}

const saveSNINumber =  (req, res, next) => {
    let sniData = new SNI.SNI({
        sni: req.body.sni,
    })
    sniData.save()
    .then(response => {
        res.json({
            message: "Added SNI number successfully"
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured while saving the SNI number!'
        })
    })
}

module.exports = {
    getAllSNINumber,saveSNINumber
}