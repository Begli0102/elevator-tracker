const User = require('../models/User')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const generateToken = require('../config/verifyToken')
const { body, validationResult } = require('express-validator')
const { json } = require('express')

const validateUser = [
  body('name', 'Username must be at least 4 characters').isLength({ min: 4 }),
  body(
    'surname',
    'Username contains non alphanumeric characters - not allowed.'
  ).isAlphanumeric(),
  body('email', 'Email does not appear to be valid')
    .isEmail()
    .normalizeEmail(),
  body('password', 'Password is required')
    .not()
    .isEmpty()
    .isLength({ min: 4, max: 9 })
]

const registerUser = asyncHandler(async (req, res) => {
  const { name, surname, email, password } = req.body

  if (!name || !surname || !email || !password) {
    res.status(400).json({ error: 'Please add all fields' })
    return
  }

  // Validate user input
  validateUser.forEach(validation => validation.run(req))

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
    return
  }

  // Check if user exists
  let user = await User.findOne({ email })
  if (user) {
    res.status(400).json({ error: 'User already exists' })
    return
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  user = await User.create({
    name,
    surname,
    email,
    password: hashedPassword
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400).json({ error: 'Invalid user data' })
  }
})

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check for user email
  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400).json({ error: 'Invalid credentials' })
  }
})

module.exports = { registerUser, loginUser }
