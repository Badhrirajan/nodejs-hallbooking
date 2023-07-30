const BookingRouter = require('express').Router();
const Booking = require('../models/booking')

BookingRouter.get('/booking', async(req,res) => {
    try{
        const booking = await Booking.find()
        res.status(200).json(booking)
    } catch(err){
        res.send('Error Occured',err)
    }
})

BookingRouter.post('/booking', async (req,res) => {
    const booking = new Booking({
        RoomId: req.body.RoomId,
        CustomerId: req.body.CustomerId,
        BookingStartDate: req.body.BookingStartDate,
        BookingEndDate: req.body.BookingEndDate
    })
    try{
        const result = await booking.save()
        res.json(result)
    } catch(err){
        res.send("Error Occured",err)
    }
})

module.exports = BookingRouter;