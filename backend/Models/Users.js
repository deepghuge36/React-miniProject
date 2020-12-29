const mongoose = require('mongoose');
const UserSchema = {
  name: {
    type: 'string',
    required: true
  },
  email: {
    type: 'string',
    required: true
  },
  password: {
    type: 'string',
    required: true
  },
  date: {
    type: 'Date',
    default: Date.now,
  },
}

module.exports = mongoose.model('users', UserSchema);