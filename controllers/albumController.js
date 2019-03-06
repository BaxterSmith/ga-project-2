const Album = require('../models/Album.js');

const albumController = {
    index: (req, res) => {
        Album.find().then(albums => {
            res.render('index', {albums})
        });
    },
    new: (req, res) => {
        res.render('new');
    },
    create: (req, res) => {
        Album.create(req.body).then(album => {
            res.redirect('/')
        });
    },
    show: (req, res) => {
        let albumId = req.params;
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