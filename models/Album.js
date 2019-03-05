const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    artist: String,
    title: String,
    genre: String,
    length: String,
    numSongs: Number,
    releaseYear: Number,
    members: String,
    reviews: [ReviewSchema]
});

const ArtistSchema = new Schema({
    name: String,
    origin: String,
    members: String,
    numAlbums: Number,
    albums: [AlbumSchema]
});

const ReviewSchema = new Schema({
    reviewer: String,
    reviewText: String,
    rating: Number,
    album: [AlbumSchema]
});

module.exports = mongoose.model('Album', AlbumSchema);