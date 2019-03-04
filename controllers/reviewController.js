const Review = require('../models/Review.js');

const reviewController = {
    index: (req, res) => {

    },
    new: (req, res) => {
        res.render('reviews/new');
    },
    create: (req, res) => {

    },
    delete: (req, res) => {

    }
};

module.exports = reviewController;