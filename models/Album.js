const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    artist: [],
    title: String,
    genre: String,
    length: String,
    numSongs: Number,
    releaseYear: Number,
    imgLink: String
});

module.exports = mongoose.model('Album', AlbumSchema);