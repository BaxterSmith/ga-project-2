const mongoose = require('./connection.js');
const Artist = require('../models/Artist.js');
const Album = require('../models/Album.js');
const Review = require('../models/Review.js');

const bermuda = new Artist({
    name: "Bermuda",
    origin: "Canada",
    members: "Donna Gagnon (lead vocals), Rob Neumann (drums), Ronnie Collopy (bass), Bob Hansen (guitar), Steve Weakes (keyboards)",
    numAlbums: 1
});

const randyNewman = new Artist({
    name: "Randy Newman",
    origin: "USA",
    members: "Randy Newman (lead vocals, piano)",
    numAlbums: 11
});

const secretCinema = new Artist({
    name: "Secret Cinema",
    origin: "USA",
    members: "Lex Orr (lead vocals), Stan LePard (keyboards, drum programming, flute), Hamilton Altstatt (guitar)",
    numAlbums: 2
});

const urge = new Artist({
    name: "The Urge",
    origin: "USA",
    members: "Donna Pashko (lead vocals), David Ross (drums), Guy Zimmaro (bass), Dan Troiani (guitar), Joe Paschall (keyboards)",
    numAlbums: 1
});

const bermudaEp = new Album({
    artist: [bermuda],
    title: "Who Needs The Night",
    genre: "AOR",
    length: "EP",
    numSongs: 5,
    releaseYear: 1985
});

const sailAway = new Album({
    artist: [randyNewman],
    title: "Sail Away",
    genre: "soft rock/pop",
    length: "LP",
    numSongs: 12,
    releaseYear: 1972
});

const glassWeb = new Album({
    artist: [secretCinema],
    title: "Glass Web",
    genre: "new wave",
    length: "LP",
    numSongs: 10,
    releaseYear: 1988
});

const urgesUrgent = new Album({
    artist: [urge],
    title: "Urges Get Urgent",
    genre: "new wave",
    length: "mini-album",
    numSongs: 6,
    releaseYear: 1985
});