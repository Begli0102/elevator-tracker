const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    surname: { type: String, required: true, trim: true },
    email: {
      type: String,
      reqired: true,
      trim: true
    },
    password: { type: String, required: true, trim: true },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },

  { timestamps: true }
)

// Create and export the model
const User = mongoose.model('User', UserSchema)
module.exports = User
