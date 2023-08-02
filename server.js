const express = require('express');
const connectDb = require('./config/dbConnection');

//connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use('/api/reminders', require('./routes/reminderRoutes'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});