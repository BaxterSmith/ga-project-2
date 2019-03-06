const Artist = require('../models/Artist.js');

const artistController = {
    index: (req, res) => {
        Artist.find().then(artists => {
            res.render('index', {artists})
        });
    },
    new: (req, res) => {
        res.render('new');
    },
    create: (req, res) => {
        Artist.create(req.body).then(artist => {
            res.redirect('/')
        });
    },
    show: (req, res) => {
        let artistId = req.params;
        Artist.findById(artistId).then(artist => {
            res.render('show', {artist, artistId})
        });
    },
    delete: (req, res) => {
        Artist.findByIdAndDelete(req.params.artistId).then(() => {
            res.redirect('/')
        });
    }
};