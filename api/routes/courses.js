const router = require('express').Router()
const Course = require('../models/courseListing')


router.get('/', async(req, res, next) => {
    const status = 200
    const response = await Course.find(req.query)
    res.json({ status, response })
})



module.exports = router