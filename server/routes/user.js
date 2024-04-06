const router = require('express').Router()
const { registerUser, loginUser } = require('../controllers/users')

//REGISTER
router.post('/signup', registerUser)

//LOGIN
router.post('/signin', loginUser)

module.exports = router
