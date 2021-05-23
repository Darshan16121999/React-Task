const express = require('express')
const User = require('../models/User')
const router = express.Router()


router.get('/', async (req, res) => {
    var user = await User.find()
    res.json({ users: user })
})


router.post('/register', async (req, res) => {

    var { firstname, lastname, email, password } = req.body

    User.findOne({ email: email }).then(async (user) => {
        if (user) {
            res.json({ success: false, msg: "user already exist." })
        } else {
            var data = {
                firstName: firstname,
                lastName: lastname,
                email: email,
                password: password
            }
            await User.create(data, (err, user) => {
                if (err) res.json({ success: false, msg: err.message })
                else if (user) res.json({ success: true, msg: "user register successfully", data: user })
                else res.json({ success: false, msg: "internal server error" })
            })
        }
    }).catch(err => {
        console.log(err);
    })

})

router.post('/login', (req, res) => {

    const { email, password } = req.body

    User.findOne({ $and: [{ email: email }, { password: password }] }).then(async (user) => {
        if (user) {
            res.json({ success: true, msg: "hurray you are logged in." })
        } else {
            res.json({ success: false, msg: "login id or password did not matched." })
        }
    }).catch(err => {
        console.log(err)
    })
})

router.post('/delete', (req, res) => {

    const { id } = req.body

    User.findByIdAndDelete(id).then(async user => {
        res.json({ success: true, msg: "User successfully deleted", user: user })
    }).catch(err => {
        res.json({ success: false, msg: err.message })
    })
})




module.exports = router
