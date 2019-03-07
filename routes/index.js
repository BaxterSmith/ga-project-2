const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController.js');
const artistController = require('../controllers/artistController.js');
const reviewController = require('../controllers/reviewController.js');

// Album routes
router.get('/', albumController.index);

router.get('/new', albumController.new);

router.post('/', albumController.create);

router.get('/:albumId', albumController.show);

router.get('/:albumId/edit', albumController.edit);

router.put('/:albumId', albumController.update);

router.delete('/:albumId', albumController.delete);

// Artist routes
router.get('/artists', artistController.index);

router.get('/artists/new', artistController.new);

router.post('/artists', artistController.create);

router.get('/artists/:artistId', artistController.show);

router.delete('/artists/:artistId', artistController.delete);

// Review routes
router.get('/:albumId', reviewController.index);

router.get('/:albumId/reviews/new', reviewController.new);

router.post('/:albumId', reviewController.create);

router.delete('/:albumId/reviews/:reviewId', reviewController.delete);

module.exports = router;