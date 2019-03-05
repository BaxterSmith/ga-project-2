const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    reviewer: String,
    reviewText: String,
    rating: Number,
    album: [AlbumSchema]
});