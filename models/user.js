const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true 
    },
    LastName: String,
    DOB: String,
    Phone: {
        type: String,
        required: true 
    },
    Email: {
        type: String,
        required: true 
    },
})

module.exports = mongoose.model('User',UserSchema)