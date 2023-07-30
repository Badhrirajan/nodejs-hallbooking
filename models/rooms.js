const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
    RoomId: {
        type: Number,
        required: true 
    },
    Address: {
        Line1: String,
        Line2: String,
        City: String,
        State: String,
        Pincode: Number
    },
    RoomFetaures: {
        SeatingCapacity: Number,
        IsWifi: Boolean,
        IsAC: Boolean,
        PricePerHour: Number,
        PricePerDay: Number,
    },
    ContactDetails: {
        Primary: String,
        Secondary: String,
        Email: String
    }
})

module.exports = mongoose.model('Room',RoomSchema)