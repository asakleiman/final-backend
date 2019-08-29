const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const config = require('../nodemon.json')
const User = require('../api/models/users')

const reset = async() => {
    mongoose.connect(config.env.MONGO_DB_CONNECTION, { useNewUrlParser: true })
        // Careful with .remove() -- it sends a command directly to the database
        // and skips any mongoose validations
    await User.deleteMany() // Deletes all records
    const seedUsers = [{
            name: 'Steve Dave',
            username: 'steve.dave@email.com',
            password: bcrypt.hashSync('password', 10),
            studentId: '001',
            isAdmin: false,
            assignments: [{
                    assignTitle: 'Cakes',
                    assignNumber: '1',
                    grade: '70'
                },
                {
                    assignTitle: 'Pencils Essay',
                    assignNumber: '2',
                    grade: '80'
                }
            ]

        },
        {
            name: 'Elio Tumwait',
            username: 'student.user@emial.com',
            password: bcrypt.hashSync('password', 10),
            studentId: '002',
            isAdmin: false,
            assignments: [{
                assignTitle: 'Cakes',
                assignNumber: '2',
                grade: '90'
            }]

        },
        {
            name: 'Quentin Coldwater',
            username: 'quentin.coldwater@email.com',
            password: bcrypt.hashSync('password', 10),
            studentId: 'F01',
            isAdmin: true,

        }
    ]
    return User.insertMany(seedUsers)



}

reset().catch(console.error).then((response) => {
    console.log(`Seeds successful! ${response.length} records created.`)
    return mongoose.disconnect()
})