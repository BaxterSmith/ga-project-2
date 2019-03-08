const Album = require('../models/Album.js');
const Artist = require('../models/Artist.js');
const Review = require('../models/Review.js');

const albumController = {
    index: (req, res) => {
        Artist.findById(req.params.artistId).then(artist => {
            console.log('artist: ', artist)
            console.log(req.params.artistId)
            let artistId = req.params.artistId
            Album.find().then(albums => {
                res.render('index', {albums, artist, artistId})
            })
        });
    },
    new: (req, res) => {
        res.render('new');
    },
    create: (req, res) => {
        // first create the artist
        Artist.create({
            name: req.body.artistName
        }).then(artist => {
            Album.create(req.body).then(album => {
                album.artist.push(artist)
                album.save()
                res.redirect('/')
            });
        })
    },
    show: (req, res) => {
        let albumId = req.params.albumId;
        Album.findById(albumId).then(album => {
            res.render('show', {album, albumId})
        });
    },
    edit: (req, res) => {
        Album.findById(req.params.albumId).then(album => {
            res.render('edit', {album})
        });
    },
    update: (req, res) => {
        Album.findByIdAndUpdate(req.params.albumId, req.body, {new: true}).then(() => {
            res.redirect(`/${req.params.albumId}`)
        });
    },
    delete: (req, res) => {
        Album.findByIdAndDelete(req.params.albumId).then(() => {
            res.redirect('/')
        });
    }
};

module.exports = albumController;