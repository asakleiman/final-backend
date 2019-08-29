const mongoose = require('mongoose')



const schema = new mongoose.Schema({
    assignTitle: {
        type: String,
        required: true
    },
    assignNumber: {
        type: String,
        required: true
    },
    grade: {
        type: String,
    }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = schema