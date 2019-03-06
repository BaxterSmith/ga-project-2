const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    artist: [ArtistSchema],
    title: String,
    genre: String,
    length: String,
    numSongs: Number,
    releaseYear: Number,
    reviews: [ReviewSchema]
});

module.exports = mongoose.model('Album', AlbumSchema);