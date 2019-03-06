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
    releaseYear: 1985,
    imgLink: "https://i.imgur.com/S2e6IkG.jpg"
});

const sailAway = new Album({
    artist: [randyNewman],
    title: "Sail Away",
    genre: "soft rock/pop",
    length: "LP",
    numSongs: 12,
    releaseYear: 1972,
    imgLink: "https://i.imgur.com/zJL82tO.jpg"
});

const glassWeb = new Album({
    artist: [secretCinema],
    title: "Glass Web",
    genre: "new wave",
    length: "LP",
    numSongs: 10,
    releaseYear: 1988,
    imgLink: "https://i.imgur.com/R6EewGl.jpg"
});

const urgesUrgent = new Album({
    artist: [urge],
    title: "Urges Get Urgent",
    genre: "new wave",
    length: "mini-album",
    numSongs: 6,
    releaseYear: 1985,
    imgLink: "https://i.imgur.com/bZ8WPAB.jpg"
});

const bermudaReview = new Review({
    reviewer: "Baxter Smith",
    rating: 5,
    reviewText: "Excellent vocals and musicianship.",
    album: [bermudaEp]
});

const sailAwayReview = new Review({
    reviewer: "Mary Johnston",
    rating: 4,
    reviewText: "A pleasing, soothing album, though I do prefer Good Old Boys.",
    album: [sailAway]
});

const glassWebReview = new Review({
    reviewer: "Scott Doyle",
    rating: 5,
    reviewText: "Fantastic album from start to finish. Texas' answer to Duran Duran.",
    album: [glassWeb]
});

const urgesUrgentReview = new Review({
    reviewer: "Bob Carrara",
    rating: 5,
    reviewText: "This Philly-based band packs quite a punch.",
    album: [urgesUrgent]
});

Album.remove({})
  .then(() => Album.create([bermudaEp, sailAway, glassWeb, urgesUrgent]))
  .then(() => {
    Review.create([bermudaReview, sailAwayReview, glassWebReview, urgesUrgentReview])
    console.log("seeded successfully");
    mongoose.connection.close();
  })
  .catch(err => console.log(err, "error!"));

