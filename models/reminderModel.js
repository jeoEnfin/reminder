const mongoose = require('mongoose');

const reminderSchema = mongoose.Schema({
    user: {
        type : String,
        required : [true, 'Name is required'], 
    },
    description: {
        type : String,
        required : [true, 'Description is required'],
    }
});

module.exports = mongoose.model('Reminder', reminderSchema);