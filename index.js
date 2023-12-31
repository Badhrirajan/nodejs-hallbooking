const express = require('express')
const app = express();
const userRouter = require('./Controllers/usercontroller')
const RoomRouter = require('./Controllers/roomcontroller')
const BookingRouter = require('./Controllers/bookingcontroller')
const mongoose = require('mongoose')
const URL = 'mongodb+srv://Badhrirajan:Badhri2211@cluster0.gxfd2vs.mongodb.net/HallBooking';

const PORT = 4000

app.listen(PORT, '0.0.0.0', (err) => {
    if(err) throw err
    console.log(`SERVER STARTED IN THE PORT ${PORT}`)
})

async function Connect(){
    try{
        await mongoose.connect(URL)
        console.log("Database Connection is Success")
    }
    catch(error){
        console.log("Error in connection")
    }
}

app.get('/',(req,res) => {
    return res.status(200).json({
        message: 'Welcome to HallBooking Api!!',
      });
})

Connect();

app.use(express.json())
app.use('/', userRouter)
app.use('/',RoomRouter)
app.use('/',BookingRouter)