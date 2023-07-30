const userRouter = require('express').Router();
const User = require('../models/user')

userRouter.get('/users', async(req,res) => {
    try{
        const user = await User.find()
        res.status(200).json(user)
    } catch(err){
        res.send('Error Occured',err)
    }
})

userRouter.post('/users', async (req,res) => {
    const user = new User({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        DOB: req.body.DOB,
        Phone: req.body.Phone,
        Email: req.body.Email,
    })
    try{
        const result = await user.save()
        res.json(result)
    } catch(err){
        res.send("Error Occured",err)
    }
})

module.exports = userRouter;