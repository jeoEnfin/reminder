const express = require('express');
const router = express.Router();
const {
    getReminders, 
    getReminder,
    createReminder
} = require('../controllers/reminderControllers');


router.route('/').get(getReminders).post(createReminder);
router.route('/:id').get(getReminder);

module.exports = router;