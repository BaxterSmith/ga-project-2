const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController.js');

router.get('/', albumController.index);
router.get('/new', albumController.new);
router.post('/', albumController.create);
router.get('/:albumId', albumController.show);
router.get('/:albumId/edit', albumController.edit);
router.put('/:albumId', albumController.update);
router.delete('/:albumId', albumController.delete);

module.exports = router;