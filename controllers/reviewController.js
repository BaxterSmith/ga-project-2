const Review = require('../models/Review.js');

const reviewController = {
    index: (req, res) => {
        Review.find().then(reviews => {
            res.render('index', {reviews})
        });
    },
    new: (req, res) => {
        res.render('reviews/new');
    },
    create: (req, res) => {
        Review.create(req.body).then(review => {
            res.redirect('/')
        });
    },
    delete: (req, res) => {
        Review.findByIdAndDelete(req.params.reviewId).then(() => {
            res.redirect('/')
        });
    }
};

module.exports = reviewController;