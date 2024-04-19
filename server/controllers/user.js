const User = require('../models/user')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const generateToken = require('../config/verifyToken')
const { body, validationResult } = require('express-validator')

const validateUser = [
  body('name')
    .isLength({ min: 4 })
    .withMessage('Username must be at least 4 characters'),
  body('surname')
    .isAlphanumeric()
    .withMessage(
      'Username contains non alphanumeric characters - not allowed.'
    ),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Email does not appear to be valid'),
  body('password')
    .not()
    .isEmpty()
    .isLength({ min: 4, max: 9 })
    .withMessage('Password is required and must be between 4 to 9 characters')
]

const registerUser = asyncHandler(async (req, res) => {
  const { name, surname, email, password } = req.body

  // Validate user input
  await Promise.all(validateUser.map(validation => validation.run(req)))

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }

  // Check if user exists
  const existingUser = await User.findOne({ email })
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' })
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10)

  // Create user
  const newUser = await User.create({
    name,
    surname,
    email,
    password: hashedPassword
  })

  if (newUser) {
    return res.status(201).json({
      message: 'User successfully registered'
    })
  } else {
    return res.status(400).json({ error: 'Invalid user data' })
  }
})

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check for user email
  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    return res.json({
      _id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    return res.status(400).json({ error: 'Invalid credentials' })
  }
})

module.exports = { registerUser, loginUser }
