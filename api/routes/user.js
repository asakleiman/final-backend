const router = require('express').Router()
const User = require('../models/users')

router.get('/', async(req, res, next) => {
    const status = 200
    const response = await User.find()
    res.json({ status, response })
})

router.get('/students', async(req, res, next) => {
    const status = 200
    const isStudent = { isAdmin: false }
    const response = await User.find(isStudent)
    res.json({ status, response })
})

router.get('/students/:studentID', async(req, res, next) => {
    const status = 200
    const isStudent = { isAdmin: false }
    const response = await User.find(isStudent)
    res.json({ status, response })
})

router.get('/assignments/:assignID', async(req, res, next) => {
    const status = 200
    const assignID = req.params.assignID
    var assignedStudents = []
    const isStudent = { isAdmin: false }
    const allStudents = Array.from(await User.find(isStudent))
    allStudents.forEach(function(student) {
        student.assignments.find(x => x.assignNumber === assignID) ? assignedStudents.push(student) : console.log('skip')
    })
    res.json({ status, assignedStudents })
})



module.exports = router;