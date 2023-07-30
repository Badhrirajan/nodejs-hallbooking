const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    RoomId: mongoose.Schema.Types.ObjectId,
    CustomerId:  mongoose.Schema.Types.ObjectId,
    BookingStartDate: String,
    BookingEndDate: String,
})

module.exports = mongoose.model('Booking',BookingSchema)