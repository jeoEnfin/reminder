const asyncHandler = require('express-async-handler');
const Reminder = require('../models/reminderModel');


//GET /reminders
const getReminders = asyncHandler(async (req, res) => {
    const reminders = await Reminder.find();
    res.status(200).json(reminders);
});

//GET /reminders/:id
const getReminder = asyncHandler(async (req, res) => {
    const reminder = await Reminder.findById(req.params.id);
    res.status(200).json(reminder);
});

//POST /reminders
const createReminder = asyncHandler(async (req, res) => {
    //  console.log(req.body);
    // const {user,description} = req.body;
    // if(!user || !description){
    //     res.status(400);
    //     throw new Error("All fields are required");
    // }
    // const reminder = await Reminder.create({user, description});
    res.status(201).json({message: "Reminder created successfully!"});
});

module.exports = {
    getReminders, 
    getReminder,
    createReminder,
};