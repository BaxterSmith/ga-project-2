const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    reviewer: String,
    rating: Number,
    reviewText: String,
    album: []
});

module.exports = mongoose.model('Review', ReviewSchema);