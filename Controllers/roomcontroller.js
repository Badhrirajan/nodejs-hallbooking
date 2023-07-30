const RoomRouter = require('express').Router();
const Room = require('../models/rooms')

RoomRouter.get('/rooms', async(req,res) => {
    try{
        const room = await Room.find()
        res.status(200).json(room)
    } catch(err){
        res.send('Error Occured',err)
    }
})

RoomRouter.get('/rooms/booked', async(req,res) => {
    try{
        const room = await Room.find({BookingStatus: true})
        res.status(200).json(room)
    } catch(err){
        res.send('Error Occured',err)
    }
})

RoomRouter.get('/rooms/booked/user', async(req,res) => {
    try{
        const room = await Room.aggregate([{
            $match: {BookingStatus: true}},
            {$lookup: {from: "users", localField:'_id',foreignField:'RoomId',as:'BookedCustomer'}}])
        res.status(200).json(room)
    } catch(err){
        res.send('Error Occured',err)
    }
})

RoomRouter.post('/rooms', async (req,res) => {
    const rooms = new Room({
        RoomId: req.body.RoomId,
        Address: req.body.Address,
        RoomFeatures: req.body.RoomFeatures,
        ContactDetails: req.body.ContactDetails,
    })
    try{
        const result = await rooms.save()
        res.json(result)
    } catch(err){
        res.send("Error Occured",err)
    }
})

module.exports = RoomRouter;