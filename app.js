const { CLIENT_BASE_URL, NODE_ENV, PORT } = process.env
const express = require('express')
const app = express()
const cors = require('cors')

// Database Connection
require('./db/connection')()

//Middleware goes here
if (NODE_ENV === 'development') app.use(require('morgan')('dev'))
app.use(require('body-parser').json())

//Routes go here
app.use('/api/users', require('./api/routes/user'))
app.use('/api/courses', require('./api/routes/courses'))

//404 goes here
app.use((req, res, next) => {
    const error = new Error(`Could not ${req.method} ${req.path}`)
    error.status = 404
    next(error)
})

const listener = () => console.log(`Listening on Port ${PORT}`)
app.listen(PORT, listener)