const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: String,
    origin: String,
    members: String,
    numAlbums: Number,
    albums: [AlbumSchema]
});

module.exports = mongoose.model('Artist', ArtistSchema);