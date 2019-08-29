const mongoose = require('mongoose')
const Assignments = require('./assignments')

const schema = mongoose.Schema({
    name: String,
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    studentId: {
        type: String,
        required: true
    },
    isAdmin: Boolean,
    assignments: [Assignments]
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = mongoose.model('User', schema)