const mongoose = require('mongoose')

//Add reference to User._id
const schema = new mongoose.Schema({
    username: String,
    studentId: String
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = schema