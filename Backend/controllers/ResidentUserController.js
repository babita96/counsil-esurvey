const ResidentUser = require('../models/ResidentUser')
const bcrpt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//Registration
const register = (req, res, next) => {
    bcrpt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }
        let residentUser = new ResidentUser.ResidentUser({
            email: req.body.email,
            fullName: req.body.fullName,
            dob: req.body.dob,
            Street: req.body.Street,
            city: req.body.city,
            country: req.body.country,
            zip: req.body.zip,
            password: hashedPass,
            sniNo: req.body.sniNo,
            formSubmitted: req.body.formSubmitted
        })
        residentUser.save()
            .then(response => {
                res.json({
                    message: "Resident user successfully"
                })
            })
            .catch(error => {
                res.json({
                    message: 'An error occured while adding the user!'
                })
            })
    })
}

// Check and Login
const login = (req, res, next) => {
    var userId = req.body.email
    var password = req.body.password

    ResidentUser.ResidentUser.findOne({ email: userId })
        .then(response => {
            if (response) {
                bcrpt.compare(password, response.password, function (err, result) {
                    console.log(result)
                    if (err) {
                        res.json({ error: err })
                    }
                    if (result) {
                        let token = jwt.sign({ name: response.name }, 'verysecretvalue', { expiresIn: '1h' })
                        if (userId == "admin@shangrila.gov.un") {
                            res.json({
                                message: 'Counsil login Successful', token: token
                            })
                        } else {
                            res.json({
                                message: 'Login Successful', token: token
                            })
                        }
                    } else {
                        res.json({ message: 'Password is incorrect' })
                    }
                })
            } else {
                res.json({ message: "No user found" })
            }
        })
        .catch(error => {
            res.json({ message: 'An error occured while adding the user!' })
        })
}

//show list of ResidentUser
const index = (req, res, next) => {
    ResidentUser.ResidentUser.find()
        .then(response => {
            res.json({
                response
            })
        }).catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
}

//show single residentuserid
const show = (req, res, next) => {
    let residentUserId = req.body.residentUserId
    ResidentUser.findById(residentUserId)
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
}

// Add resident
const store = (req, res, next) => {
    let residenUser = new ResidentUser.ResidentUser({
        email: req.body.email,
        fullName: req.body.fullName,
        dob: req.body.dob,
        Street: req.body.Street,
        city: req.body.city,
        country: req.body.country,
        zip: req.body.zip,
        password: req.body.password,
        sniNo: req.body.sniNo
    })
    residenUser.save()
        .then(response => {
            res.json({
                message: "Added successfully"
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
}

//update residentUser
const update = (req, res, next) => {
    let id = req.body.id
    let updateData = {
        email: req.body.email,
        fullName: req.body.fullName,
        dob: req.body.dob,
        Street: req.body.Street,
        city: req.body.city,
        country: req.body.country,
        zip: req.body.zip,
        password: req.body.password,
        sniNo: req.body.sniNo,
        formSubmitted: req.body.formSubmitted
    }

    ResidentUser.ResidentUser.findByIdAndUpdate(id, { $set: updateData })
        .then(() => {
            res.json({
                message: "Resident updated successfully"
            })
        })
        .catch(error => {
            res.json({
                message: 'Error occured!'
            })
        })
}

//Delete residentUser
const deleteId = (req, res, next) => {
    let residentUserId = req.body.residentUserId
    ResidentUser.ResidentUser.findByIdAndRemove(residentUserId)
        .then(() => {
            res.json({
                message: "Resident user deleted successfully"
            })
        })
        .catch(error => {
            res.json({
                message: 'Error occured!'
            })
        })
}


module.exports = {
    register, login, index, show, store, update, deleteId
}