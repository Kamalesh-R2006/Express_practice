const express = require('express')
const User = require('./userModel')
const checkRole = require('./authMiddleware')

const router = express.Router()

router.post('/', checkRole(['Admin', 'Member']), (req, res) => {
    const user = new User(req.body)
    user.save().then(savedUser => res.status(201).json(savedUser))
})

router.get('/', checkRole(['Admin', 'Member', 'Guest']), (req, res) => {
    User.find().then(users => res.json(users))
})

router.delete('/:id', checkRole(['Admin']), (req, res) => {
    User.findByIdAndDelete(req.params.id).then(result => {
        if (!result) return res.status(404).send('User not found')
        res.send('User deleted')
    })
})

module.exports = router
