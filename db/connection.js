require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/vinyl_db').then(() => {
    console.log("MongoDB is connected!");
})

module.exports = mongoose;