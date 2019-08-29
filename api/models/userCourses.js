const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    classID: String,
    gradeLocal: String
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = schema