const mongoose = require('mongoose')
const Users = require('./userListing')



const schema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    courseId: {
        type: String,
        required: true
    },
    courseTeacher: [Users],
    courseStudents: [Users]
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = mongoose.model('Course', schema)